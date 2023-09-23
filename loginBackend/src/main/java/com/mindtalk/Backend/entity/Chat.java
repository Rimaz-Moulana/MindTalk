package com.mindtalk.Backend.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "_chats")
public class Chat {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int chatId;
    private  String name;

    @ManyToOne
    private User user;

    @ManyToOne
    private Counsellor counsellor;

//    @OneToMany(mappedBy = "_chats", cascade = CascadeType.ALL)
//    private List<ChatMessage> messages = new ArrayList<>();

}
