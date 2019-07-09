import axios from "axios";
let key = "AIzaSyAqeHIFZMNrIrd2AsuDx68_AemUnz5Nc9Q";

const instance = axios.create({
  baseURL: "https://authen-api-b001b.firebaseio.com"
});
instance.interceptors.request.use(config => ({
  ...config,
  params: {
    auth: key,
    ...config.params
  }
}));
export default instance;
