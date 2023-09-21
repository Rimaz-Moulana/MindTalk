package com.mindtalk.Backend.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Data
@Table(name = "client")
public class Client {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @OneToOne
    @JoinColumn(name = "user_id")
    private User _user;

    private String fName;
    private String lName;
    private String dob;
    private String gender;
    private String email;
    private String phone;
    private String address;
    private String city;
    private String district;
    private String zip;
    private String emName1;
    private String emPhone1;
    private String emName2;
    private String emPhone2;
    private String emName3;
    private String emPhone3;
}
