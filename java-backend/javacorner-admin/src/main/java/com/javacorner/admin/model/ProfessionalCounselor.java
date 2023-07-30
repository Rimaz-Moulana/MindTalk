package com.javacorner.admin.model;

import javax.persistence.*;
import java.util.Objects;

@Entity
@Table(name = "ProfessionalCounselor")
public class ProfessionalCounselor {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "professionalCounselor_id", nullable = false)
    private Long professionalId;
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

    public ProfessionalCounselor() {
    }

    public ProfessionalCounselor(String firstName, String lastName, String licenceNo) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.licenceNo = licenceNo;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        ProfessionalCounselor that = (ProfessionalCounselor) o;
        return Objects.equals(professionalId, that.professionalId) && Objects.equals(firstName, that.firstName) && Objects.equals(lastName, that.lastName) && Objects.equals(licenceNo, that.licenceNo);
    }

    @Override
    public int hashCode() {
        return Objects.hash(professionalId, firstName, lastName, licenceNo);
    }

    @Override
    public String toString() {
        return "ProfessionalCounselor{" +
                "professionalId=" + professionalId +
                ", firstName='" + firstName + '\'' +
                ", lastName='" + lastName + '\'' +
                ", licenceNo='" + licenceNo + '\'' +
                '}';
    }

    public Long getProfessionalId() {
        return professionalId;
    }

    public void setProfessionalId(Long professionalId) {
        this.professionalId = professionalId;
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
