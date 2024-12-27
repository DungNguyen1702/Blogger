package com.blogger.controllers;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.blogger.database.seeders.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;

@RestController
@RequestMapping("/database/seeders")
public class SeederController {

  @Autowired
  private AccountSeeder accountSeeder;
  @Autowired
  private CategorySeeder categorySeeder;
  @Autowired
  private PostSeeder postSeeder;
  @Autowired
  private CommentSeeder commentSeeder;
  @Autowired
  private LikeSeeder likeSeeder;
  @Autowired
  private FriendSeeder friendSeeder;

  @PostMapping("/all")
  public ResponseEntity<String> createDatabase() {

    accountSeeder.seed();
    categorySeeder.seed();
    postSeeder.seed();
    commentSeeder.seed();
    likeSeeder.seed();
    friendSeeder.seed();

    return ResponseEntity.ok().body("Database seeded successfully");
  }
}