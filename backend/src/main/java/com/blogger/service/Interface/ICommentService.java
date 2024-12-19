package com.blogger.service.Interface;

import com.blogger.model.Comment;
import com.blogger.service.ServiceBase.BaseService;

import java.util.List;

public interface ICommentService extends BaseService<Comment, String> {
    List<Comment> findByPostId(String postId);
}

