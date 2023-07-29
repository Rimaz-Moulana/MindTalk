package com.javacorner.admin.dto;

import javax.persistence.*;

public class RegUserDTO {
    private Long regUserId;

    private String RegUserName;

    private Long contactNo;

    private Long EmgContactNo1;

    private String relationship1;

    private Long EmgContactNo2;


    private String relationship2;

    private String location;

    private UserDTO user;

    public Long getRegUserId() {
        return regUserId;
    }

    public void setRegUserId(Long regUserId) {
        this.regUserId = regUserId;
    }

    public String getRegUserName() {
        return RegUserName;
    }

    public void setRegUserName(String regUserName) {
        RegUserName = regUserName;
    }

    public Long getContactNo() {
        return contactNo;
    }

    public void setContactNo(Long contactNo) {
        this.contactNo = contactNo;
    }

    public Long getEmgContactNo1() {
        return EmgContactNo1;
    }

    public void setEmgContactNo1(Long emgContactNo1) {
        EmgContactNo1 = emgContactNo1;
    }

    public String getRelationship1() {
        return relationship1;
    }

    public void setRelationship1(String relationship1) {
        this.relationship1 = relationship1;
    }

    public Long getEmgContactNo2() {
        return EmgContactNo2;
    }

    public void setEmgContactNo2(Long emgContactNo2) {
        EmgContactNo2 = emgContactNo2;
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
