package com.blogger.configuration;

import com.cloudinary.Cloudinary;
import com.cloudinary.utils.ObjectUtils;

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
        return new Cloudinary(ObjectUtils.asMap(
            "cloud_name", cloudName,
            "api_key", cloudinaryApiKey,
            "api_secret", cloudinaryApiSecret,
            "secure", true
        ));
    }

}
