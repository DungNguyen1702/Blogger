package com.blogger.repositories.Impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.aggregation.Aggregation;
import org.springframework.data.mongodb.core.aggregation.AggregationOperation;
import org.springframework.data.mongodb.core.aggregation.AggregationResults;
import org.springframework.data.mongodb.core.aggregation.ArrayOperators;
import org.springframework.data.mongodb.core.aggregation.ConvertOperators;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.stereotype.Repository;

import com.blogger.models.Post;
import com.blogger.repositories.Custom.PostRepositoryCustom;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Repository
public class PostRepositoryImpl implements PostRepositoryCustom {

  @Autowired
  private MongoTemplate mongoTemplate;

  @Override
  public Optional<Post> findPostDetail(String id) {
    List<AggregationOperation> pipeline = new ArrayList<>();

    // Chuyển đổi kiểu dữ liệu
    pipeline.add(Aggregation.addFields()
        .addField("idString").withValue(ConvertOperators.ToString.toString("$_id"))
        .addField("categoryIdObjectId").withValue(ConvertOperators.ToObjectId.toObjectId("$categoryId"))
        .addField("accountIdObjectId").withValue(ConvertOperators.ToObjectId.toObjectId("$accountId"))
        .build());

    // Lọc bài viết theo ID và trạng thái chưa bị xóa
    pipeline.add(Aggregation.match(Criteria.where("isDeleted").is(false).and("idString").is(id)));

    // Lookup categories, accounts
    pipeline.add(Aggregation.lookup("categories", "categoryIdObjectId", "_id", "category"));
    pipeline.add(Aggregation.lookup("accounts", "accountIdObjectId", "_id", "account"));

    // Lookup comments
    pipeline.add(Aggregation.lookup()
        .from("comments")
        .localField("idString")
        .foreignField("postId")
        .pipeline(
            // Chỉ lấy các comment cha (commentParentId rỗng)
            Aggregation.match(Criteria.where("commentParentId").is("")),

            Aggregation.addFields()
                .addField("commentAccountIdObjectId").withValue(ConvertOperators.ToObjectId.toObjectId("$accountId"))
                .addField("commentIdString").withValue(ConvertOperators.ToString.toString("$_id"))
                .build(),

            // Lookup account của từng comment
            Aggregation.lookup("accounts", "commentAccountIdObjectId", "_id", "commentAccount"),

            // Lấy phần tử đầu tiên của và account
            Aggregation.addFields()
                .addField("account").withValue(ArrayOperators.ArrayElemAt.arrayOf("$commentAccount").elementAt(0))
                .build(),

            // Lookup replies (bình luận con) của từng comment
            Aggregation.lookup()
                .from("comments")
                .localField("commentIdString")
                .foreignField("commentParentId")
                .pipeline(
                    Aggregation.addFields()
                        .addField("replyAccountIdObjectId")
                        .withValue(ConvertOperators.ToObjectId.toObjectId("$accountId"))
                        .build(),
                    Aggregation.lookup("accounts", "replyAccountIdObjectId", "_id", "replyAccount"),
                    Aggregation.addFields()
                        .addField("account").withValue(ArrayOperators.ArrayElemAt.arrayOf("$replyAccount").elementAt(0))
                        .build())
                .as("replies"))
        .as("comments"));

    // Lookup likes
    pipeline.add(Aggregation.lookup()
        .from("likes")
        .localField("idString")
        .foreignField("postId")
        .pipeline(
          Aggregation.addFields()
                .addField("likeAccountIdObjectId").withValue(ConvertOperators.ToObjectId.toObjectId("$accountId"))
                .build(),

            // Lookup account của từng like
            Aggregation.lookup("accounts", "likeAccountIdObjectId", "_id", "likeAccount"),

            // Lấy phần tử đầu tiên của và account
            Aggregation.addFields()
                .addField("account").withValue(ArrayOperators.ArrayElemAt.arrayOf("$likeAccount").elementAt(0))
                .build()
        )
        .as("likes"));

    // Lấy phần tử đầu tiên của category và account
    pipeline.add(Aggregation.addFields()
        .addField("category").withValue(ArrayOperators.ArrayElemAt.arrayOf("$category").elementAt(0))
        .addField("account").withValue(ArrayOperators.ArrayElemAt.arrayOf("$account").elementAt(0))
        .build());
    // Gom nhóm dữ liệu
    pipeline.add(Aggregation.group("_id")
        .first("title").as("title")
        .first("content").as("content")
        .first("accountId").as("accountId")
        .first("categoryId").as("categoryId")
        .first("category").as("category")
        .first("account").as("account")
        .first("background").as("background")
        .first("createdAt").as("createdAt")
        .first("updatedAt").as("updatedAt")
        .first("isDeleted").as("isDeleted")
        .first("viewTurn").as("viewTurn")
        .first("comments").as("comments")
        .first("likes").as("likes"));

    // Loại bỏ trường không cần thiết
    pipeline.add(Aggregation.project().andExclude("categoryIdObjectId", "accountIdObjectId"));

    // Tạo Aggregation pipeline từ danh sách
    Aggregation aggregation = Aggregation.newAggregation(pipeline);

    // Thực thi truy vấn
    AggregationResults<Post> result = mongoTemplate.aggregate(aggregation, "posts", Post.class);

    Optional<Post> post = Optional.ofNullable(result.getUniqueMappedResult());

    if (post.isPresent()) {
      post.get().setTotalComments(post.get().getComments().size());
      post.get().setTotalLikes(post.get().getLikes().size());
    }

    return post;
  }
}