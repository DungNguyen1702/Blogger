import axiosClient from "./axiosClient";

const CategoryAPI = {
  getAllCategory: async () => {
    const url = "/api/categories";
    return axiosClient.applicationNoAuth.get(url);
  },
};

export default CategoryAPI;
