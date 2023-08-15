package com.mindtalk.Backend.entity;

import jakarta.persistence.*;

@Entity
public class AssignedCounsellors {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @ManyToOne
    @JoinColumn(name = "client_id")
    private User client;

    @ManyToOne
    @JoinColumn(name = "counsellor_id")
    private User _counsellor;
}
