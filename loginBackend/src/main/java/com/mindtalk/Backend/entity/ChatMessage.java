package com.mindtalk.Backend.entity;

import jakarta.persistence.*;
import lombok.*;

//@Entity
//@Data
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
//@Table(name = "_chatmessage")
public class ChatMessage {
    private String content;
    private String sender;
    private MessageType type;
//    @Id
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
//    private  int id;
//
//    @ManyToOne
//    @JoinColumn(name = "chat_id", referencedColumnName = "id")
//    private Chat chat;
//
//    private int senderId;
//    private String content;

}
