package com.blogger.service.Interface;

import com.blogger.model.Friend;
import com.blogger.service.ServiceBase.BaseService;

import java.util.List;

public interface IFriendService extends BaseService<Friend, String> {
    List<Friend> findFriendsByAccountId(String accountId);
}