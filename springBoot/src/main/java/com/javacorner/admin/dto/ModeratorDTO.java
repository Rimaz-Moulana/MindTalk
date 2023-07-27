package com.javacorner.admin.dto;

import javax.persistence.*;

public class ModeratorDTO {
    private Long moderatorId;

    private String firstName;
    private String lastName;

    private UserDTO user;
    public Long getModeratorId() {
        return moderatorId;
    }

    public void setModeratorId(Long moderatorId) {
        this.moderatorId = moderatorId;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public UserDTO getUser() {
        return user;
    }

    public void setUser(UserDTO user) {
        this.user = user;
    }
}
