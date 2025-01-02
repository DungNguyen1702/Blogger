package com.blogger.services.Interface;

import com.blogger.models.Account;
import com.blogger.services.ServiceBase.BaseService;

import java.util.List;

public interface IAccountService extends BaseService<Account, String> {
    List<Account> findByName(String name);

    List<Account> getTopWriters();
}
