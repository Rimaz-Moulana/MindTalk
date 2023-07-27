package com.javacorner.admin.entity;

import javax.persistence.*;
import java.util.Objects;

@Entity
@Table(name = "Professional_counselors")
public class ProfessionalCounselor {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "Pcounselor_id" , nullable = false)
    private Long PcounselorId;

    @Basic
    @Column(name = "Pcounselor_fname" , nullable = false)
    private String firstName;

    @Basic
    @Column(name = "Pcounselor_lname" , nullable = false)
    private String fastName;

    @Basic
    @Column(name = "license_no" , nullable = false)
    private String licenseNo;

    @OneToOne(cascade = CascadeType.REMOVE)
    @JoinColumn(name = "user_id", referencedColumnName = "user_id", nullable = false)
    private User user;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "regUser_id",referencedColumnName = "regUser_id" , nullable = false)
    private RegUser regUser;

    public ProfessionalCounselor() {
    }

    public ProfessionalCounselor(String firstName, String fastName, String licenseNo, User user, RegUser regUser) {
        this.firstName = firstName;
        this.fastName = fastName;
        this.licenseNo = licenseNo;
        this.user = user;
        this.regUser = regUser;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        ProfessionalCounselor that = (ProfessionalCounselor) o;
        return Objects.equals(PcounselorId, that.PcounselorId) && Objects.equals(firstName, that.firstName) && Objects.equals(fastName, that.fastName) && Objects.equals(licenseNo, that.licenseNo);
    }

    @Override
    public int hashCode() {
        return Objects.hash(PcounselorId, firstName, fastName, licenseNo);
    }

    @Override
    public String toString() {
        return "ProfessionalCounselor{" +
                "PcounselorId=" + PcounselorId +
                ", firstName='" + firstName + '\'' +
                ", fastName='" + fastName + '\'' +
                ", licenseNo='" + licenseNo + '\'' +
                '}';
    }

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

    public String getFastName() {
        return fastName;
    }

    public void setFastName(String fastName) {
        this.fastName = fastName;
    }

    public String getLicenseNo() {
        return licenseNo;
    }

    public void setLicenseNo(String licenseNo) {
        this.licenseNo = licenseNo;
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
}
