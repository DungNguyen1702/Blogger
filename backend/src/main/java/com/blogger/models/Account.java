package com.blogger.models;

import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import com.blogger.models.Enum.AccountRole;

import java.util.Collection;
import java.util.List;

@Document(collection = "accounts")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Builder
public class Account extends EntityBase implements UserDetails {

    @Id
    private String id;
    private String gmail;
    private String password;
    private String name;

    @Builder.Default
    private String avatar = "https://res.cloudinary.com/deei5izfg/image/upload/v1735265201/default-avatar_egtzs2.jpg";
    private Boolean status;

    @Builder.Default
    private AccountRole role = AccountRole.USER;

    @Builder.Default
    private String background = "https://res.cloudinary.com/deei5izfg/image/upload/v1735265201/background_bazx2p.jpg";

    @Builder.Default
    private Boolean isDeleted = false;

    private List<Post> posts;

    private Integer totalPosts;

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return List.of(new SimpleGrantedAuthority(this.role.toString()));
    }

    public String getPassword() {
        return password;
    }

    @Override
    public String getUsername() {
        return this.gmail;
    }

    @Override
    public boolean isAccountNonExpired() {
        return UserDetails.super.isAccountNonExpired();
    }

    @Override
    public boolean isAccountNonLocked() {
        return UserDetails.super.isAccountNonLocked();
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return UserDetails.super.isCredentialsNonExpired();
    }

    @Override
    public boolean isEnabled() {
        return UserDetails.super.isEnabled();
    }
}
