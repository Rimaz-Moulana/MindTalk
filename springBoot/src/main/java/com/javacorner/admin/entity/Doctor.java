package com.javacorner.admin.entity;

import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;

import javax.persistence.*;
import java.util.Objects;

@Entity
@Table(name = "Doctors")
public class Doctor {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "doctor_id" , nullable = false)
    private Long doctorId;

    @Basic
    @Column(name = "doctor_fname" , nullable = false)
    private String firstName;

    @Basic
    @Column(name = "doctor_lfname" , nullable = false)
    private String lastName;

    @Basic
    @Column(name = "reg_no" , nullable = false)
    private String regNo;

    @Basic
    @Column(name = "hospital_name" , nullable = false)
    private String hospitalName;

    @OneToOne(cascade = CascadeType.REMOVE)
    @JoinColumn(name = "user_id", referencedColumnName = "user_id", nullable = false)
    private User user;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "regUser_id",referencedColumnName = "regUser_id" , nullable = false)
    private RegUser regUser;

    public Doctor() {
    }

    public Doctor(String firstName, String lastName, String regNo, String hospitalName, User user, RegUser regUser) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.regNo = regNo;
        this.hospitalName = hospitalName;
        this.user = user;
        this.regUser = regUser;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Doctor doctor = (Doctor) o;
        return Objects.equals(doctorId, doctor.doctorId) && Objects.equals(firstName, doctor.firstName) && Objects.equals(lastName, doctor.lastName) && Objects.equals(regNo, doctor.regNo) && Objects.equals(hospitalName, doctor.hospitalName);
    }

    @Override
    public int hashCode() {
        return Objects.hash(doctorId, firstName, lastName, regNo, hospitalName);
    }

    @Override
    public String toString() {
        return "Doctor{" +
                "doctorId=" + doctorId +
                ", firstName='" + firstName + '\'' +
                ", lastName='" + lastName + '\'' +
                ", regNo='" + regNo + '\'' +
                ", hospitalName='" + hospitalName + '\'' +
                '}';
    }

    public Long getDoctorId() {
        return doctorId;
    }

    public void setDoctorId(Long doctorId) {
        this.doctorId = doctorId;
    }

    public String getRegNo() {
        return regNo;
    }

    public void setRegNo(String regNo) {
        this.regNo = regNo;
    }

    public String getHospitalName() {
        return hospitalName;
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

    public void setHospitalName(String hospitalName) {
        this.hospitalName = hospitalName;
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
}
