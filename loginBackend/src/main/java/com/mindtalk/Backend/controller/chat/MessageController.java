package com.mindtalk.Backend.controller.chat;

import com.mindtalk.Backend.dto.chat.MessageDTO;
import com.mindtalk.Backend.entity.Chat;
import com.mindtalk.Backend.entity.Message;
import com.mindtalk.Backend.repo.MessageRepository;
import com.mindtalk.Backend.service.chat.ChatService;
import com.mindtalk.Backend.service.chat.MessageService;
import lombok.Data;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;

@RestController
@RequestMapping("api/v1/messages")
@CrossOrigin(origins = "http://127.0.0.1:5173")
public class MessageController {

    @Autowired
    private MessageService messageService;

    @Autowired
    private ChatService chatService;

    @PostMapping("/create")
    @CrossOrigin(origins = "${app.cors.allowed-origins}", allowCredentials = "true")
    public ResponseEntity<String> createMessage(@RequestBody MessageDTO messageDTO) {
        try {
            Integer id = messageDTO.getId();
            Integer senderId = messageDTO.getSenderId();
            String content = messageDTO.getContent();
            Integer chatId = messageDTO.getChatId();
            Chat chat = chatService.getChatById(chatId);
            messageService.createMessage(id, senderId, content, chat);
            return ResponseEntity.ok("Message saved");
        } catch (Exception e) {
            return ResponseEntity.status(500).body("An error");
        }

    }

    @GetMapping("/getMessages/{chatId}")
    @CrossOrigin(origins = "${app.cors.allowed-origins}", allowCredentials = "true")
    public List<MessageDTO> getAllMessagesByChatId(@PathVariable Integer chatId) {
        return messageService.getMessagesByChatId(chatId);
    }
    // @Autowired
    // private MessageRepository messageRepository;
    //
    // @PostMapping
    // public ResponseEntity<String> saveMessage(@RequestBody Message message){
    // try{
    // messageRepository.save(message);
    // return ResponseEntity.ok("Message saved");
    // } catch (Exception e){
    // return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error
    // saving message");
    // }
    // }
}
