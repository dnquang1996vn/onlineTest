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
  editPost(id, payload) {
    return axios.patch("/posts.json", {
      [id]: payload
    });
  },
  deletePost(id) {
    return axios.delete(`/posts/${id}.json`);
  }
};
