package com.blogger.models;

import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

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

    @Builder.Default
    private String commentParentId = null;

    private String content;

    @Builder.Default
    private Boolean isDeleted = false;
}