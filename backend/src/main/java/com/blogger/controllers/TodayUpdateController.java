package com.blogger.controllers;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.blogger.models.TodayUpdate;
import com.blogger.services.Implement.TodayUpdateService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;


@RestController
@RequestMapping("/api/today-update")
public class TodayUpdateController {

  @Autowired
  private TodayUpdateService todayUpdateService;

  @GetMapping()
  public ResponseEntity<TodayUpdate> getTodayUpdateByDate(@RequestParam String dateString) {
      return ResponseEntity.ok().body(todayUpdateService.findTodayUpdateByDay(dateString));
  }
  
}
