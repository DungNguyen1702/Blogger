package com.blogger.database.seeders;

import java.io.File;
import java.io.IOException;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ClassPathResource;
import org.springframework.stereotype.Component;

import com.blogger.models.Category;
import com.blogger.repositories.CategoryRepository;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;

@Component
public class CategorySeeder {

  @Autowired
  private CategoryRepository categoryRepository;

  public void seed() {
    ObjectMapper objectMapper = new ObjectMapper();
    try {
      // Đọc dữ liệu từ file JSON trong thư mục resources
      File file = new ClassPathResource("categories_data.json").getFile();
      List<Category> categories = objectMapper.readValue(
          file,
          new TypeReference<List<Category>>() {
          });

      // Xóa toàn bộ dữ liệu cũ trong collection
      categoryRepository.deleteAll();

      // Lưu các tài khoản vào cơ sở dữ liệu
      categoryRepository.saveAll(categories);

      System.out.println("\u001B[34m" + new Date() + ": Category seeder has been run successfully!\u001B[0m");
    
    } catch (IOException e) {
      e.printStackTrace();
    }
  }
}
