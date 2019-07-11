<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span class="post-title">{{ post.title }}</span>
      <el-row style="float: right">
        <el-button
          @click="openEditModal"
          type="primary"
          icon="el-icon-edit"
          circle
        ></el-button>
        <el-button
          @click="deletePost"
          type="danger"
          icon="el-icon-delete"
          circle
        ></el-button>
      </el-row>
    </div>
    <div>
      {{ post.content }}
    </div>
    <PostEditModal
      :post="post"
      :dialog-visible="isOpenEditModal"
      @close="closeEditModal"
    />
  </el-card>
</template>

<script>
import { DELETE_POST } from "@/store/type";
import PostEditModal from "./PostEditModal.vue";

export default {
  components: { PostEditModal },
  props: ["post"],
  data() {
    return {
      isOpenEditModal: false
    };
  },
  methods: {
    deletePost() {
      this.$store.dispatch(DELETE_POST, this.post.id);
    },
    closeEditModal() {
      this.isOpenEditModal = false;
    },
    openEditModal() {
      this.isOpenEditModal = true;
    }
  }
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
