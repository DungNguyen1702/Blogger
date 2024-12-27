package com.blogger.models.Enum;

public enum AccountRole {
    ADMIN, USER;

    public int getIndex() {
        return switch (this) {
            case ADMIN -> 0;
            case USER -> 1;
        };
    }
}

