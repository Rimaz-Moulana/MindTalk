package com.javacorner.admin.dto;

public class VolunteerCounselorDTO {

    private Long VcounselorId;

    private String firstName;
    private String lastName;
    private String licenseNo;

    private UserDTO user;

    public Long getVcounselorId() {
        return VcounselorId;
    }

    public void setVcounselorId(Long vcounselorId) {
        VcounselorId = vcounselorId;
    }

    public String getLicenseNo() {
        return licenseNo;
    }

    public void setLicenseNo(String licenseNo) {
        this.licenseNo = licenseNo;
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
