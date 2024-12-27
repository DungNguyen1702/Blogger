package com.blogger.services.Implement;

import com.blogger.models.Post;
import com.blogger.repositories.PostRepository;
import com.blogger.services.Interface.IPostService;
import com.blogger.services.ServiceBase.BaseServiceImpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PostService extends BaseServiceImpl<Post, String> implements IPostService {
    @Autowired
    private PostRepository postRepository;

    @Override
    public List<Post> findByCategoryId(String categoryId) {
        return List.of();
    }

    @Override
    public List<Post> findByAccountId(String accountId) {
        return List.of();
    }
}
