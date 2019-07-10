<template>
  <form @submit.prevent="login">
    <label>
      email:
      <input type="text" v-model="payload.email" />
    </label>
    <label>
      password:
      <input type="password" v-model="payload.password" />
    </label>
    <button>submit</button>
    {{ error }}
  </form>
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

<style scoped></style>
