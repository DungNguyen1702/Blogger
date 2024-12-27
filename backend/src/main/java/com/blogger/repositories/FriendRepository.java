package com.blogger.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.blogger.models.Friend;

public interface FriendRepository extends MongoRepository<Friend, String> {}