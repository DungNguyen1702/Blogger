package com.blogger.service.Interface;

import com.blogger.model.Account;
import com.blogger.service.ServiceBase.BaseService;

import java.util.List;

public interface IAccountService extends BaseService<Account, String> {
    List<Account> findByName(String name);
}
