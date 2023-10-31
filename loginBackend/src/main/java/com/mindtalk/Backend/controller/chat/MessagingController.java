package com.mindtalk.Backend.controller.chat;

import com.mindtalk.Backend.entity.Chat;
import com.mindtalk.Backend.entity.Message;
import com.mindtalk.Backend.repo.ChatRepository;
import com.mindtalk.Backend.repo.MessageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;

@RestController
public class MessagingController {
    @Autowired
    private MessageRepository messageRepository;
    @Autowired
    private ChatRepository chatRepository;

    @CrossOrigin
    @RequestMapping(path = "/send_message", method = RequestMethod.POST)
    public ResponseEntity sendMessage(@RequestBody HashMap<String, String> request) {
        try {
            // Extract the necessary information from the request
            int senderId = Integer.parseInt(request.get("senderId"));
            int chatId = Integer.parseInt(request.get("chatId"));
            String content = request.get("content");

            // Find the chat by its ID or create a new one if it doesn't exist
            Chat chat = chatRepository.findById(chatId).orElseGet(() -> {
                Chat newChat = new Chat();
                newChat.setId(chatId);
                // Set other properties of the new chat as needed
                return chatRepository.save(newChat);
            });

            // Create a new message
            Message message = new Message();
            message.setSenderId(senderId);
            message.setContent(content);
            message.setChat(chat);

            // Save the message to the database
            message = messageRepository.save(message);

            return new ResponseEntity<>(message, HttpStatus.OK);
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
        }
    }
}

