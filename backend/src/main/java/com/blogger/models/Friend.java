package com.blogger.models;

import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "friends")
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Setter
@Getter
public class Friend extends EntityBase {
    @Id
    private String id;
    private String accountId;
    private String friendId;
}
