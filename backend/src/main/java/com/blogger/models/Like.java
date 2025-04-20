package com.blogger.models;

import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "likes")
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Setter
@Getter
public class Like extends EntityBase {
    @Id
    private String id;
    private String accountId;
    private String postId;

    private NorAccount account;
    private Post post;
}