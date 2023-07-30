package com.javacorner.admin.model;

import javax.persistence.*;
import java.util.Objects;

@Entity
@Table(name = "VolunteerCounselor")
public class VolunteerCounselor {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "volunteerCounselor_id", nullable = false)
    private Long volunteerId;
    @Basic
    @Column(name = "first_name", nullable = false, length = 45)
    private String firstName;
    @Basic
    @Column(name = "last_name", nullable = false, length = 45)
    private String lastName;
    @Basic
    @Column(name = "licence_no", nullable = false, length = 64)
    private String licenceNo;

    @OneToOne(cascade = CascadeType.REMOVE)
    @JoinColumn(name = "user_id", referencedColumnName = "user_id", nullable = false)
    private User user;

//    @ManyToOne(fetch = FetchType.LAZY)
//    @JoinColumn(name = "regUser_id",referencedColumnName = "regUser_id",nullable = false)
//    private RegUser regUser;

    public VolunteerCounselor() {
    }

    public VolunteerCounselor(String firstName, String lastName, String licenceNo) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.licenceNo = licenceNo;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        VolunteerCounselor that = (VolunteerCounselor) o;
        return Objects.equals(volunteerId, that.volunteerId) && Objects.equals(firstName, that.firstName) && Objects.equals(lastName, that.lastName) && Objects.equals(licenceNo, that.licenceNo);
    }

    @Override
    public int hashCode() {
        return Objects.hash(volunteerId, firstName, lastName, licenceNo);
    }

    @Override
    public String toString() {
        return "VolunteerCounselor{" +
                "volunteerId=" + volunteerId +
                ", firstName='" + firstName + '\'' +
                ", lastName='" + lastName + '\'' +
                ", licenceNo='" + licenceNo + '\'' +
                '}';
    }

    public Long getVolunteerId() {
        return volunteerId;
    }

    public void setVolunteerId(Long volunteerId) {
        this.volunteerId = volunteerId;
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
