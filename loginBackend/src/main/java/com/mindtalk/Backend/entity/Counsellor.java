package com.mindtalk.Backend.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "counselors")
public class Counsellor {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

//    @OneToOne
//    @JoinColumn(name = "user_id")
//    private User _user;

    //private Integer userId;
    private String firstname;
    private String lastname;
    private String email;
    @Column(length = 100000)
    private String about;
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
    private Boolean status;

    @OneToOne
    @JoinColumn(name = "user_id")
    private User user; // Association with User

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getFirstname() {
        return firstname;
    }

    public void setFirstname(String firstname) {
        this.firstname = firstname;
    }

    public String getLastname() {
        return lastname;
    }

    public void setLastname(String lastname) {
        this.lastname = lastname;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Long getLicenseNo() {
        return licenseNo;
    }

    public void setLicenseNo(Long licenseNo) {
        this.licenseNo = licenseNo;
    }

    public String getLicenseImage() {
        return licenseImage;
    }

    public void setLicenseImage(String licenseImage) {
        this.licenseImage = licenseImage;
    }

    public Boolean getStatus() {
        return status;
    }

    public void setStatus(Boolean status) {
        status = false;
        this.status = status;
    }

}
