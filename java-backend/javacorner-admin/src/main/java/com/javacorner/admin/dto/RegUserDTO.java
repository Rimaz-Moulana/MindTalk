package com.javacorner.admin.dto;

import javax.persistence.Basic;
import javax.persistence.Column;

public class RegUserDTO {
    private Long regUserId;
    private String username;

    private Long contactNo1;

    private String relationship1;

    private Long contactNo2;

    private String relationship2;


    private String location;

    private UserDTO user;

    public Long getRegUserId() {
        return regUserId;
    }

    public void setRegUserId(Long regUserId) {
        this.regUserId = regUserId;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public Long getContactNo1() {
        return contactNo1;
    }

    public void setContactNo1(Long contactNo1) {
        this.contactNo1 = contactNo1;
    }

    public String getRelationship1() {
        return relationship1;
    }

    public void setRelationship1(String relationship1) {
        this.relationship1 = relationship1;
    }

    public Long getContactNo2() {
        return contactNo2;
    }

    public void setContactNo2(Long contactNo2) {
        this.contactNo2 = contactNo2;
    }

    public String getRelationship2() {
        return relationship2;
    }

    public void setRelationship2(String relationship2) {
        this.relationship2 = relationship2;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public UserDTO getUser() {
        return user;
    }

    public void setUser(UserDTO user) {
        this.user = user;
    }
}
