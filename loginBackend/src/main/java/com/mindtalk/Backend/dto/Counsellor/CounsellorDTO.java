package com.mindtalk.Backend.dto.Counsellor;

import jakarta.persistence.Column;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class CounsellorDTO {
    private Long id;
    private String firstname;
    private String lastname;
    @Column(length = 100000)
    private String about;
    private String email;
    private Long licenseNo;
    private String licenseImage;
    private String jobRole;
    private String address;
    private String phone;
    private String degree;
    private String workplace;
    private String coreServices;
    private String scopeOfPractice;
    private String experience;
    private String ageGroup;
    private String language;
    private String joinDate;
}
