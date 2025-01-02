package com.blogger.repositories;

import java.util.List;

import org.springframework.data.mongodb.repository.Aggregation;
import org.springframework.data.mongodb.repository.MongoRepository;

import com.blogger.models.Account;
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

  @Aggregation(pipeline = {
      "{ $group: { _id: '$accountId', totalPosts: { $sum: 1 } } }",
      "{ $sort: { totalPosts: -1 } }",
      "{ $limit: 3 }",
      "{ $lookup: { from: 'accounts', localField: '_id', foreignField: '_id', as: 'account' } }",
      "{ $unwind: '$account' }",
      "{ $lookup: { from: 'posts', localField: '_id', foreignField: 'accountId', as: 'posts' } }",
      "{ $project: { account: 1, totalPosts: 1, posts: 1 } }"
  })
  List<Account> findTopWriter(String name);

}
