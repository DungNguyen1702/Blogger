import axiosClient from "./axiosClient";
import PostCreateModel from "../model/request/PostCreate";

const PostAPI = {
  getAllPost: async () => {
    const url = "/api/posts";
    return axiosClient.applicationNoAuth.get(url);
  },
  getPostDetail: async (id:string) => {
    const url = `/api/posts/${id}`;
    return axiosClient.applicationNoAuth.get(url);
  },

  createPost: async (post: PostCreateModel) => {
    const url = "/api/posts";
    return axiosClient.application.post(url, post);
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
