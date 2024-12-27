package com.blogger.services.Implement;

import com.blogger.models.Friend;
import com.blogger.repositories.FriendRepository;
import com.blogger.services.Interface.IFriendService;
import com.blogger.services.ServiceBase.BaseServiceImpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FriendService extends BaseServiceImpl<Friend, String> implements IFriendService {

    @Autowired
    private FriendRepository friendRepository;

    @Override
    public List<Friend> findFriendsByAccountId(String accountId) {
        return friendRepository.findAll() // Replace with actual query logic
                .stream()
                .filter(friend -> accountId.equals(friend.getAccountId()))
                .toList();
    }
}
