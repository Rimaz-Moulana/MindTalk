package com.javacorner.admin.dto;

public class ProfessionalCounselorDTO {
    private Long professionalId;
    private String firstName;
    private String lastName;

    private String licenceNo;

    private UserDTO user;

    private RegUserDTO regUserDTO;

    public Long getProfessionalId() {
        return professionalId;
    }

    public void setProfessionalId(Long professionalId) {
        this.professionalId = professionalId;
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

    public String getLicenceNo() {
        return licenceNo;
    }

    public void setLicenceNo(String licenceNo) {
        this.licenceNo = licenceNo;
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
