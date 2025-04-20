import type { Comment } from "../type/entities";
import axiosClient from "./axiosClient";

const CommentAPI = {
  createComment: async (newComment : Partial<Comment>) => {
    const url = "/api/comments";
    return axiosClient.application.post(url, newComment);
  },
};

export default CommentAPI;
