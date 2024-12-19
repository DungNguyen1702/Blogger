package com.blogger.service.Implement;

import com.blogger.model.Account;
import com.blogger.repository.AccountRepository;
import com.blogger.service.Interface.IAccountService;
import com.blogger.service.ServiceBase.BaseServiceImpl;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AccountService extends BaseServiceImpl<Account, String> implements IAccountService {

    private final AccountRepository accountRepository;

    public AccountService(AccountRepository accountRepository) {
        super(accountRepository);
        this.accountRepository = accountRepository;
    }

    @Override
    public List<Account> findByName(String name) {
        return accountRepository.findAll() // Replace with actual query logic
                .stream()
                .filter(account -> name.equals(account.getName()))
                .toList();
    }

}

