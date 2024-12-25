package com.blogger.service.Implement;

import com.blogger.model.Category;
import com.blogger.repository.CategoryRepository;
import com.blogger.service.Interface.ICategoryService;
import com.blogger.service.ServiceBase.BaseServiceImpl;

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
