package com.blogger.repositories;

import org.springframework.data.mongodb.repository.Aggregation;
import org.springframework.data.mongodb.repository.MongoRepository;

import com.blogger.models.Account;
import com.blogger.models.NorAccount;

import java.util.List;
import java.util.Optional;

public interface AccountRepository extends MongoRepository<Account, String> {
  Optional<Account> findByGmail(String account);

  @Aggregation(pipeline = {
      "{ $addFields: { idString: { $toString: '$_id' } } }",
      "{ $match: { isDeleted: false, role: 'USER' } }",
      "{ $lookup: { from: 'posts', localField: 'idString', foreignField: 'accountId', as: 'posts' } }",
      "{ $group: { " +
          "   _id: '$idString', " +
          "   totalPosts: { $sum: { $size: '$posts' } }, " +
          "   gmail: { $first: '$gmail' }, " +
          "   name: { $first: '$name' }, " +
          "   displayName: { $first: '$displayName' }, " +
          "   avatar: { $first: '$avatar' }, " +
          "   role: { $first: '$role' }, " +
          "   createdAt: { $first: '$createdAt' }, " +
          "   updatedAt: { $first: '$updatedAt' }, " +
          "   status: { $first: '$status' }, " +
          "   background: { $first: '$background' }, " +
          "   isDeleted: { $first: '$isDeleted' }, " +
          "   posts: { $push: '$posts' } " +
          "} }",
      "{ $unwind: { path: '$posts', preserveNullAndEmptyArrays: true } }",
      "{ $sort: { totalPosts: -1 } }",
      "{ $limit: 3 }"
  })
  List<NorAccount> findTop3AccountsByPostCount();

}
