package com.blogger.controller;

import java.awt.image.BufferedImage;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import javax.imageio.ImageIO;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.blogger.service.Implement.CloudinaryService;

@RestController
@RequestMapping("/api/guest/upload")
public class UploadImageController {

  @Autowired
  private CloudinaryService cloudinaryService;

  @PostMapping("single-image")
  @ResponseBody
  public ResponseEntity<String> SingleUpload(@RequestParam MultipartFile image) throws IOException {
    BufferedImage bi = ImageIO.read(image.getInputStream());
    if (bi == null) {
      return new ResponseEntity<>("Invalid image!", HttpStatus.BAD_REQUEST);
    }
    String result = cloudinaryService.uploadFile(image);
    return ResponseEntity.ok().body(result);
  }

  @PostMapping("multi-image")
  @ResponseBody
  public ResponseEntity<List<String>> multiUpload(@RequestParam List<MultipartFile> images) throws IOException {
    List<String> uploadResults = new ArrayList<>();

    for (MultipartFile image : images) {
      BufferedImage bi = ImageIO.read(image.getInputStream());
      if (bi == null) {
        return new ResponseEntity<>(List.of("One or more images are invalid!"), HttpStatus.BAD_REQUEST);
      }
      String result = cloudinaryService.uploadFile(image);
      uploadResults.add(result);
    }

    return ResponseEntity.ok().body(uploadResults);
  }
}
