import axios from "@/config/axios";

export default {
  addNewPost(payload) {
    return axios.post("/posts.json", {
      ...payload
    });
  },
  fetchPosts() {
    return axios.get("/posts.json");
  },
  editPost(payload) {
    return axios.patch("/posts.json", {
      [payload.id]: { title: payload.title, content: payload.content }
    });
  },
  deletePost(id) {
    return axios.delete(`/posts/${id}.json`);
  }
};
