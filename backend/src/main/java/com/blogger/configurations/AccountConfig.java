package com.blogger.configurations;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

import com.blogger.repositories.AccountRepository;

@Configuration
public class AccountConfig implements UserDetailsService {

    @Autowired
    private AccountRepository accountRepository;

    @Override
    public UserDetails loadUserByUsername(String gmail) throws UsernameNotFoundException {
        return accountRepository.findByGmail(gmail)
                .orElseThrow(() -> new UsernameNotFoundException("Account not found with gmail: " + gmail));
    }
}
