<template>
  <el-form :model="payload" :ref="formName" label-width="150px">
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
      <el-button type="primary" @click="addNewPost">Create</el-button>
      <el-button @click="resetForm('addPostForm')">Reset</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import { ADD_NEW_POST } from "@/store/type";

export default {
  data() {
    return {
      formName: "addPostForm",
      payload: {
        title: "",
        content: ""
      }
    };
  },
  methods: {
    clearData() {
      this.payload = {
        title: "",
        content: ""
      };
      this.$refs[this.formName].resetFields();
    },
    addNewPost() {
      this.$refs[this.formName].validate(valid => {
        if (valid) {
          this.$store.dispatch(ADD_NEW_POST, this.payload).then(() => {
            this.clearData();
          });
        }
      });
    }
  }
};
</script>

<style scoped></style>
