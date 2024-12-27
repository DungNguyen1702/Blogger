package com.blogger.services.Interface;

import com.blogger.models.Post;
import com.blogger.services.ServiceBase.BaseService;

import java.util.List;

public interface IPostService extends BaseService<Post, String> {
    List<Post> findByCategoryId(String categoryId);
    List<Post> findByAccountId(String accountId);
}

