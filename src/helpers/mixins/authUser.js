import { GET_USER } from "@/store/type";
import { getUserStorage } from "@/helpers/localStorage";
import store from "@/store/store";

const authMixin = {
  computed: {
    isAuthenticated() {
      return this.authUser.email !== "";
    },
    authUser() {
      return store.getters[GET_USER];
    }
  },
  methods: {
    getCurrentUser: () => getUserStorage()
  },
  mounted() {}
};

export default authMixin;
