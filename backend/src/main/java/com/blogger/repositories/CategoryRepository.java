package com.blogger.repositories;

import java.util.List;

import org.springframework.data.mongodb.repository.Aggregation;
import org.springframework.data.mongodb.repository.MongoRepository;

import com.blogger.models.Category;

public interface CategoryRepository extends MongoRepository<Category, String> {
  @Aggregation(pipeline = {
      "{ $addFields: { idString: { $toString: '$_id' } } }",
      "{ $lookup: { from: 'posts', localField: 'idString', foreignField: 'categoryId', as: 'posts' } }",
      "{ $project: { id: 1, name: 1, image: 1, description: 1, isDeleted: 1, posts: 1, createdAt: 1, updatedAt: 1} }"
  })
  List<Category> findAllWithPosts();
}
