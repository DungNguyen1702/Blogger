package com.blogger.service.Interface;

import com.blogger.model.Category;
import com.blogger.service.ServiceBase.BaseService;

public interface ICategoryService extends BaseService<Category, String> {
    Category findByName(String name);
}