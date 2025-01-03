package com.blogger.repositories;

import java.util.Date;
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

  @Aggregation(pipeline = {
      "{ $addFields: { idString: { $toString: '$_id' } } }",
      "{ $addFields: { categoryIdObjectId: { $toObjectId: '$categoryId' } } }",
      "{ $addFields: { accountIdObjectId: {$toObjectId: '$accountId'} } }",
      "{ $match: { isDeleted: false, createdAt: { $gte: ?0, $lt: ?1 } } }",
      "{ $lookup: { from: 'categories', localField: 'categoryIdObjectId', foreignField: '_id', as: 'category' } }",
      "{ $lookup: { from: 'comments', localField: 'idString', foreignField: 'postId', as: 'comments' } }",
      "{ $lookup: { from: 'likes', localField: 'idString', foreignField: 'postId', as: 'likes' } }",
      "{ $lookup: { from: 'accounts', localField: 'accountIdObjectId', foreignField: '_id', as: 'account' } }",
      "{ $addFields: { category: { $arrayElemAt: ['$category', 0] } } }",
      "{ $addFields: { account: { $arrayElemAt: ['$account', 0] } } }",
      "{ $group: { " +
          "   _id: '$idString', " +
          "   totalComments: { $sum: { $size: '$comments' } }, " +
          "   totalLikes: { $sum: { $size: '$likes' } }, " +
          "   title: { $first: '$title' }, " +
          "   content: { $first: '$content' }, " +
          "   accountId: { $first: '$accountId' }, " +
          "   categoryId: { $first: '$categoryId' }, " +
          "   category: { $first: '$category' }, " +
          "   account: { $first: '$account' }, " +
          "   background: { $first: '$background' }, " +
          "   createdAt: { $first: '$createdAt' }, " +
          "   updatedAt: { $first: '$updatedAt' }, " +
          "   isDeleted: { $first: '$isDeleted' }, " +
          "   viewTurn: { $first: '$viewTurn' }, " +
          "   likes: { $push: '$likes' }, " +
          "   comments: { $push: '$comments' } " +
          "} }",
      "{ $sort: { totalComments: -1, totalLikes: -1, viewTurn: -1, createdAt: -1, updatedAt: -1 } }",
      "{ $unwind: { path: '$likes', preserveNullAndEmptyArrays: true } }",
      "{ $unwind: { path: '$comments', preserveNullAndEmptyArrays: true } }",
      "{ $project: { categoryIdObjectId: 0, accountIdObjectId: 0 } }",
      "{ $limit: ?2 }"
  })
  List<Post> findFeaturedThisMonthPost(Date startOfMonth, Date startOfNextMonth, Integer limit);

  @Aggregation(pipeline = {
      "{ $addFields: { idString: { $toString: '$_id' } } }",
      "{ $addFields: { categoryIdObjectId: { $toObjectId: '$categoryId' } } }",
      "{ $addFields: { accountIdObjectId: {$toObjectId: '$accountId'} } }",
      "{ $match: { isDeleted: false } }",
      "{ $lookup: { from: 'categories', localField: 'categoryIdObjectId', foreignField: '_id', as: 'category' } }",
      "{ $lookup: { from: 'comments', localField: 'idString', foreignField: 'postId', as: 'comments' } }",
      "{ $lookup: { from: 'likes', localField: 'idString', foreignField: 'postId', as: 'likes' } }",
      "{ $lookup: { from: 'accounts', localField: 'accountIdObjectId', foreignField: '_id', as: 'account' } }",
      "{ $addFields: { category: { $arrayElemAt: ['$category', 0] } } }",
      "{ $addFields: { account: { $arrayElemAt: ['$account', 0] } } }",
      "{ $group: { " +
          "   _id: '$idString', " +
          "   totalComments: { $sum: { $size: '$comments' } }, " +
          "   totalLikes: { $sum: { $size: '$likes' } }, " +
          "   title: { $first: '$title' }, " +
          "   content: { $first: '$content' }, " +
          "   accountId: { $first: '$accountId' }, " +
          "   categoryId: { $first: '$categoryId' }, " +
          "   category: { $first: '$category' }, " +
          "   account: { $first: '$account' }, " +
          "   background: { $first: '$background' }, " +
          "   createdAt: { $first: '$createdAt' }, " +
          "   updatedAt: { $first: '$updatedAt' }, " +
          "   isDeleted: { $first: '$isDeleted' }, " +
          "   viewTurn: { $first: '$viewTurn' }, " +
          "   likes: { $push: '$likes' }, " +
          "   comments: { $push: '$comments' } " +
          "} }",
      "{ $sort: { totalComments: -1, totalLikes: -1, viewTurn: -1, createdAt: -1, updatedAt: -1 } }",
      "{ $unwind: { path: '$likes', preserveNullAndEmptyArrays: true } }",
      "{ $unwind: { path: '$comments', preserveNullAndEmptyArrays: true } }",
      "{ $project: { categoryIdObjectId: 0, accountIdObjectId: 0 } }",
      "{ $limit: ?0 }"
  })
  List<Post> findPopularPost(Integer limit);

}
