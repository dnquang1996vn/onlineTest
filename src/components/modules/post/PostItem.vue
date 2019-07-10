<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span class="post-title">{{ post.title }}</span>
      <el-row>
        <el-button type="primary" icon="el-icon-edit" circle></el-button>
        <el-button type="danger" icon="el-icon-delete" circle></el-button>
      </el-row>
    </div>
    <div>
      {{ post.content }}
    </div>
  </el-card>
</template>

<script>
export default {
  props: ["post"],

};
</script>

<style lang="scss" scoped>
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}

.box-card {
  flex: 0 0 40%;
  margin: 5rem 5%;
  .post-title {
    color: #01e201;
    font-weight: bolder;
  }
}
</style>
