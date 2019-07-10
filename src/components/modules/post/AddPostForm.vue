<template>
  <form @submit.prevent="addNewPost">
    <label>
      Title:
      <input v-model="payload.title" type="text" />
    </label>
    <br />
    <label>
      Content:
      <textarea v-model="payload.content"></textarea>
    </label>
    <br />
    <button>Add</button>
  </form>
</template>

<script>
import { ADD_NEW_POST } from "@/store/type";

export default {
  data() {
    return {
      payload: {
        title: "",
        content: ""
      }
    };
  },
  methods: {
    addNewPost() {
      this.$store.dispatch(ADD_NEW_POST, this.payload);
    }
  }
};
</script>

<style scoped></style>
