import { defineStore } from "pinia";

export const usePostsStore = defineStore("post", {
  state: () => ({
    posts: [],
    sharedPost: {},
  }),
  getters: {
    countPost: (state) => state.posts.length,
  },
  actions: {
    async fetchPostsData() {
      const res = await fetch("https://dummyjson.com/posts");
      const data = await res.json();
      this.posts = data.posts;
      console.log(data.posts);
      console.log(this.posts.length);
    },
    sharePost(id: any) {
      console.log(id);

      const post = this.posts.filter((post: any) => post.id === id) as any;
      console.log(post);

      if (post.length > 0) {
        this.sharedPost = post;
      }
    },
  },
});
