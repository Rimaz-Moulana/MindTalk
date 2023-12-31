package com.mindtalk.Backend.entity;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
public enum Permission {

    ADMIN_READ("admin:read"),
    ADMIN_UPDATE("admin:update"),
    ADMIN_CREATE("admin:create"),
    ADMIN_DELETE("admin:delete"),
    MODERATOR_READ("moderator:read"),
    MODERATOR_UPDATE("moderator:update"),
    MODERATOR_CREATE("moderator:create"),
    MODERATOR_DELETE("moderator:delete"),

    CLIENT_READ("client:read"),
    CLIENT_UPDATE("client:update"),
    CLIENT_DELETE("client:delete"),
    CLIENT_CREATE("client:create"),

    COUNSELLOR_READ("counsellor:read"),
    COUNSELLOR_UPDATE("counsellor:update"),
    COUNSELLOR_DELETE("counsellor:delete"),
    COUNSELLOR_CREATE("counsellor:create");



    @Getter
    private final String permission;
}
