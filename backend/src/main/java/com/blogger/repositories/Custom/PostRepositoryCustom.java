package com.blogger.repositories.Custom;

import java.util.Optional;

import com.blogger.models.Post;

public interface PostRepositoryCustom {
  Optional<Post> findPostDetail(String id);
}
