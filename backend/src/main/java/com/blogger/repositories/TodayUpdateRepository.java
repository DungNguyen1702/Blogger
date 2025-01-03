package com.blogger.repositories;

import java.util.Date;

import org.springframework.data.mongodb.repository.Aggregation;
import org.springframework.data.mongodb.repository.MongoRepository;

import com.blogger.models.TodayUpdate;

public interface TodayUpdateRepository extends MongoRepository<TodayUpdate, String> {
  @Aggregation(pipeline = {
      "{ $addFields: { createdAtDate: { $dateToString: { format: '%Y-%m-%d', date: '$date' } } } }",
      "{ $match: { $expr: { $eq: ['$createdAtDate', { $dateToString: { format: '%Y-%m-%d', date: ?0 } }] } } }"
  })
  TodayUpdate findTodayUpdateByDay(Date date);
}
