<template>
  <div class="">
    <h1>{{ appName }}</h1>
    {{ sharedPost }}
  </div>
</template>



<script>
import { useCounterStore02 } from "../stores/counter2";
import { mapActions, mapState, mapStores } from "pinia";
import { usePostsStore } from "../stores/posts";

export default {
  data() {
    return {
      appName: "Single-Post",
    };
  },
  computed: {
    ...mapStores(usePostsStore),
    ...mapState(usePostsStore, ["posts", "countPost", "sharedPost"]),
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
    // this.fetchPostsData();
  },
};
</script>

<style lang="scss" scoped></style>
