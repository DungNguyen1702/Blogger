package com.blogger.services.Implement;

import com.blogger.models.Account;
import com.blogger.models.NorAccount;
import com.blogger.models.TodayUpdate;
import com.blogger.repositories.AccountRepository;
import com.blogger.services.Interface.IAccountService;
import com.blogger.services.ServiceBase.BaseServiceImpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AccountService extends BaseServiceImpl<Account, String> implements IAccountService {

    @Autowired
    private AccountRepository accountRepository;
    @Autowired
    private PasswordEncoder passwordEncoder;
    @Autowired
    private TodayUpdateService todayUpdateService;

    @Override
    public List<Account> findByName(String name) {
        return accountRepository.findAll()
                .stream()
                .filter(account -> name.equals(account.getName()))
                .toList();
    }

    @Override
    public Account create(Account entity) {
        todayUpdateService.updateTodayUpdate(TodayUpdate.builder().newSubscribers(1).build());
        entity.setPassword(passwordEncoder.encode(entity.getPassword()));
        return repository.save(entity);
    }

    @Override
    public List<NorAccount> findTop3AccountsByPostCount() {
        return accountRepository.findTop3AccountsByPostCount();
    }

}
