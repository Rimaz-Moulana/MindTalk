package com.mindtalk.Backend.controller.chat;

import com.mindtalk.Backend.entity.Message;
import com.mindtalk.Backend.model.MessageModel;
import com.mindtalk.Backend.repo.MessageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.messaging.handler.annotation.DestinationVariable;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/v1/messages")
@CrossOrigin(origins = "http://127.0.0.1:5173")
public class MessageController {
    @Autowired
    private SimpMessagingTemplate simpMessagingTemplate;

    @MessageMapping("/chat/{to}")
    public void sendMessage(@DestinationVariable String to, MessageModel message) {
        System.out.println("handling send message: " + message + " to: " + to);
        boolean isExists = UserStorage.getInstance().getUsers().contains(to);
        if (isExists) {
            simpMessagingTemplate.convertAndSend("/topic/messages/" + to, message);
        }
    }
//    @Autowired
//    private MessageRepository messageRepository;
//
//    @PostMapping
//    public ResponseEntity<String> saveMessage(@RequestBody Message message){
//        try{
//            messageRepository.save(message);
//            return ResponseEntity.ok("Message saved");
//        } catch (Exception e){
//            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error saving message");
//        }
//    }
}
