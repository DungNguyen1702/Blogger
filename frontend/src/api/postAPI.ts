import axiosClient from "./axiosClient";

const PostAPI = {
  getAllPost: async () => {
    const url = "/api/posts";
    return axiosClient.applicationNoAuth.get(url);
  },
};

export default PostAPI;
