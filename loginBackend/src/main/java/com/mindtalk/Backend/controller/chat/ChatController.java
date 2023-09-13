package com.mindtalk.Backend.controller.chat;

import com.mindtalk.Backend.entity.Chat;
import com.mindtalk.Backend.service.ChatService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/chats")
public class ChatController {
    @Autowired
    private ChatService chatService;

    @PostMapping("/create")
    public ResponseEntity<Chat> createChat(@RequestBody Chat chat){
        Chat createdChat = chatService.saveChat(chat);
        return new ResponseEntity<>(createdChat, HttpStatus.CREATED);
    }
}
