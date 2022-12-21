import axios from "axios";
import { message } from "antd";
import config from "../config";

const requests = axios.create({
  baseURL: config.API_HOST,
  withCredentials: false,
});

requests.interceptors.request.use(
  (config) => {
    config.headers["content-type"] = "application/json";
    return config;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);

requests.interceptors.response.use(
  (response) => {
    const result = response.data;
    return result;
  },
  (error) => {
    console.log("error" + error);
    return Promise.reject(error);
  }
);

export default requests;
