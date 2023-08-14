package com.mindtalk.Backend.entity;

import lombok.Getter;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.authority.SimpleGrantedAuthority;

import java.util.Collections;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

import static com.mindtalk.Backend.entity.Permission.*;


@RequiredArgsConstructor
public enum Role {

    USER(Collections.emptySet()),
    ADMIN(
            Set.of(
                    ADMIN_READ,
                    ADMIN_UPDATE,
                    ADMIN_DELETE,
                    ADMIN_CREATE,
                    MODERATOR_READ,
                    MODERATOR_UPDATE,
                    MODERATOR_DELETE,
                    MODERATOR_CREATE,
                    CLIENT_READ,
                    CLIENT_UPDATE,
                    CLIENT_DELETE,
                    CLIENT_CREATE
            )
    ),
    MODERATOR(
            Set.of(
                    MODERATOR_READ,
                    MODERATOR_UPDATE,
                    MODERATOR_DELETE,
                    MODERATOR_CREATE
            )
    ),
    CLIENT(
            Set.of(
                    CLIENT_READ,
                    CLIENT_UPDATE,
                    CLIENT_DELETE,
                    CLIENT_CREATE
            )
    )


    ;

    @Getter
    private final Set<Permission> permissions;

    public List<SimpleGrantedAuthority> getAuthorities() {
        var authorities = getPermissions()
                .stream()
                .map(permission -> new SimpleGrantedAuthority(permission.getPermission()))
                .collect(Collectors.toList());
        authorities.add(new SimpleGrantedAuthority("ROLE_" + this.name()));
        return authorities;
    }
}
