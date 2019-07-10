<template>
  <div id="app">
    <Header />
    <router-view />
  </div>
</template>

<script>
import Header from "@/components/layouts/Header.vue";

export default {
  components: {
    Header
  }
};
</script>
<style lang="scss">
@import "~@/assets/styles/base.scss";
@import "~@/assets/styles/common.scss";
@import "~@/assets/styles/layout.scss";
</style>
