import axios from "axios";
let key = "AIzaSyAqeHIFZMNrIrd2AsuDx68_AemUnz5Nc9Q";

const instance = axios.create({
  baseURL: "https://www.googleapis.com/identitytoolkit/v3/relyingparty"
});
instance.interceptors.request.use(config => ({
  ...config,
  params: {
    key: key,
    ...config.params
  }
}));
export default instance;
