package com.blogger.service.Implement;

import com.blogger.model.Friend;
import com.blogger.repository.FriendRepository;
import com.blogger.service.Interface.IFriendService;
import com.blogger.service.ServiceBase.BaseServiceImpl;

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
