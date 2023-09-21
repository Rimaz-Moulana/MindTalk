package com.mindtalk.Backend.service;

import com.mindtalk.Backend.entity.ChatMessage;
import com.mindtalk.Backend.repo.ChatMessageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ChatMessageService {
    @Autowired
    private ChatMessageRepository chatMessageRepository;

    public ChatMessage saveChatMessage(ChatMessage message){
        return chatMessageRepository.save(message);
    }

    public List<ChatMessage> getMessagesForChat(int chatId){
        return chatMessageRepository.findByChatId(chatId);
    }
}
