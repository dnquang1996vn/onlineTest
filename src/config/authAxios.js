import axios from "axios";
import NProgress from "nprogress";
let key = "AIzaSyAqeHIFZMNrIrd2AsuDx68_AemUnz5Nc9Q";

const instance = axios.create({
  baseURL: "https://www.googleapis.com/identitytoolkit/v3/relyingparty"
});
instance.interceptors.request.use(config => {
  NProgress.start();
  //config jwt token for request
  return {
    ...config,
    params: {
      key: key,
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
    return Promise.reject(error);
  }
);
export default instance;
