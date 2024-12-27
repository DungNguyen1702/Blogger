package com.blogger.models;

import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "categories")
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Getter
@Setter
public class Category extends EntityBase {

    @Id
    private String id;
    private String name;
    private String image;
    private String description;

    @Builder.Default
    private Boolean isDeleted = false;
}
