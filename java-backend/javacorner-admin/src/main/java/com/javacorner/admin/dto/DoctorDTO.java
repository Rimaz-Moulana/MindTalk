package com.javacorner.admin.dto;

public class DoctorDTO {
    private Long doctorId;
    private String firstName;
    private String lastName;
    private String doctorRegNo;

    private UserDTO user;

    private RegUserDTO regUserDTO;

    public Long getDoctorId() {
        return doctorId;
    }

    public void setDoctorId(Long doctorId) {
        this.doctorId = doctorId;
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

    public String getDoctorRegNo(String s) {
        return doctorRegNo;
    }

    public void setDoctorRegNo(String doctorRegNo) {
        this.doctorRegNo = doctorRegNo;
    }

    public UserDTO getUser() {
        return user;
    }

    public void setUser(UserDTO user) {
        this.user = user;
    }

    public RegUserDTO getRegUserDTO() {
        return regUserDTO;
    }

    public void setRegUserDTO(RegUserDTO regUserDTO) {
        this.regUserDTO = regUserDTO;
    }
}
