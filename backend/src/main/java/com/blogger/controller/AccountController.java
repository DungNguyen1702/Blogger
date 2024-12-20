package com.blogger.controller;

import com.blogger.model.Account;
import com.blogger.service.Implement.AccountService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/accounts")
public class AccountController {
    private final AccountService accountService;

    public AccountController(AccountService accountService) {
        this.accountService = accountService;
    }

    @GetMapping("/search")
    public List<Account> searchByName(@RequestParam String name) {
        return accountService.findByName(name);
    }


    // API to update an existing account
    @PutMapping("/update/{id}")
    public ResponseEntity<Account> updateAccount(@PathVariable String id, @RequestBody Account account) {
        Account updatedAccount = accountService.update(id, account);
        return new ResponseEntity<>(updatedAccount, HttpStatus.OK);
    }
}
