package com.blogger.models;

import com.blogger.models.Enum.AccountRole;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class NorAccount {
  private String id;
  private String gmail;
  private String displayName;
  private String name;
  private Boolean status;
  private String avatar;
  private String background;
  private Boolean isDeleted;
  private AccountRole role;
}
