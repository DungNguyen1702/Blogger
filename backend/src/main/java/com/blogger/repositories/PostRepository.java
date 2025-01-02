package com.blogger.repositories;

import java.util.List;

import org.springframework.data.mongodb.repository.Aggregation;
import org.springframework.data.mongodb.repository.MongoRepository;

import com.blogger.models.Post;

public interface PostRepository extends MongoRepository<Post, String> {

  @Aggregation(pipeline = {
      "{ $match: { isDeleted: false } }",
      "{ $addFields: { categoryIdObjectId: { $toObjectId: '$categoryId' } } }",
      "{ $addFields: { accountIdObjectId: {$toObjectId: '$accountId'} } }",
      "{ $lookup: { from: 'categories', localField: 'categoryIdObjectId', foreignField: '_id', as: 'category' } }",
      "{ $lookup: { from: 'accounts', localField: 'accountIdObjectId', foreignField: '_id', as: 'account' } }",
      "{ $addFields: { category: { $arrayElemAt: ['$category', 0] } } }",
      "{ $addFields: { account: { $arrayElemAt: ['$account', 0] } } }",
      "{ $sort: { createdAt: -1, updatedAt: -1 } }",
      "{ $project: { categoryIdObjectId: 0, accountIdObjectId: 0 } }"
  })
  List<Post> findAllPostsWithCategory();
}
