package com.blogger.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.blogger.models.Like;

public interface LikeRepository extends MongoRepository<Like, String> {}
