package com.blogger.repositories;

import java.util.Date;
import java.util.List;
import java.util.Optional;

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

  // @Aggregation(pipeline = {
  // "{ $addFields: { idString: { $toString: '$_id' } } }",
  // "{ $addFields: { categoryIdObjectId: { $toObjectId: '$categoryId' } } }",
  // "{ $addFields: { accountIdObjectId: { $toObjectId: '$accountId' } } }",
  // "{ $match: { isDeleted: false, idString: ?0 } }",
  // "{ $lookup: { from: 'categories', localField: 'categoryIdObjectId',
  // foreignField: '_id', as: 'category' } }",
  // "{ $lookup: { from: 'comments', localField: 'idString', foreignField:
  // 'postId', as: 'comments' } }",
  // "{ $lookup: { from: 'likes', localField: 'idString', foreignField: 'postId',
  // as: 'likes' } }",
  // "{ $lookup: { from: 'accounts', localField: 'accountIdObjectId',
  // foreignField: '_id', as: 'account' } }",
  // "{ $addFields: { category: { $arrayElemAt: ['$category', 0] } } }",
  // "{ $addFields: { account: { $arrayElemAt: ['$account', 0] } } }",

  // "{ $unwind: { path: '$comments', preserveNullAndEmptyArrays: true } }",
  // // "{ $addFields: { commentAccountIdObjectId: { $convert: { input:
  // '$comments.accountId', to: 'objectId', onError: null, onNull: null } } } }",
  // // "{ $lookup: { from: 'accounts', localField: 'commentAccountIdObjectId',
  // foreignField: '_id', as: 'comments.account' } }",
  // // "{ $addFields: { 'comments.account': { $arrayElemAt: ['$comments.account',
  // 0] } } }",

  // "{ $unwind: { path: '$likes', preserveNullAndEmptyArrays: true } }",
  // // "{ $addFields: { likeAccountIdObjectId: { $convjkt: ['$likes.account', 0]
  // } } }",

  // // "{ $unwind: { path: '$replies', preserveNullAndEmptyArrays: true } }",
  // // "{ $addFields: { commentParentIdObjectId: { $convert: { input:
  // '$comments.commentParentId', to: 'objectId', onError: null, onNull: null } }
  // } }",
  // // "{ $lookup: { from: 'comments', localField: 'likeAccountIdObjectId',
  // foreignField: '_id', as: 'likes.account' } }",
  // // "{ $addFields: { 'likes.account': { $arrayElemAt: ['$likes.account', 0] }
  // } }",

  // "{ $group: { " +
  // " _id: '$idString', " +
  // " title: { $first: '$title' }, " +
  // " content: { $first: '$content' }, " +
  // " accountId: { $first: '$accountId' }, " +
  // " categoryId: { $first: '$categoryId' }, " +
  // " category: { $first: '$category' }, " +
  // " account: { $first: '$account' }, " +
  // " background: { $first: '$background' }, " +
  // " createdAt: { $first: '$createdAt' }, " +
  // " updatedAt: { $first: '$updatedAt' }, " +
  // " isDeleted: { $first: '$isDeleted' }, " +
  // " viewTurn: { $first: '$viewTurn' }, " +
  // " likes: { $push: '$likes' }, " +
  // " comments: { $push: '$comments' } " +
  // "} }",

  // "{ $project: { categoryIdObjectId: 0, accountIdObjectId: 0 } }",
  // })
  // Optional<Post> findPostDetail(String id);

  @Aggregation(pipeline = {
    "{ $addFields: { idString: { $toString: '$_id' } } }",
    "{ $addFields: { categoryIdObjectId: { $toObjectId: '$categoryId' } } }",
    "{ $addFields: { accountIdObjectId: { $toObjectId: '$accountId' } } }",

    "{ $match: { isDeleted: false, idString: ?0 } }",

    "{ $lookup: { from: 'categories', localField: 'categoryIdObjectId', foreignField: '_id', as: 'category' } }",
    "{ $lookup: { from: 'accounts', localField: 'accountIdObjectId', foreignField: '_id', as: 'account' } }",

    // Lấy các bình luận gốc (commentParentId là rỗng hoặc null)
    "{ $lookup: { " +
        "from: 'comments', " +
        "let: { postId: '$idString' }, " +
        "pipeline: [ " +
            "{ $match: { " +
                "$expr: { " +
                    "$and: [ " +
                        "{ $eq: ['$postId', '$$postId'] }, " + // So sánh postId
                        "{ $or: [ " +
                            "{ $eq: ['$commentParentId', ''] }, " + // commentParentId là rỗng
                            "{ $eq: ['$commentParentId', null] } " + // commentParentId là null
                        "] } " +
                    "] " +
                "} " +
            "} } " +
        "], " +
        "as: 'comments' " +
    "} }",
    "{ $lookup: { from: 'likes', localField: 'idString', foreignField: 'postId', as: 'likes' } }",

    // Xử lý comments để thêm thông tin tài khoản
    "{ $unwind: { path: '$comments', preserveNullAndEmptyArrays: true } }",
    "{ $addFields: { commentAccountIdObjectId: { $toObjectId: '$comments.accountId' } } }",
    "{ $lookup: { from: 'accounts', localField: 'commentAccountIdObjectId', foreignField: '_id', as: 'comments.account' } }",
    "{ $addFields: { 'comments.account': { $arrayElemAt: ['$comments.account', 0] } } }",

    // Xử lý likes để thêm thông tin tài khoản
    "{ $unwind: { path: '$likes', preserveNullAndEmptyArrays: true } }",
    "{ $addFields: { likeAccountIdObjectId: { $toObjectId: '$likes.accountId' } } }",
    "{ $lookup: { from: 'accounts', localField: 'likeAccountIdObjectId', foreignField: '_id', as: 'likes.account' } }",
    "{ $addFields: { 'likes.account': { $arrayElemAt: ['$likes.account', 0] } } }",

    // Nhóm lại để khôi phục cấu trúc tài liệu
    "{ $group: { " +
        "_id: '$_id', " +
        "title: { $first: '$title' }, " +
        "content: { $first: '$content' }, " +
        "accountId: { $first: '$accountId' }, " +
        "categoryId: { $first: '$categoryId' }, " +
        "category: { $first: '$category' }, " +
        "account: { $first: '$account' }, " +
        "background: { $first: '$background' }, " +
        "createdAt: { $first: '$createdAt' }, " +
        "updatedAt: { $first: '$updatedAt' }, " +
        "isDeleted: { $first: '$isDeleted' }, " +
        "viewTurn: { $first: '$viewTurn' }, " +
        "comments: { $push: '$comments' } " +
        "likes: { $push: '$likes' } " +
    "} }",

    "{ $addFields: { category: { $arrayElemAt: ['$category', 0] } } }",
    "{ $addFields: { account: { $arrayElemAt: ['$account', 0] } } }",

    "{ $project: { categoryIdObjectId: 0, accountIdObjectId: 0 } }"
})
Optional<Post> findPostDetail(String id);

}
