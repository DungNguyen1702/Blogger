package com.blogger.database.seeders;

import java.io.File;
import java.io.IOException;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ClassPathResource;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import com.blogger.models.Account;
import com.blogger.repositories.AccountRepository;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;

@Component
public class AccountSeeder {

  @Autowired
  private PasswordEncoder passwordEncoder;

  @Autowired
  private AccountRepository accountRepository;

  public void seed() {
    ObjectMapper objectMapper = new ObjectMapper();
    try {
      // Đọc dữ liệu từ file JSON trong thư mục resources
      File file = new ClassPathResource("accounts_data.json").getFile();
      List<Account> accounts = objectMapper.readValue(
          file,
          new TypeReference<List<Account>>() {
          });

      // Xóa toàn bộ dữ liệu cũ trong collection
      accountRepository.deleteAll();

      // Mã hóa mật khẩu của từng tài khoản
      for (Account account : accounts) {
        String plainPassword = account.getPassword();
        String hashedPassword = passwordEncoder.encode(plainPassword);
        account.setPassword(hashedPassword);
      }

      // Lưu các tài khoản vào cơ sở dữ liệu
      accountRepository.saveAll(accounts);
      
      // In thông báo với màu xanh dương
      System.out.println("\u001B[34m" + new Date() + ": Account seeder has been run successfully!\u001B[0m");
    } catch (IOException e) {
      e.printStackTrace();
    }
  }
}