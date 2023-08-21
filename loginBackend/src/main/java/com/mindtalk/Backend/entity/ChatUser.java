package com.mindtalk.Backend.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Data
@Table(name = "chatUser")
public class ChatUser {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int chatUserId;
    private String name;
    private String userRole;
//    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
//    private List<Chat> chats;
}
