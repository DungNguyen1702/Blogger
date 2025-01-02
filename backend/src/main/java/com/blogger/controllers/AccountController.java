package com.blogger.controllers;

import com.blogger.models.Account;
import com.blogger.services.Implement.AccountService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/accounts")
public class AccountController {
    @Autowired
    private AccountService accountService;

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

    @GetMapping("/top-writers")
    public List<Account> getAllAccounts() {
        return accountService.getTopWriters();
    }
}
