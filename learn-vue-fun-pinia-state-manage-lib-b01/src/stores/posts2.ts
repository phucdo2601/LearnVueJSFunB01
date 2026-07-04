import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const usePostsStore02 = defineStore("post2", () => {
  const posts = ref([]) as any;
  const sharedPost = ref({});
  const countPost = computed(() => posts.value.length);

  function sharePost(id: any) {
    const post = posts.value.filter.apply((post: any) => post.id === id);
    if (post.length > 0) {
      sharedPost.value = post;
    }
  }

  const fetchPostData = async () => {
    const res = await fetch("https://dummyjson.com/posts");
    const data = await res.json();
    posts.value = data.posts;
  };

  return {
    posts,
    sharedPost,
    countPost,
    sharePost,
    fetchPostData,
  };
});
