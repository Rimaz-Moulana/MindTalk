package com.mindtalk.Backend.controller.chat;

import com.mindtalk.Backend.dto.chat.ChatUserDTO;
import com.mindtalk.Backend.dto.chat._CounsellorDTO;
import com.mindtalk.Backend.entity.ChatUser;
import com.mindtalk.Backend.service.chat.ChatUserService;
import io.swagger.v3.oas.annotations.Hidden;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api/v1/chat")
@CrossOrigin("http://127.0.0.1:5173")
@Hidden
public class ChatUserController{
    @Autowired
    private ChatUserService chatUserService;

    @GetMapping
    public ResponseEntity<String> sayHello() {
        return ResponseEntity.ok("Hello from secured chat");
    }

    @GetMapping("/getUsers")
    public List<ChatUserDTO> getChatUsers(){
        return chatUserService.getAllChatUsers();
    }

    @GetMapping("/getCounsellors")
    public List<ChatUserDTO> getCounsellors(){
        List<ChatUserDTO> allChatUsers = chatUserService.getAllChatUsers();
        List<ChatUserDTO> counsellors = new ArrayList<>();

        for (ChatUserDTO user : allChatUsers) {
            if (user.getUserRole().equals("Counsellor")) {
                counsellors.add(user);
            }
        }

        return counsellors;
    }
}
