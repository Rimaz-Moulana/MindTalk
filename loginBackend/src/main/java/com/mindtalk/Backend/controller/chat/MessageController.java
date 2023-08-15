package com.mindtalk.Backend.controller.chat;

import com.mindtalk.Backend.entity.Message;
import com.mindtalk.Backend.repo.MessageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/v1/messages")
@CrossOrigin(origins = "http://127.0.0.1:5173")
public class MessageController {
    @Autowired
    private MessageRepository messageRepository;

    @PostMapping
    public ResponseEntity<String> saveMessage(@RequestBody Message message){
        try{
            messageRepository.save(message);
            return ResponseEntity.ok("Message saved");
        } catch (Exception e){
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error saving message");
        }
    }
}
