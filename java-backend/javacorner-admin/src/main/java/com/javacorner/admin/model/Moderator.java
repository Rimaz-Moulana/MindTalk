package com.javacorner.admin.model;

import javax.persistence.*;
import java.util.Objects;

@Entity
@Table(name = "Moderator")
public class Moderator {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "moderator_id", nullable = false)
    private Long moderatortId;
    @Basic
    @Column(name = "first_name", nullable = false, length = 45)
    private String firstName;
    @Basic
    @Column(name = "last_name", nullable = false, length = 45)
    private String lastName;

    @OneToOne(cascade = CascadeType.REMOVE)
    @JoinColumn(name = "user_id", referencedColumnName = "user_id", nullable = false)
    private User user;

//    @ManyToOne(fetch = FetchType.LAZY)
//    @JoinColumn(name = "regUser_id",referencedColumnName = "regUser_id",nullable = false)
//    private RegUser regUser;



    public Moderator() {
    }

    public Moderator(String firstName, String lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Moderator moderator = (Moderator) o;
        return Objects.equals(moderatortId, moderator.moderatortId) && Objects.equals(firstName, moderator.firstName) && Objects.equals(lastName, moderator.lastName);
    }

    @Override
    public int hashCode() {
        return Objects.hash(moderatortId, firstName, lastName);
    }

    @Override
    public String toString() {
        return "Moderator{" +
                "moderatortId=" + moderatortId +
                ", firstName='" + firstName + '\'' +
                ", lastName='" + lastName + '\'' +
                '}';
    }

    public Long getModeratortId() {
        return moderatortId;
    }

    public void setModeratortId(Long moderatortId) {
        this.moderatortId = moderatortId;
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
