package com.mindtalk.Backend.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Data
@Table(name = "message")
public class Message {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int messageID;
    private String content;
    private String senderName;
    private LocalDateTime timestamp;

    @ManyToOne
    @JoinColumn(name = "chatId")
    private Chat chat;
}
