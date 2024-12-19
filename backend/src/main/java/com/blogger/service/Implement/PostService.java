package com.blogger.service.Implement;

import com.blogger.model.Post;
import com.blogger.repository.PostRepository;
import com.blogger.service.Interface.IPostService;
import com.blogger.service.ServiceBase.BaseServiceImpl;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PostService extends BaseServiceImpl<Post, String> implements IPostService {
    private final PostRepository postRepository;

    public PostService(MongoRepository<Post, String> repository, PostRepository postRepository) {
        super(repository);
        this.postRepository = postRepository;
    }

    @Override
    public List<Post> findByCategoryId(String categoryId) {
        return List.of();
    }

    @Override
    public List<Post> findByAccountId(String accountId) {
        return List.of();
    }
}
