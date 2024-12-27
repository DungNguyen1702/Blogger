package com.blogger.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.blogger.models.Category;

public interface CategoryRepository extends MongoRepository<Category, String> {}
