package com.blogger.controllers;

import com.blogger.annotations.CurrentAccount;
import com.blogger.annotations.PreAuthorizeUser;
import com.blogger.models.Account;
import com.blogger.models.Post;
import com.blogger.models.request.PostRequest;
import com.blogger.services.Implement.CloudinaryService;
import com.blogger.services.Implement.PostService;
import java.awt.image.BufferedImage;
import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import javax.imageio.ImageIO;

@RestController
@RequestMapping("/api/posts")
public class PostController {

    @Autowired
    private PostService postService;
    @Autowired
    private CloudinaryService cloudinaryService;

    @GetMapping
    public List<Post> getAllPosts(@CurrentAccount Account account) {
        return postService.findAllPostsWithCategory();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Post> getPostById(@PathVariable String id) {
        return ResponseEntity.ok(postService.findById(id).get());
    }

    @PostMapping
    @PreAuthorizeUser
    public ResponseEntity<Post> createPost(@CurrentAccount Account account, @ModelAttribute PostRequest postRequest)
            throws IOException {

        Post post = new Post();
        post.setTitle(postRequest.getTitle());
        post.setContent(postRequest.getContent());
        post.setAccountId(account.getId());
        post.setCategoryId(postRequest.getCategoryId());

        BufferedImage bi = ImageIO.read(postRequest.getImage().getInputStream());
        if (bi != null) {
            String result = cloudinaryService.uploadFile(postRequest.getImage());
            post.setBackground(result);
        }
        Post createdPost = postService.create(post);
        return ResponseEntity.status(201).body(createdPost);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Post> updatePost(@PathVariable String id, @RequestBody Post post) {
        Post updatedPost = postService.update(id, post);
        return ResponseEntity.ok(updatedPost);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletePost(@PathVariable String id) {
        postService.deleteById(id);
        return ResponseEntity.noContent().build();
    }
}
