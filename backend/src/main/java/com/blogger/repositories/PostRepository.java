package com.blogger.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.blogger.models.Post;

public interface PostRepository extends MongoRepository<Post, String> {}
