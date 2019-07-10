import axios from "axios";
import { getTokenStorage } from "@/helpers/localStorage";

let token = getTokenStorage();

const instance = axios.create({
  baseURL: "https://authen-api-b001b.firebaseio.com"
});

//config jwt token for request
instance.interceptors.request.use(config => ({
  ...config,
  params: {
    auth: token,
    ...config.params
  }
}));
export default instance;
