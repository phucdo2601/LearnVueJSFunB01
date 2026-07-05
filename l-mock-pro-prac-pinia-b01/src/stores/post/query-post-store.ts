import { defineStore } from "pinia";
import { ref } from "vue";

export const useQueryPostStore = defineStore("query-post-store", () => {
  const loading = ref(false);
  const posts = ref([]);

  const post = ref({});

  const userName = ref("Ben");

  const fetchPostData = async () => {
    try {
      loading.value = true;
      const res = await fetch("https://dummyjson.com/posts");
      const data = await res.json();
      posts.value = data.posts;
      loading.value = false;
    } catch (error: any) {
      loading.value = false;
      console.log(error.messsage);
    }
  };

  const viewSinglePost = (slug: any) => {
    const postData = localStorage.getItem("post-" + slug);
    if (typeof postData !== "object") {
      const parsePostData = JSON.parse(postData);
      post.value = parsePostData;
    } else {
      const filterPostArray = posts.value.filter(
        (post: any) => post.id === slug,
      );
      if (filterPostArray.length > 0) {
        localStorage.setItem("post-" + slug, JSON.stringify(filterPostArray));
        post.value = filterPostArray;
      }
    }
  };

  return {
    posts,
    loading,
    fetchPostData,
    viewSinglePost,
    post,
    userName,
  };
});
