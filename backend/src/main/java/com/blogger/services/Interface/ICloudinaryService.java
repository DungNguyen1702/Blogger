package com.blogger.services.Interface;

import org.springframework.web.multipart.MultipartFile;

public interface ICloudinaryService {

  String uploadFile(MultipartFile file);

  void deleteFileByUrl(String url);
}
