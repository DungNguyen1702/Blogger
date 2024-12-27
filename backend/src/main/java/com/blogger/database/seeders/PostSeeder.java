package com.blogger.database.seeders;

import java.io.File;
import java.io.IOException;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ClassPathResource;
import org.springframework.stereotype.Component;

import com.blogger.models.*;
import com.blogger.repositories.AccountRepository;
import com.blogger.repositories.CategoryRepository;
import com.blogger.repositories.PostRepository;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;

@Component
public class PostSeeder {

  @Autowired
  private PostRepository postRepository;

  @Autowired
  private CategoryRepository categoryRepository;

  @Autowired
  private AccountRepository accountRepository;

  public void seed() {
    ObjectMapper objectMapper = new ObjectMapper();
    try {
      // Đọc dữ liệu từ file JSON trong thư mục resources
      File file = new ClassPathResource("posts_data.json").getFile();
      List<Post> posts = objectMapper.readValue(
          file,
          new TypeReference<List<Post>>() {
          });

      // Xóa toàn bộ dữ liệu cũ trong collection
      postRepository.deleteAll();

      // Lấy danh sách category từ cơ sở dữ liệu
      List<Category> categories = categoryRepository.findAll();

      for (Post post : posts) {
        int categoryIndex = Integer.parseInt(post.getCategoryId()) - 1; // Lấy index của category
        if (categoryIndex >= 0 && categoryIndex < categories.size()) {
          Category category = categories.get(categoryIndex);
          post.setCategoryId(category.getId());
        }
        post.setAccountId(accountRepository.findAll().get(Integer.parseInt(post.getAccountId())).getId());
      }

      // Lưu các tài khoản vào cơ sở dữ liệu
      postRepository.saveAll(posts);

      System.out.println("\u001B[34m" + new Date() + ": Post seeder has been run successfully!\u001B[0m");
    } catch (IOException e) {
      e.printStackTrace();
    }
  }

}
