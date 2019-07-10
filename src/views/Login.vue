<template>
  <div class="login">
    <LoginForm />
  </div>
</template>
<script>
import LoginForm from "@/components/modules/auth/LoginForm";

export default {
  components: {
    LoginForm
  }
};
</script>

<style scoped>
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(94vh - 7rem);
}
</style>
