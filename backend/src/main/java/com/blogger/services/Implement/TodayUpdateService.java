package com.blogger.services.Implement;

import java.time.LocalDate;
import java.time.ZoneId;
import java.time.format.DateTimeFormatter;
import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.blogger.models.TodayUpdate;
import com.blogger.repositories.TodayUpdateRepository;
import com.blogger.services.Interface.ITodayService;
import com.blogger.services.ServiceBase.BaseServiceImpl;

@Service
public class TodayUpdateService extends BaseServiceImpl<TodayUpdate, String> implements ITodayService {
  @Autowired
  private TodayUpdateRepository todayUpdateRepository;

  @Override
  public TodayUpdate findTodayUpdateByDay(String dateString) {
    try {
      DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd-MM-yyyy");

      LocalDate localDate = LocalDate.parse(dateString, formatter);

      Date date = Date.from(localDate.atStartOfDay(ZoneId.systemDefault()).toInstant());
      TodayUpdate todayUpdate = todayUpdateRepository.findTodayUpdateByDay(date);

      if (todayUpdate == null) {
        todayUpdate = TodayUpdate.builder()
            .newPostNum(0)
            .totalVisitors(0)
            .newSubscribers(0)
            .blogReads(0)
            .date(localDate)
            .build();
      }

      return todayUpdate;
    } catch (Exception e) {
      throw new IllegalArgumentException("Invalid date format. Please use 'yyyy-MM-dd'.");
    }
  }

  @Override
  public TodayUpdate updateTodayUpdate(TodayUpdate todayUpdate) {
    Date date = Date.from(todayUpdate.getDate().atStartOfDay(ZoneId.systemDefault()).toInstant());
    TodayUpdate todayUpdateFound = todayUpdateRepository.findTodayUpdateByDay(date);

    if (todayUpdateFound != null) {
      todayUpdateFound.setNewPostNum(
          todayUpdate.getNewPostNum() != null ? todayUpdate.getNewPostNum() + todayUpdateFound.getNewPostNum()
              : todayUpdateFound.getNewPostNum());
      todayUpdateFound.setTotalVisitors(
          todayUpdate.getTotalVisitors() != null ? todayUpdate.getTotalVisitors() + todayUpdateFound.getTotalVisitors()
              : todayUpdateFound.getTotalVisitors());
      todayUpdateFound.setNewSubscribers(todayUpdate.getNewSubscribers() != null
          ? todayUpdate.getNewSubscribers() + todayUpdateFound.getNewSubscribers()
          : todayUpdateFound.getNewSubscribers());
      todayUpdateFound.setBlogReads(
          todayUpdate.getBlogReads() != null ? todayUpdate.getBlogReads() + todayUpdateFound.getBlogReads()
              : todayUpdateFound.getBlogReads());
      return todayUpdateRepository.save(todayUpdateFound);
    }

    return todayUpdateRepository.save(todayUpdate);
  }
}
