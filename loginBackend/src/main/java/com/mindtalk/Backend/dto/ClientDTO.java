package com.mindtalk.Backend.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.web.multipart.MultipartFile;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class ClientDTO {
    private String fName;
    private String lName;
    private String dob;
    private String gender;
    private String email;
    private String phone;
    private String address;
    private String city;
    private String district;
    private String zip;
    private String emName1;
    private String emPhone1;
    private String emName2;
    private String emPhone2;
    private String emName3;
    private String emPhone3;
    private MultipartFile profilePhoto;
}