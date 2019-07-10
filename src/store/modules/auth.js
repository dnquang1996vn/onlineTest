import * as type from "../type";
import authService from "@/services/authService";
import { setStorage, getUserStorage } from "@/helpers/localStorage";

const initUser = {
  email: "",
  idToken: "",
  refreshToken: ""
};
const auth = {
  state: {
    user: getUserStorage() || { ...initUser }
  },
  getters: {
    [type.GET_USER]: state => state.user,
    [type.IS_AUTHENTICATED]: state => state.user.email !== ""
  },
  mutations: {
    [type.MUTATE_USER](state, payload) {
      state.user = payload;
    }
  },
  actions: {
    async [type.LOGIN]({ commit }, payload) {
      const res = await authService.login(payload);
      const { email, idToken, refreshToken } = res.data;
      const user = {
        email,
        idToken,
        refreshToken
      };
      setStorage(user);
      commit(type.MUTATE_USER, user);
    }
  }
};
export default auth;
