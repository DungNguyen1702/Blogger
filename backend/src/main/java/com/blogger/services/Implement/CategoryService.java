package com.blogger.services.Implement;

import com.blogger.models.Category;
import com.blogger.repositories.CategoryRepository;
import com.blogger.services.Interface.ICategoryService;
import com.blogger.services.ServiceBase.BaseServiceImpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CategoryService extends BaseServiceImpl<Category, String> implements ICategoryService {
    @Autowired
    private CategoryRepository categoryRepository;

    @Override
                
    public Category findByName(String name) {
        return categoryRepository.findAll().stream().filter(category -> category.equals(category.getName())).findAny().get();
    }
}
