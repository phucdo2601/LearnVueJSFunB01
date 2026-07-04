<template>
  <div>
    <h1>{{ appName }} - {{ appNameLength }}</h1>

    <div>count: {{ count }} - {{ double }}</div>

    <button @click="increment">increment</button>

    <br />
    <br />
    <ul>
      <li>
        <RouterLink to="/"> Posts </RouterLink>
      </li>
      <li>
        <RouterLink to="/single-post"> Single post </RouterLink>
      </li>
    </ul>
    <br />

    <h1>Count Post: {{ countPost }}</h1>

    <div class="" v-for="post in posts">
      <a
        :href="`https://dummyjson.com/products/${post.id}`"
        target="_blank"
        rel="noopener noreferrer"
      >
        https://dummyjson.com/products/{{ post.id }}
      </a>
      <p>{{ post.title }}

        <button @click="sharePost(post?.id)">Share</button>
      </p>
    </div>
  </div>
</template>

<script>
import { useCounterStore02 } from "../stores/counter2";
import { mapActions, mapState, mapStores } from "pinia";
import { usePostsStore } from "../stores/posts";

export default {
  data() {
    return {
      appName: "Posts",
    };
  },
  computed: {
    ...mapStores(useCounterStore02, usePostsStore),
    ...mapState(useCounterStore02, ["count", "double"]),
    ...mapState(usePostsStore, ["posts", "countPost"]),
    appNameLength() {
      return this.appName.length;
    },
  },
  methods: {
    ...mapActions(useCounterStore02, ["increment"]),
    ...mapActions(usePostsStore, ["fetchPostsData", "sharePost"]),
  },
  incrementAgain() {
    this.increment();
  },
  async mounted() {
    // this.increment(),
    this.fetchPostsData();
  },
};
</script>

<style lang="scss" scoped></style>
