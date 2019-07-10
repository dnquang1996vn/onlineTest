<template>
  <el-form class="login-form" label-width="100px">
    <el-form-item label="Name">
      <el-input v-model="payload.email"></el-input>
    </el-form-item>
    <el-form-item label="Activity zone">
      <el-input v-model="payload.password"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click.prevent="login">Login</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import { LOGIN } from "@/store/type";
export default {
  data() {
    return {
      payload: {
        email: "demo@gmail.com",
        password: "demo1234"
      },
      error: ""
    };
  },
  methods: {
    login() {
      this.$store
        .dispatch(LOGIN, this.payload)
        .then(() => {
          this.$router.push("/post");
        })
        .catch(error => {
          this.error = error.response.data.error.message;
        });
    }
  }
};
</script>

<style scoped>
.login-form {
  border: 1px solid var(--color-grey-dark-3);
  padding: 4rem;
}
</style>
