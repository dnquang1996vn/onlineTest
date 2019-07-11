<template>
  <div class="post-list">
    <PostItem v-for="post in posts" :key="post.id" :post="post" />
  </div>
</template>

<script>
import { FETCH_POSTS } from "@/store/type";
import PostItem from "./PostItem";
export default {
  components: { PostItem },
  data() {
    return {
      dialogVisible: false
    };
  },
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

<style scoped>
.post-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
}
</style>
