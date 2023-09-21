package com.mindtalk.Backend.controller.chat;

import com.mindtalk.Backend.entity.ChatMessage;
import com.mindtalk.Backend.service.ChatMessageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/messages")
@CrossOrigin("http://127.0.0.1:5173")
public class ChatMessageController {
    @Autowired
    private ChatMessageService chatMessageService;

    @PostMapping("/save")
    public ResponseEntity<ChatMessage> saveChatMessage(@RequestBody ChatMessage message){
        ChatMessage sentMessage = chatMessageService.saveChatMessage(message);
        return new ResponseEntity<>(sentMessage, HttpStatus.CREATED);
    }
    @GetMapping("/chat/{chatID}")
    public ResponseEntity<List<ChatMessage>> getChatMessage(@PathVariable int chatId){
        List<ChatMessage> messages = chatMessageService.getMessagesForChat(chatId);
        return new ResponseEntity<>(messages, HttpStatus.OK);
    }
}
