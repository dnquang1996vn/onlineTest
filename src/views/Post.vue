<template>
  <div>
    <div>
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

<style scoped></style>
