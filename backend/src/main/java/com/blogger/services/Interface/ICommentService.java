package com.blogger.services.Interface;

import com.blogger.models.Comment;
import com.blogger.services.ServiceBase.BaseService;

import java.util.List;

public interface ICommentService extends BaseService<Comment, String> {
    List<Comment> findByPostId(String postId);
}

