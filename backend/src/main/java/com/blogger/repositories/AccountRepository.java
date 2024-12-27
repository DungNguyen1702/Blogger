package com.blogger.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.blogger.models.Account;

import java.util.Optional;

public interface AccountRepository extends MongoRepository<Account, String> {
    Optional<Account> findByGmail(String account);
}
