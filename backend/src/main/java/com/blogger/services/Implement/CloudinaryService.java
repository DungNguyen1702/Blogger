package com.blogger.services.Implement;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.blogger.services.Interface.ICloudinaryService;
import com.cloudinary.Cloudinary;
import com.cloudinary.utils.ObjectUtils;

@Service
public class CloudinaryService implements ICloudinaryService {

  @Autowired
  private Cloudinary cloudinary;

  @Override
  public String uploadFile(MultipartFile image) {
    try {
      Map<?, ?> result = cloudinary.uploader().upload(image.getBytes(), ObjectUtils.asMap(
          "folder", "blogger"
      ));
      String imageUrl = (String) result.get("secure_url");
      return imageUrl;
    } catch (Exception e) {
      throw new RuntimeException("An error occurred while saving the image!");
    }
  }

  private String extractPublicId(String imageUrl) {
    int startIndex = imageUrl.lastIndexOf("/") + 1;
    int endIndex = imageUrl.lastIndexOf(".");
    return imageUrl.substring(startIndex, endIndex);
  }

  @Override
  public void deleteFileByUrl(String url) {
    try {
      String publicId = extractPublicId(url);
      cloudinary.uploader().destroy(publicId, ObjectUtils.emptyMap());
    } catch (Exception e) {
      throw new RuntimeException("Image deletion failed!");
    }
  }

}
