package com.blogger.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.blogger.models.Comment;

public interface CommentRepository extends MongoRepository<Comment, String> {}