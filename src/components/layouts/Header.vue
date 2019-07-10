<template>
  <div>
    <header class="header">
      <img src="~@/assets/img/logo.png" alt="Logo" class="logo" />
      <div class="menu-tab">
        <router-link to="/">Home</router-link>
        <router-link v-if="isAuthenticated" to="/post">Post</router-link>
        <router-link v-if="!isAuthenticated" to="/login">Login</router-link>
      </div>
      <div>
        <div v-if="isAuthenticated" class="user-info">
          <span>{{ authUser.email }}</span>
          <el-button type="success" plain @click.prevent="logout"
            >Logout</el-button
          >
        </div>
      </div>
    </header>
  </div>
</template>

<script>
import { LOGOUT } from "@/store/type";

export default {
  methods: {
    logout() {
      this.$store.dispatch(LOGOUT).then(() => {
        this.$router.push("/login");
        // window.location.reload();
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.header {
  font-size: 1.4rem;
  height: 7rem;
  background-color: #fff;
  border-bottom: var(--line);

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  .logo {
    width: 5rem;
  }
}
.menu-tab {
  display: flex;
  a {
    font-weight: bold;
    color: #2c3e50;
    margin: auto 2rem;
    font-size: 3rem;
    text-decoration: none;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.user-info {
  span {
    font-size: 2rem;
    margin-right: 1.5rem;
  }
}
</style>
