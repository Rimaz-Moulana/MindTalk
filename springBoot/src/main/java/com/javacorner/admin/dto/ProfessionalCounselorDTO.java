package com.javacorner.admin.dto;

import javax.persistence.*;

public class ProfessionalCounselorDTO {
    private Long PcounselorId;

    private String firstName;
    private String lastName;

    private String licenseNo;

    private UserDTO user;

    public Long getPcounselorId() {
        return PcounselorId;
    }

    public void setPcounselorId(Long pcounselorId) {
        PcounselorId = pcounselorId;
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

    public String getLicenseNo() {
        return licenseNo;
    }

    public void setLicenseNo(String licenseNo) {
        this.licenseNo = licenseNo;
    }

    public UserDTO getUser() {
        return user;
    }

    public void setUser(UserDTO user) {
        this.user = user;
    }
}
