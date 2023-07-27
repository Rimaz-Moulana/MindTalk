package com.javacorner.admin.entity;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Objects;
import java.util.Set;

@Entity
@Table(name = "Reg_users")
public class RegUser {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "regUser_id", nullable = false)
    private Long regUserId;
    @Basic
    @Column(name = "RegUser_name", nullable = false, length = 45)
    private String userName;

    @Basic
    @Column(name = "Contact_no", nullable = false, length = 10)
    private Long contactNo;
    @Basic
    @Column(name = "EmgContact_no1", nullable = false, length = 10)
    private Long emgContactNo1;

    @Basic
    @Column(name = "Relationship_1", nullable = false, length = 45)
    private String relationship1;
    @Basic
    @Column(name = "EmgContact_no2", nullable = false, length = 10)
    private Long emgContactNo2;

    @Basic
    @Column(name = "Relationship_2", nullable = false, length = 45)
    private String relationship2;
    @Basic
    @Column(name = "location", nullable = false, length = 64)
    private String location;

    @OneToMany(mappedBy = "moderator", fetch = FetchType.LAZY)
    private Set<Moderator> moderator = new HashSet<>();

    @OneToMany(mappedBy = "profrssional_counselor" , fetch = FetchType.LAZY)
    private Set<ProfessionalCounselor> professionalCounselors = new HashSet<>();

    @OneToMany(mappedBy = "volunteer_counselor" , fetch = FetchType.LAZY)
    private Set<VolunteerCounselor> volunteerCounselors = new HashSet<>();

    @OneToMany(mappedBy = "doctor" , fetch = FetchType.LAZY)
    private Set<Doctor> doctors = new HashSet<>();

    @OneToOne(cascade = CascadeType.REMOVE)
    @JoinColumn(name = "user_id", referencedColumnName = "user_id", nullable = false)
    private User user;

    public RegUser() {
    }

    public RegUser(String userName, Long contactNo, Long emgContactNo1, String relationship1, Long emgContactNo2, String relationship2, String location, Set<Moderator> moderator, Set<ProfessionalCounselor> professionalCounselors, Set<VolunteerCounselor> volunteerCounselors, Set<Doctor> doctors, User user) {
        this.userName = userName;
        this.contactNo = contactNo;
        this.emgContactNo1 = emgContactNo1;
        this.relationship1 = relationship1;
        this.emgContactNo2 = emgContactNo2;
        this.relationship2 = relationship2;
        this.location = location;
        this.moderator = moderator;
        this.professionalCounselors = professionalCounselors;
        this.volunteerCounselors = volunteerCounselors;
        this.doctors = doctors;
        this.user = user;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        RegUser regUser = (RegUser) o;
        return Objects.equals(regUserId, regUser.regUserId) && Objects.equals(userName, regUser.userName) && Objects.equals(contactNo, regUser.contactNo) && Objects.equals(emgContactNo1, regUser.emgContactNo1) && Objects.equals(relationship1, regUser.relationship1) && Objects.equals(emgContactNo2, regUser.emgContactNo2) && Objects.equals(relationship2, regUser.relationship2) && Objects.equals(location, regUser.location);
    }

    @Override
    public int hashCode() {
        return Objects.hash(regUserId, userName, contactNo, emgContactNo1, relationship1, emgContactNo2, relationship2, location);
    }

    @Override
    public String toString() {
        return "RegUser{" +
                "regUserId=" + regUserId +
                ", userName='" + userName + '\'' +
                ", contactNo=" + contactNo +
                ", emgContactNo1=" + emgContactNo1 +
                ", relationship1='" + relationship1 + '\'' +
                ", emgContactNo2=" + emgContactNo2 +
                ", relationship2='" + relationship2 + '\'' +
                ", location='" + location + '\'' +
                '}';
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public Long getEmgContactNo1() {
        return emgContactNo1;
    }

    public void setEmgContactNo1(Long emgContactNo1) {
        this.emgContactNo1 = emgContactNo1;
    }

    public Long getEmgContactNo2() {
        return emgContactNo2;
    }

    public void setEmgContactNo2(Long emgContactNo2) {
        this.emgContactNo2 = emgContactNo2;
    }

    public Long getRegUserId() {
        return regUserId;
    }

    public void setRegUserId(Long regUserId) {
        this.regUserId = regUserId;
    }

    public Long getContactNo() {
        return contactNo;
    }

    public void setContactNo(Long contactNo) {
        this.contactNo = contactNo;
    }


    public String getRelationship1() {
        return relationship1;
    }

    public void setRelationship1(String relationship1) {
        this.relationship1 = relationship1;
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

    public Set<Moderator> getModerator() {
        return moderator;
    }

    public void setModerator(Set<Moderator> moderator) {
        this.moderator = moderator;
    }

    public Set<ProfessionalCounselor> getProfessionalCounselors() {
        return professionalCounselors;
    }

    public void setProfessionalCounselors(Set<ProfessionalCounselor> professionalCounselors) {
        this.professionalCounselors = professionalCounselors;
    }

    public Set<VolunteerCounselor> getVolunteerCounselors() {
        return volunteerCounselors;
    }

    public void setVolunteerCounselors(Set<VolunteerCounselor> volunteerCounselors) {
        this.volunteerCounselors = volunteerCounselors;
    }

    public Set<Doctor> getDoctors() {
        return doctors;
    }

    public void setDoctors(Set<Doctor> doctors) {
        this.doctors = doctors;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}
