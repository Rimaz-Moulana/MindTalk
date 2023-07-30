package com.javacorner.admin.model;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Objects;
import java.util.Set;

@Entity
@Table(name = "RegUser")
public class RegUser {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "RegUser_id", nullable = false)
    private Long regUserId;
    @Basic
    @Column(name = "user_name", nullable = false, length = 45)
    private String username;
    @Basic
    @Column(name = "contact_no1", nullable = false, length = 10)
    private Long contactNo1;

    @Basic
    @Column(name = "relationship1" , nullable = false, length = 64)
    private String relationship1;
    @Basic
    @Column(name = "contact_no2", nullable = false, length = 10)
    private Long contactNo2;
    @Basic
    @Column(name = "relationship2" , nullable = false, length = 64)
    private String relationship2;

    @Basic
    @Column(name = "location" ,nullable = false , length = 64)
    private String location;

    @OneToOne(cascade = CascadeType.REMOVE)
    @JoinColumn(name = "user_id", referencedColumnName = "user_id", nullable = false)
    private User user;

//    @OneToMany(mappedBy = "Doctor", fetch = FetchType.LAZY)
//    private Set<Doctor> doctors = new HashSet<>();

//    @OneToMany(mappedBy = "moderator", fetch = FetchType.LAZY)
//    private Set<Moderator> moderators = new HashSet<>();
//
//    @OneToMany(mappedBy = "VolunteerCounselor", fetch = FetchType.LAZY)
//    private Set<VolunteerCounselor> volunteerCounselors = new HashSet<>();
//
//    @OneToMany(mappedBy = "ProfessionalCounselor", fetch = FetchType.LAZY)
//    private Set<ProfessionalCounselor> professionalCounselors = new HashSet<>();



    public RegUser() {
    }

    public RegUser(String username, Long contactNo1, String relationship1, Long contactNo2, String relationship2, String location) {
        this.username = username;
        this.contactNo1 = contactNo1;
        this.relationship1 = relationship1;
        this.contactNo2 = contactNo2;
        this.relationship2 = relationship2;
        this.location = location;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        RegUser regUser = (RegUser) o;
        return Objects.equals(regUserId, regUser.regUserId) && Objects.equals(username, regUser.username) && Objects.equals(contactNo1, regUser.contactNo1) && Objects.equals(relationship1, regUser.relationship1) && Objects.equals(contactNo2, regUser.contactNo2) && Objects.equals(relationship2, regUser.relationship2) && Objects.equals(location, regUser.location);
    }

    @Override
    public int hashCode() {
        return Objects.hash(regUserId, username, contactNo1, relationship1, contactNo2, relationship2, location);
    }

    @Override
    public String toString() {
        return "RegUser{" +
                "regUserId=" + regUserId +
                ", userName='" + username + '\'' +
                ", contactNo1=" + contactNo1 +
                ", relationship1='" + relationship1 + '\'' +
                ", contactNo2=" + contactNo2 +
                ", relationship2='" + relationship2 + '\'' +
                ", location='" + location + '\'' +
                '}';
    }

    public Long getRegUserId() {
        return regUserId;
    }

    public void setRegUserId(Long regUserId) {
        this.regUserId = regUserId;
    }

    public String getUserName() {
        return username;
    }

    public void setUserName(String userName) {
        this.username = userName;
    }

    public Long getContactNo1() {
        return contactNo1;
    }

    public void setContactNo1(Long contactNo1) {
        this.contactNo1 = contactNo1;
    }

    public String getRelationship1() {
        return relationship1;
    }

    public void setRelationship1(String relationship1) {
        this.relationship1 = relationship1;
    }

    public Long getContactNo2() {
        return contactNo2;
    }

    public void setContactNo2(Long contactNo2) {
        this.contactNo2 = contactNo2;
    }

    public String getRelationship2() {
        return relationship2;
    }

    public void setRelationship2(String relationship2) {
        this.relationship2 = relationship2;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

//    public Set<Doctor> getDoctors() {
//        return doctors;
//    }
//
//    public void setDoctors(Set<Doctor> doctors) {
//        this.doctors = doctors;
//    }

//    public Set<Moderator> getModerators() {
//        return moderators;
//    }
//
//    public void setModerators(Set<Moderator> moderators) {
//        this.moderators = moderators;
//    }
//
//    public Set<VolunteerCounselor> getVolunteerCounselors() {
//        return volunteerCounselors;
//    }
//
//    public void setVolunteerCounselors(Set<VolunteerCounselor> volunteerCounselors) {
//        this.volunteerCounselors = volunteerCounselors;
//    }
//
//    public Set<ProfessionalCounselor> getProfessionalCounselors() {
//        return professionalCounselors;
//    }
//
//    public void setProfessionalCounselors(Set<ProfessionalCounselor> professionalCounselors) {
//        this.professionalCounselors = professionalCounselors;
//    }
}
