package com.javacorner.admin.entity;

import javax.persistence.*;
import java.util.Objects;

@Entity
@Table(name = "Moderators")
public class Moderator {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "moderator_id" , nullable = false)
    private Long moderatorId;

    @Basic
    @Column(name = "moderator_fname" , nullable = false)
    private String firstName;

    @Basic
    @Column(name = "moderator_lfname" , nullable = false)
    private String lastName;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "regUser_id",referencedColumnName = "regUser_id" , nullable = false)
    private RegUser regUser;

    @OneToOne(cascade = CascadeType.REMOVE)
    @JoinColumn(name = "user_id", referencedColumnName = "user_id", nullable = false)
    private User user;

    public Moderator() {
    }

    public Moderator(String firstName, String lastName, RegUser regUser, User user) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.regUser = regUser;
        this.user = user;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Moderator moderator = (Moderator) o;
        return Objects.equals(moderatorId, moderator.moderatorId) && Objects.equals(firstName, moderator.firstName) && Objects.equals(lastName, moderator.lastName);
    }

    @Override
    public String toString() {
        return "Moderator{" +
                "moderatorId=" + moderatorId +
                ", firstName='" + firstName + '\'' +
                ", lastName='" + lastName + '\'' +
                '}';
    }

    @Override
    public int hashCode() {
        return Objects.hash(moderatorId, firstName, lastName);
    }

    public Long getModeratorId() {
        return moderatorId;
    }

    public void setModeratorId(Long moderatorId) {
        this.moderatorId = moderatorId;
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

    public RegUser getRegUser() {
        return regUser;
    }

    public void setRegUser(RegUser regUser) {
        this.regUser = regUser;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}
