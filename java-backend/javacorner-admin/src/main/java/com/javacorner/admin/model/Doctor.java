package com.javacorner.admin.model;

import javax.persistence.*;
import java.util.Objects;

@Entity
@Table(name = "doctor")
public class Doctor {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "moderator_id", nullable = false)
    private Long doctorId;
    @Basic
    @Column(name = "first_name", nullable = false, length = 45)
    private String firstName;
    @Basic
    @Column(name = "last_name", nullable = false, length = 45)
    private String lastName;

    @Basic
    @Column(name = "Reg_No", nullable = false, length = 45)
    private String doctorRegNo;

    @OneToOne(cascade = CascadeType.REMOVE)
    @JoinColumn(name = "user_id", referencedColumnName = "user_id", nullable = false)
    private User user;
//    @ManyToOne(fetch = FetchType.LAZY)
//    @JoinColumn(name = "regUser_id",referencedColumnName = "regUser_id",nullable = false)
//    private RegUser regUser;



    public Doctor() {
    }

    public Doctor(String firstName, String lastName, String level, String doctorRegNo) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.doctorRegNo = doctorRegNo;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Doctor doctor = (Doctor) o;
        return Objects.equals(doctorId, doctor.doctorId) && Objects.equals(firstName, doctor.firstName) && Objects.equals(lastName, doctor.lastName) && Objects.equals(doctorRegNo, doctor.doctorRegNo);
    }

    @Override
    public int hashCode() {
        return Objects.hash(doctorId, firstName, lastName, doctorRegNo);
    }

    @Override
    public String toString() {
        return "Doctor{" +
                "doctorId=" + doctorId +
                ", firstName='" + firstName + '\'' +
                ", lastName='" + lastName + '\'' +
                ", doctorRegNo='" + doctorRegNo + '\'' +
                '}';
    }

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

    public String getDoctorRegNo() {
        return doctorRegNo;
    }

    public void setDoctorRegNo(String doctorRegNo) {
        this.doctorRegNo = doctorRegNo;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

//    public RegUser getRegUser() {
//        return regUser;
//    }
//
//    public void setRegUser(RegUser regUser) {
//        this.regUser = regUser;
//    }
}
