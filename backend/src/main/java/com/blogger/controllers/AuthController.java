package com.blogger.controllers;

import com.blogger.models.Account;
import com.blogger.models.request.AuthRequest;
import com.blogger.models.response.AuthAccountResponse;
import com.blogger.models.response.AuthResponse;
import com.blogger.services.Implement.AccountService;
import com.blogger.utils.JwtUtil;

import jakarta.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/auth")
public class AuthController {

    @Autowired
    private AccountService accountService;
    @Autowired
    private AuthenticationManager authenticationManager;
    @Autowired
    private JwtUtil jwtUtil;

    @PostMapping("/login")
    public ResponseEntity<AuthResponse> login(@Valid @RequestBody AuthRequest authRequest) {
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(authRequest.getGmail(), authRequest.getPassword()));

        Account accountDetails = (Account) authentication.getPrincipal();
        AuthAccountResponse authAccount = AuthAccountResponse.builder()
                .id(accountDetails.getId())
                .gmail(accountDetails.getGmail())
                .name(accountDetails.getName())
                .avatar(accountDetails.getAvatar())
                .status(accountDetails.getStatus())
                .role(accountDetails.getRole())
                .background(accountDetails.getBackground())
                .isDeleted(accountDetails.getIsDeleted())
                .build();

        String token = jwtUtil.generateToken(accountDetails.getUsername());
        return ResponseEntity.ok().body(AuthResponse.builder().token(token).account(authAccount).build());
    }

    @PostMapping("/signup")
    public ResponseEntity<Account> createAccount(@RequestBody Account account) {
        Account createdAccount = accountService.create(account);
        return new ResponseEntity<>(createdAccount, HttpStatus.CREATED);
    }
}
