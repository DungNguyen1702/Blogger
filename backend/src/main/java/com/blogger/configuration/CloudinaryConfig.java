package com.blogger.configuration;

import com.cloudinary.Cloudinary;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
@RequiredArgsConstructor
public class CloudinaryConfig {
    @Value("${app.cloudinary.cloudName}")
    private String cloudName;

    @Value("${app.cloudinary.cloudinaryApiKey}")
    private String cloudinaryApiKey;

    @Value("${app.cloudinary.cloudinaryApiSecret}")
    private String cloudinaryApiSecret;

    @Bean
    public Cloudinary cloudinary(){
        Cloudinary cloudinary = new Cloudinary();
        System.out.println("1111");
        cloudinary.config.cloudName = cloudName;
        cloudinary.config.apiKey = cloudinaryApiKey;
        cloudinary.config.apiSecret = cloudinaryApiSecret;
        return cloudinary;
    }

}
