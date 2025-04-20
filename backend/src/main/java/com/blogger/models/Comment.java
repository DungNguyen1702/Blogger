package com.blogger.models;

import lombok.*;

import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

@Document(collection = "comments")
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Setter
@Getter
public class Comment extends EntityBase {
    @Id
    private String id;
    private String accountId;

    private String postId;

    @Field("commentParentId")
    @Builder.Default
    private String commentParentId = "";

    private String content;

    @Builder.Default
    private Boolean isDeleted = false;

    private NorAccount account;

    private List<Comment> replies;
}