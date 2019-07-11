import axios from "axios";
import NProgress from "nprogress";
import { getTokenStorage, clearStorage } from "@/helpers/localStorage";

const instance = axios.create({
  baseURL: "https://authen-api-b001b.firebaseio.com"
});

instance.interceptors.request.use(config => {
  NProgress.start();
  //config jwt token for request
  return {
    ...config,
    params: {
      auth: getTokenStorage(),
      ...config.params
    }
  };
});

instance.interceptors.response.use(
  response => {
    // Called on response
    NProgress.done();
    return response;
  },
  error => {
    // Called on error
    NProgress.done();
    // redirect when unauthorized
    if (error.response.status === 401) {
      clearStorage();
      // window.location.reload();
    }
    return Promise.reject(error);
  }
);
export default instance;
