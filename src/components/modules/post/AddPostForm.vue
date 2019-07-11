<template>
  <el-form :model="payload" ref="addPostForm" label-width="150px">
    <el-form-item
      label="Title"
      prop="title"
      :rules="[
        {
          required: true,
          message: 'Please input title'
        }
      ]"
    >
      <el-input v-model="payload.title"></el-input>
    </el-form-item>
    <el-form-item
      label="Content"
      prop="content"
      :rules="[
        {
          required: true,
          message: 'Please input content'
        }
      ]"
    >
      <el-input type="textarea" v-model="payload.content"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="addNewPost('addPostForm')"
        >Create</el-button
      >
    </el-form-item>
  </el-form>
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
    addNewPost(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.$store.dispatch(ADD_NEW_POST, this.payload);
        }
      });
    }
  }
};
</script>

<style scoped></style>
