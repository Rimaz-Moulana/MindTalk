package com.mindtalk.Backend.service;

import com.mindtalk.Backend.entity.Chat;
import com.mindtalk.Backend.repo.ChatRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ChatService {
    @Autowired
    private ChatRepository chatRepository;

    public Chat saveChat(Chat chat){
        return chatRepository.save(chat);
    }
}
