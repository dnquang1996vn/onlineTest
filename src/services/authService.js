import axios from "@/config/authAxios";

export default {
  login(payload) {
    return axios.post("/verifyPassword", {
      ...payload,
      returnSecureToken: true
    });
  },
  register(payload) {
    return axios.post("/signupNewUser", {
      ...payload,
      returnSecureToken: true
    });
  }
};
