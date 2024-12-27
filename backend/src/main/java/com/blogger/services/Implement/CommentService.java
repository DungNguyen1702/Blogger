package com.blogger.services.Implement;

import com.blogger.models.Comment;
import com.blogger.repositories.CommentRepository;
import com.blogger.services.Interface.ICommentService;
import com.blogger.services.ServiceBase.BaseServiceImpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CommentService extends BaseServiceImpl<Comment,String> implements ICommentService {
    @Autowired
    private CommentRepository commentRepository;

    @Override
    public List<Comment> findByPostId(String postId) {
        return List.of();
    }
}
