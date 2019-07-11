<template>
  <el-dialog
    title="Edit post"
    :visible="dialogVisible"
    :show-close="false"
    width="30%"
  >
    <el-form ref="form" :model="payload" label-width="90px">
      <el-form-item label="Title">
        <el-input v-model="payload.title"></el-input>
      </el-form-item>
      <el-form-item label="Content">
        <el-input type="textarea" v-model="payload.content"></el-input>
      </el-form-item>
    </el-form>
    <span slot="footer" class="dialog-footer">
      <el-button @click="cancelSubmit">Cancel</el-button>
      <el-button type="primary" @click="submitEdit">Confirm</el-button>
    </span>
  </el-dialog>
</template>

<script>
import { EDIT_POST } from "@/store/type";

export default {
  props: ["post", "dialogVisible", "close"],
  data() {
    return {
      payload: { ...this.post }
    };
  },
  methods: {
    closeModal() {
      this.$emit("close");
    },
    cancelSubmit() {
      this.payload = { ...this.post };
      this.closeModal();
    },
    submitEdit() {
      this.$store.dispatch(EDIT_POST, this.payload).then(() => {
        this.closeModal();
      });
    }
  }
};
</script>

<style scoped></style>
