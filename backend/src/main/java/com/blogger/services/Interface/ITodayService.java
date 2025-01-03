package com.blogger.services.Interface;


import com.blogger.models.TodayUpdate;
import com.blogger.services.ServiceBase.BaseService;

public interface ITodayService extends BaseService<TodayUpdate, String> {
  TodayUpdate findTodayUpdateByDay(String dateString);

  TodayUpdate updateTodayUpdate(TodayUpdate todayUpdate);
}
