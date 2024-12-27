package com.blogger.database.seeders;

import com.blogger.models.Account;
import com.blogger.models.Friend;
import com.blogger.repositories.AccountRepository;
import com.blogger.repositories.FriendRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.Date;
import java.util.List;
import java.util.Random;

@Component
public class FriendSeeder {

  @Autowired
  private FriendRepository friendRepository;

  @Autowired
  private AccountRepository accountRepository;

  public void seed() {
    // Lấy danh sách account từ cơ sở dữ liệu
    List<Account> accounts = accountRepository.findAll();

    // Xóa toàn bộ dữ liệu cũ trong collection
    friendRepository.deleteAll();

    // Bỏ qua tài khoản đầu tiên (thường là admin)
    for (int i = 1; i < accounts.size(); i++) {
      Account account = accounts.get(i);

      // Tạo một số lượng ngẫu nhiên bạn bè cho mỗi tài khoản
      int numberOfFriends = new Random().nextInt(accounts.size() - 1) + 1; // Ít nhất 1 bạn bè

      for (int j = 0; j < numberOfFriends; j++) {
        // Chọn ngẫu nhiên một tài khoản khác làm bạn bè
        int friendIndex = new Random().nextInt(accounts.size() - 1) + 1; // Bỏ qua tài khoản đầu tiên
        if (friendIndex == i) { // Đảm bảo không kết bạn với chính mình
          friendIndex = (friendIndex + 1) % accounts.size();
        }
        Account friendAccount = accounts.get(friendIndex);

        // Tạo bản ghi Friend
        Friend friend = Friend.builder()
            .accountId(account.getId())
            .friendId(friendAccount.getId())
            .build();

        // Lưu bản ghi Friend vào cơ sở dữ liệu
        friendRepository.save(friend);
      }
    }

    System.out.println("\u001B[34m" + new Date() + ": Friend seeder has been run successfully!\u001B[0m");
    
  }
}