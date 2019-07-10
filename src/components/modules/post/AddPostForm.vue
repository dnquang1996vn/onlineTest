<template>
  <el-form ref="form" :model="payload" label-width="150px">
    <el-form-item label="Title">
      <el-input v-model="payload.title"></el-input>
    </el-form-item>
    <el-form-item label="Content">
      <el-input type="textarea" v-model="payload.content"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="addNewPost">Create</el-button>
      <el-button>Cancel</el-button>
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
    addNewPost() {
      this.$store.dispatch(ADD_NEW_POST, this.payload);
    }
  }
};
</script>

<style scoped></style>
