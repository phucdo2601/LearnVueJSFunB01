import { defineStore } from "pinia";

export const usePostsStore = defineStore("post", {
  state: () => ({
    post: [],
  }),
  getters: {},
  actions: {
    async fetchPostsData() {
      const res = await fetch("https://dummyjson.com/posts");
      const data = await res.json();

      console.log(data);
    },
  },
});
