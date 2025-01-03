package com.blogger.services.Interface;

import java.util.List;

import com.blogger.models.Category;
import com.blogger.services.ServiceBase.BaseService;

public interface ICategoryService extends BaseService<Category, String> {
    Category findByName(String name);

    List<Category> findAllWithPosts();
}