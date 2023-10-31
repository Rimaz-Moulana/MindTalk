package com.mindtalk.Backend.service.chat;

import com.mindtalk.Backend.dto.chat.MessageDTO;
import com.mindtalk.Backend.entity.Chat;
import com.mindtalk.Backend.entity.Message;
import com.mindtalk.Backend.repo.MessageRepository;
import jakarta.transaction.Transactional;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

@Service
public class MessageService {
    @Autowired
    private MessageRepository messageRepository;

    @Autowired
    private ModelMapper modelMapper;
    public void createMessage(Integer id,Integer senderId, String content, Chat chat){
        Message message = new Message();
        message.setId(id);
        message.setSenderId(senderId);
        message.setTime(new Date(System.currentTimeMillis()));
        message.setContent(content);
        message.setChat(chat);
        messageRepository.save(message);
    }

    public List<MessageDTO> getMessagesByChatId(Integer chatId) {
        List<Message> messages = messageRepository.findByChatId(chatId);
        return modelMapper.map(messages, new TypeToken<List<MessageDTO>>(){}.getType());
    }
}
