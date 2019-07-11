<template>
  <el-form class="login-form" label-width="100px">
    <el-alert v-if="error" :title="error" type="error"> </el-alert>

    <el-form-item label="Name">
      <el-input
        v-model="payload.email"
        :rules="[
          {
            required: true,
            message: 'Please input email address',
            trigger: 'blur'
          },
          {
            type: 'email',
            message: 'Please input correct email address',
            trigger: ['blur', 'change']
          }
        ]"
      ></el-input>
    </el-form-item>
    <el-form-item label="Password">
      <el-input v-model="payload.password" type="password" required></el-input>
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
