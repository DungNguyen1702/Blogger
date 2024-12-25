import axios from "axios";
import queryString from "query-string";


console.log("=================ENV===================");
console.log(import.meta.env);
console.log("====================================");
const axiosClient = {
  application: axios.create({
    baseURL: import.meta.env.VITE_SPRING_BOOT_URL,

    headers: {
      "content-type": "application/json"
    },
    paramsSerializer: params => queryString.stringify(params)
  }),

  applicationNoAuth: axios.create({
    baseURL: import.meta.env.VITE_SPRING_BOOT_URL,

    headers: {
      "content-type": "application/json"
    },
    paramsSerializer: params => queryString.stringify(params)
  }),

  formData: axios.create({
    baseURL: import.meta.env.VITE_URL,

    headers: {
      "content-type": "multipart/form-data"
    }
  }),

  formDataNoAuth: axios.create({
    baseURL: import.meta.env.VITE_SPRING_BOOT_URL,

    headers: {
      "content-type": "multipart/form-data"
    }
  })
};

export default axiosClient;
