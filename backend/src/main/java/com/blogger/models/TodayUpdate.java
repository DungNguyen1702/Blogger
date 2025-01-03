package com.blogger.models;

import java.time.LocalDate;

import org.springframework.data.mongodb.core.mapping.Document;

import com.fasterxml.jackson.annotation.JsonFormat;

import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Document(collection = "todayUpdates")
@Builder
@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class TodayUpdate {
  @Id
  private String id;
  @Builder.Default
  private Integer newPostNum = 0;
  @Builder.Default
  private Integer totalVisitors = 0;
  @Builder.Default
  private Integer newSubscribers = 0;
  @Builder.Default
  private Integer blogReads = 0;
  @Builder.Default
  @JsonFormat(pattern = "dd-MM-yyyy")
  private LocalDate date = LocalDate.now();
}