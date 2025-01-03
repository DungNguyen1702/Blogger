import axiosClient from "./axiosClient";

const PostAPI = {
  getAllPost: async () => {
    const url = "/api/posts";
    return axiosClient.applicationNoAuth.get(url);
  },

  getFeaturedThisMonthPost: async () => {
    const url = "/api/posts/featured-month";
    return axiosClient.applicationNoAuth.get(url);
  },

  getPopularPosts: async (limit: Number = 4) => {
    const url = `/api/posts/popular?limit=${limit}`;
    return axiosClient.applicationNoAuth.get(url);
  },
};

export default PostAPI;
