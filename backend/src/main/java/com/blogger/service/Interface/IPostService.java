package com.blogger.service.Interface;

import com.blogger.model.Post;
import com.blogger.service.ServiceBase.BaseService;

import java.util.List;

public interface IPostService extends BaseService<Post, String> {
    List<Post> findByCategoryId(String categoryId);
    List<Post> findByAccountId(String accountId);
}

