<template>
  <div>
    {{ posts }}
  </div>
</template>

<script>
import { FETCH_POSTS } from "@/store/type";

export default {
  computed: {
    posts() {
      return this.$store.state.post.posts;
    }
  },
  mounted() {
    this.$store.dispatch(FETCH_POSTS);
  }
};
</script>

<style scoped></style>
