package com.mindtalk.Backend.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "notification")
public class Notification {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "recipient_id")
    private Long recipientId;

    @Column(name = "message")
    private String message;

    @Column(name = "timestamp")
    private LocalDateTime timestamp;

    @Column(name = "status")
    private String status; // Enum (unread, read, etc.)

    @Column(name = "type")
    private String type; // Enum (email, SMS, in-app, etc.)

    @Column(name = "source")
    private String source; // Enum (system, user, etc.)

    @Column(name = "action_link")
    private String actionLink;

    @Column(name = "priority")
    private String priority; // Enum (low, medium, high, etc.)
}
