package com.blogger.controller;

import com.blogger.model.Friend;
import com.blogger.service.Implement.FriendService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/friends")
public class FriendController {

    private final FriendService friendService;

    public FriendController(FriendService friendService) {
        this.friendService = friendService;
    }

    @GetMapping
    public List<Friend> getAllFriends() {
        return friendService.findAll();
    }

    @PostMapping
    public ResponseEntity<Friend> addFriend(@RequestBody Friend friend) {
        Friend createdFriend = friendService.create(friend);
        return ResponseEntity.status(201).body(createdFriend);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteFriend(@PathVariable String id) {
        friendService.deleteById(id);
        return ResponseEntity.noContent().build();
    }
}

