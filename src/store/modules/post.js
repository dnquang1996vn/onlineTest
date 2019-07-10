import * as type from "../type";
import postService from "@/services/postService";
const post = {
  state: {
    posts: []
  },
  mutations: {
    [type.ADD_NEW_POST](state, payload) {
      state.posts.push(payload);
    },
    [type.MUTATE_POST](state, payload) {
      state.posts = payload;
    }
  },
  actions: {
    async [type.ADD_NEW_POST]({ commit }, payload) {
      let res = await postService.addNewPost(payload);
      commit(type.ADD_NEW_POST, {
        id: res.data.name,
        ...payload
      });
    },
    async [type.ADD_NEW_POST]({ commit }, payload) {
      let res = await postService.addNewPost(payload);
      commit(type.ADD_NEW_POST, {
        id: res.data.name,
        ...payload
      });
    },
    async [type.FETCH_POSTS]({ commit }) {
      let res = await postService.fetchPosts();
      const data = res.data;
      let posts = [];
      for (let key in data) {
        const post = data[key];
        post.id = key;
        posts.push(post);
      }
      commit(type.MUTATE_POST, posts);
    }
  }
};
export default post;
