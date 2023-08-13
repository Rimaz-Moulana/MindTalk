package com.mindtalk.Backend.controller;

import com.mindtalk.Backend.dto.ChatUserDTO;
import com.mindtalk.Backend.service.ChatUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/api/chatuser")
@CrossOrigin(origins = "http://127.0.0.1:5173")
public class ChatUserController {

    @Autowired
    private ChatUserService chatUserService;

    @GetMapping("/getChatUsers")
    public List<ChatUserDTO> getChatUser(){
        return chatUserService.getAllChatUsers();
    }
    @GetMapping("/getChatCounsellors")
    public List<ChatUserDTO> getChatCounsellors(){
        return chatUserService.getAllChatCounsellors();
    }
    @GetMapping("/getChatClients")
    public List<ChatUserDTO> getChatClients(){
        return chatUserService.getAllChatClients();
    }
    @PostMapping("/saveChatUser")
    public ChatUserDTO saveChatUser(@RequestBody ChatUserDTO chatUserDTO){
        return chatUserService.saveChatUser(chatUserDTO);
    }
}
