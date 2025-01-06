import axios from "axios";
import queryString from "query-string";

const getToken = () => {
  return localStorage.getItem('token'); // Adjust this according to your storage method
};

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

axiosClient.application.interceptors.request.use(
  config => {
    const token = getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

axiosClient.formData.interceptors.request.use(
  config => {
    const token = getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

export default axiosClient;
