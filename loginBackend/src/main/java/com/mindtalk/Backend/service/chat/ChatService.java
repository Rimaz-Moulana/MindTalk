package com.mindtalk.Backend.service.chat;

import com.mindtalk.Backend.entity.Chat;
import com.mindtalk.Backend.entity.Message;
import com.mindtalk.Backend.exceptions.ChatAlreadyExistException;
import com.mindtalk.Backend.exceptions.ChatNotFoundException;
import com.mindtalk.Backend.exceptions.NoChatExistsInTheRepository;
import com.mindtalk.Backend.repo.ChatRepository;
import com.mindtalk.Backend.repo.MessageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Optional;
@Service
public class ChatService {
    @Autowired
    private ChatRepository chatRepository;

    @Autowired
    private MessageRepository messageRepository;

    public Chat addChat(Chat chat) {
        return chatRepository.save(chat);
    }

    public Message addMessage2(Message message) {
        return messageRepository.save(message);
    }

    public List<Message> getAllMessagesInChat(int chatId) throws NoChatExistsInTheRepository {
        Optional<Chat> chat = chatRepository.findById(chatId);

        if(chat.isEmpty()){
            throw new NoChatExistsInTheRepository();
        }else {
            return chat.get().getMessageList();
        }
    }

    public List<Chat> findallchats() throws NoChatExistsInTheRepository {
        if (chatRepository.findAll().isEmpty()) {
            throw new NoChatExistsInTheRepository();
        } else {
            return chatRepository.findAll();
        }
    }
    public List<Chat> findChatsForUser(int userId) {
        // Query the chat repository to find chats for the specified user
        return chatRepository.findByUserId(userId);
    }

    public List<Chat> findChatsForCounsellor(int counsellorId) {
        // Query the chat repository to find chats for the specified counsellor
        return chatRepository.findByCounsellorId(counsellorId);
    }


    public Chat getById(int id) throws ChatNotFoundException {
        Optional<Chat> chatid = chatRepository.findById(id);
        if (chatid.isPresent()) {
            return chatid.get();
        } else {
            throw new ChatNotFoundException();
        }
    }
    public Chat getChatById(int chatId) {
        return chatRepository.findById(chatId).orElse(null);
    }

    public HashSet<Chat> getChatByFirstUserName(String username) throws ChatNotFoundException {
        HashSet<Chat> chat = chatRepository.getChatByFirstUserName(username);

        if (chat.isEmpty()) {
            throw new ChatNotFoundException();
        } else {
            return chat;
        }
    }

    public HashSet<Chat> getChatBySecondUserName(String username) throws ChatNotFoundException {
        HashSet<Chat> chat = chatRepository.getChatBySecondUserName(username);
        if (chat.isEmpty()) {
            throw new ChatNotFoundException();
        } else {
            return chat;
        }
    }

    public HashSet<Chat> getChatByFirstUserNameOrSecondUserName(String username) throws ChatNotFoundException {
        HashSet<Chat> chat = chatRepository.getChatByFirstUserName(username);
        HashSet<Chat> chat1 = chatRepository.getChatBySecondUserName(username);

        chat1.addAll(chat);

        if (chat.isEmpty() && chat1.isEmpty()) {
            throw new ChatNotFoundException();
        } else if (chat1.isEmpty()) {
            return chat;
        } else {
            return chat1;
        }
    }

    public HashSet<Chat> getChatByFirstUserNameAndSecondUserName(String firstUserName, String secondUserName) throws ChatNotFoundException {
        HashSet<Chat> chat = chatRepository.getChatByFirstUserNameAndSecondUserName(firstUserName, secondUserName);
        HashSet<Chat> chat1 = chatRepository.getChatBySecondUserNameAndFirstUserName(firstUserName, secondUserName);
        if (chat.isEmpty() && chat1.isEmpty()) {
            throw new ChatNotFoundException();
        } else if (chat.isEmpty()) {
            return chat1;
        } else {
            return chat;
        }
    }

    public Chat addMessage(Message add, int chatId) throws ChatNotFoundException {
        Optional<Chat> chat=chatRepository.findById(chatId);
        Chat abc=chat.get();

        if(abc.getMessageList()==null){
            List<Message> msg=new ArrayList<>();
            msg.add(add);
            abc.setMessageList(msg);
            return chatRepository.save(abc);
        }else{
            List<Message> rates=abc.getMessageList();
            rates.add(add);
            abc.setMessageList(rates);
            return chatRepository.save(abc);
        }
    }
}
//public class ChatService {
//    public void sendMessage(Integer userId, Integer counsellorId, String message){
//        Chat chat = new Chat();
//
//    }
//}
