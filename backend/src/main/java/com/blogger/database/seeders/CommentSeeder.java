package com.blogger.database.seeders;

import com.blogger.models.Account;
import com.blogger.models.Comment;
import com.blogger.models.Post;
import com.blogger.repositories.AccountRepository;
import com.blogger.repositories.CommentRepository;
import com.blogger.repositories.PostRepository;
import com.github.javafaker.Faker;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.Date;
import java.util.List;

@Component
public class CommentSeeder {

  @Autowired
  private CommentRepository commentRepository;

  @Autowired
  private PostRepository postRepository;

  @Autowired
  private AccountRepository accountRepository;

  public void seed() {
    // Khởi tạo Faker để tạo dữ liệu giả
    Faker faker = new Faker();

    // Lấy danh sách post và account từ cơ sở dữ liệu
    List<Post> posts = postRepository.findAll();
    List<Account> accounts = accountRepository.findAll();

    // Xóa toàn bộ dữ liệu cũ trong collection
    commentRepository.deleteAll();

    // Tạo comment cho từng post
    for (Post post : posts) {
      // Bỏ qua tài khoản admin (vị trí đầu tiên)
      for (int i = 1; i < accounts.size(); i++) {
        Account account = accounts.get(i);

        // Tạo comment với nội dung ngẫu nhiên
        Comment comment = Comment.builder()
            .accountId(account.getId())
            .postId(post.getId())
            .content(faker.lorem().paragraph()) // Tạo nội dung ngẫu nhiên
            .build();

        // Lưu comment vào cơ sở dữ liệu
        commentRepository.save(comment);
      }
    }

    System.out.println("\u001B[34m" + new Date() + ": Comment seeder has been run successfully!\u001B[0m");
    
  }
}