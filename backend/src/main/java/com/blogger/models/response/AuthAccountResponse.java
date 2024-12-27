package com.blogger.models.response;

import com.blogger.models.Enum.AccountRole;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class AuthAccountResponse {
  private String id;
  private String displayName;
  private String gmail;
  private String name;
  private String avatar;
  private Boolean status;
  private AccountRole role;
  private String background;
  private Boolean isDeleted;
}
