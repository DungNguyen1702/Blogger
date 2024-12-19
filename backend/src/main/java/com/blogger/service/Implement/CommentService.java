package com.blogger.service.Implement;

import com.blogger.model.Comment;
import com.blogger.repository.CommentRepository;
import com.blogger.service.Interface.ICommentService;
import com.blogger.service.ServiceBase.BaseServiceImpl;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CommentService extends BaseServiceImpl<Comment,String> implements ICommentService {
    private final CommentRepository commentRepository;

    public CommentService(MongoRepository<Comment, String> repository, CommentRepository commentRepository) {
        super(repository);
        this.commentRepository = commentRepository;
    }

    @Override
    public List<Comment> findByPostId(String postId) {
        return List.of();
    }
}
