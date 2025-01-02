package com.blogger.models.request;

import org.springframework.web.multipart.MultipartFile;

import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class PostRequest {
  private String id;
  
  @NotBlank(message = "Title must not be blank")
  private String title;

  @NotBlank(message = "Content must not be blank")
  private String content;

  @NotBlank(message = "Category ID must not be blank")
  private String categoryId;

  private MultipartFile image;

  private String background;
}
