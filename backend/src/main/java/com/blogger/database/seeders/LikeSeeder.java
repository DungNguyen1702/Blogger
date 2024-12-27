package com.blogger.database.seeders;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.blogger.models.Account;
import com.blogger.models.Like;
import com.blogger.models.Post;
import com.blogger.repositories.AccountRepository;
import com.blogger.repositories.LikeRepository;
import com.blogger.repositories.PostRepository;

@Component
public class LikeSeeder {
  @Autowired
  private LikeRepository likeRepository;

  @Autowired
  private PostRepository postRepository;

  @Autowired
  private AccountRepository accountRepository;

  public void seed() {
    // Lấy danh sách post và account từ cơ sở dữ liệu
    List<Post> posts = postRepository.findAll();
    List<Account> accounts = accountRepository.findAll();

    // Xóa toàn bộ dữ liệu cũ trong collection
    likeRepository.deleteAll();

    // Tạo like cho từng post
    for (Post post : posts) {
      // Bỏ qua tài khoản admin (vị trí đầu tiên)
      for (int i = 1; i < accounts.size(); i++) {
        Account account = accounts.get(i);

        // Tạo like với nội dung ngẫu nhiên
        Like like = Like.builder()
            .accountId(account.getId())
            .postId(post.getId())
            .build();

        // Lưu like vào cơ sở dữ liệu
        likeRepository.save(like);
      }
    }

    System.out.println("\u001B[34m" + new Date() + ": Like seeder has been run successfully!\u001B[0m");
  }
}
