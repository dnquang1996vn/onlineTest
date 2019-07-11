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
    [type.DELETE_POST](state, id) {
      state.posts = state.posts.filter(item => item.id !== id);
    },
    [type.EDIT_POST](state, payload) {
      state.posts = state.posts.map(item => {
        if (item.id === payload.id) {
          item = { ...payload };
        }
        return item;
      });
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
    async [type.DELETE_POST]({ commit }, id) {
      await postService.deletePost(id);
      commit(type.DELETE_POST, id);
    },
    async [type.EDIT_POST]({ commit }, payload) {
      await postService.editPost(payload);
      commit(type.EDIT_POST, payload);
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
