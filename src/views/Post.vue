<template>
  <div class="post-page">
    <div class="add-post-box">
      <h1>Add new post</h1>
      <AddPostForm />
    </div>
    <PostList />
  </div>
</template>

<script>
import AddPostForm from "@/components/modules/post/AddPostForm.vue";
import PostList from "@/components/modules/post/PostList.vue";

export default {
  components: {
    AddPostForm,
    PostList
  }
};
</script>

<style>
.post-page {
  padding: 2rem 4rem 0 4rem;
}
.add-post-box {
  padding: 2rem 10rem;
}
</style>
