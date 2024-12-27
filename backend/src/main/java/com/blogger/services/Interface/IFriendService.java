package com.blogger.services.Interface;

import com.blogger.models.Friend;
import com.blogger.services.ServiceBase.BaseService;

import java.util.List;

public interface IFriendService extends BaseService<Friend, String> {
    List<Friend> findFriendsByAccountId(String accountId);
}