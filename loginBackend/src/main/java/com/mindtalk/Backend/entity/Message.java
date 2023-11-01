package com.mindtalk.Backend.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.Date;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "message")
public class Message {
    @Id
    @GeneratedValue
    private int id;
    private int senderId;
    private String content;
    private Date time = new Date(System.currentTimeMillis());
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "chat_id" ,referencedColumnName = "id")
    private Chat chat;
}
