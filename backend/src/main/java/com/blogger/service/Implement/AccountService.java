package com.blogger.service.Implement;

import com.blogger.model.Account;
import com.blogger.repository.AccountRepository;
import com.blogger.service.Interface.IAccountService;
import com.blogger.service.ServiceBase.BaseServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AccountService extends BaseServiceImpl<Account, String> implements IAccountService {

    private final AccountRepository accountRepository;
    private final PasswordEncoder passwordEncoder;

    @Autowired
    public AccountService(AccountRepository accountRepository, PasswordEncoder passwordEncoder) {
        super(accountRepository);
        this.accountRepository = accountRepository;
        this.passwordEncoder = passwordEncoder;
    }

    @Override
    public List<Account> findByName(String name) {
        return accountRepository.findAll() // Replace with actual query logic
                .stream()
                .filter(account -> name.equals(account.getName()))
                .toList();
    }

    @Override
    public Account create(Account entity){
        entity.setPassword(passwordEncoder.encode(entity.getPassword()));
        return repository.save(entity);
    }

}

