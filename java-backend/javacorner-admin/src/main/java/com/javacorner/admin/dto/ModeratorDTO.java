package com.javacorner.admin.dto;

public class ModeratorDTO {
    private Long moderatorId;
    private String firstName;
    private String lastName;

    private UserDTO user;

    private RegUserDTO regUserDTO;

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

    public RegUserDTO getRegUserDTO() {
        return regUserDTO;
    }

    public void setRegUserDTO(RegUserDTO regUserDTO) {
        this.regUserDTO = regUserDTO;
    }
}
