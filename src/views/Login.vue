<template>
  <div>
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
    </form>
  </div>
</template>

<script>
import { LOGIN } from "@/store/type";
export default {
  data() {
    return {
      payload: {
        email: "demo@gmail.com",
        password: "demo1234"
      }
    };
  },
  methods: {
    login() {
      this.$store.dispatch(LOGIN, this.payload).then();
    }
  }
};
</script>

<style scoped></style>
