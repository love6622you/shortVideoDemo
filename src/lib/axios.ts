import axios from "axios";

const apiClient = axios.create({
  // 環境變數注入API的URL
  baseURL: "/api/"
});

apiClient.interceptors.request.use((request) => {
  return request;
});

apiClient.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default apiClient;
