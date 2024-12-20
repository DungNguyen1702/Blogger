package com.blogger.configuration;

import org.springframework.context.annotation.Configuration;

@Configuration
public class AuthConfig {

    private final AccountDetailsService accountDetailsService;

    public AuthConfig(AccountDetailsService accountDetailsService) {
        this.accountDetailsService = accountDetailsService;
    }
}