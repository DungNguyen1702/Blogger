package com.blogger.controllers;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;

@RestController
@RequestMapping()
public class HomepageController {
  @GetMapping("")
  public String getMethodName() {
      return "Blogger Backend API";
  }
  
}