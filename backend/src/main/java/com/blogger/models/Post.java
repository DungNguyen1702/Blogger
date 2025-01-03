package com.blogger.models;

import lombok.*;

import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "posts")
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Setter
@Getter
public class Post extends EntityBase {
    @Id
    private String id;
    private String title;
    private String content;
    private String accountId;
    private String categoryId;

    private Category category;

    private NorAccount account;

    @Builder.Default
    private String background = "https://res.cloudinary.com/deei5izfg/image/upload/v1735283445/Blogger/blog_me5xco.jpg";

    @Builder.Default
    private Boolean isDeleted = false;

    @Builder.Default
    private Integer viewTurn = 0;

    private List<Comment> comments;
    private List<Like> likes;

    private Integer totalComments;
    private Integer totalLikes;
}
