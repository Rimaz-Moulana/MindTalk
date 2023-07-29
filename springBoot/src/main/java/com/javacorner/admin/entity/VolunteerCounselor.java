package com.javacorner.admin.entity;

import javax.persistence.*;
import java.util.Objects;

@Entity
@Table(name = "VolunteerCounselors")
public class VolunteerCounselor {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "Vcounselor_id" , nullable = false)
    private Long VcounselorId;

    @Basic
    @Column(name = "Vcounselor_fname" , nullable = false)
    private String firstName;

    @Basic
    @Column(name = "Vcounselor_lname" , nullable = false)
    private String lastName;

    @Basic
    @Column(name = "license_no" , nullable = false)
    private String licenseNo;

    @OneToOne(cascade = CascadeType.REMOVE)
    @JoinColumn(name = "user_id", referencedColumnName = "user_id", nullable = false)
    private User user;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "regUser_id",referencedColumnName = "regUser_id" , nullable = false)
    private RegUser regUser;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        VolunteerCounselor that = (VolunteerCounselor) o;
        return Objects.equals(VcounselorId, that.VcounselorId) && Objects.equals(firstName, that.firstName) && Objects.equals(lastName, that.lastName) && Objects.equals(licenseNo, that.licenseNo);
    }
    @Override
    public int hashCode() {
        return Objects.hash(VcounselorId, firstName, lastName, licenseNo);
    }

    @Override
    public String toString() {
        return "VolunteerCounselor{" +
                "VcounselorId=" + VcounselorId +
                ", firstName='" + firstName + '\'' +
                ", lastName='" + lastName + '\'' +
                ", licenseNo='" + licenseNo + '\'' +
                '}';
    }

    public VolunteerCounselor() {
    }

    public VolunteerCounselor(String firstName, String lastName, String licenseNo, User user, RegUser regUser) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.licenseNo = licenseNo;
        this.user = user;
        this.regUser = regUser;
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

    public Long getVcounselorId() {
        return VcounselorId;
    }

    public void setVcounselorId(Long vcounselorId) {
        VcounselorId = vcounselorId;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public RegUser getRegUser() {
        return regUser;
    }

    public void setRegUser(RegUser regUser) {
        this.regUser = regUser;
    }

    public String getLicenseNo() {
        return licenseNo;
    }

    public void setLicenseNo(String licenseNo) {
        this.licenseNo = licenseNo;
    }
}
