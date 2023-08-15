package com.mindtalk.Backend.service.chat;

import com.mindtalk.Backend.dto.chat.ChatUserDTO;
import com.mindtalk.Backend.dto.chat._CounsellorDTO;
import com.mindtalk.Backend.entity.ChatUser;
import com.mindtalk.Backend.entity._Counsellor;
import com.mindtalk.Backend.repo.ChatCounsellorRepository;
import com.mindtalk.Backend.repo.ChatUserRepository;
import jakarta.transaction.Transactional;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Transactional
public class ChatUserService {
    @Autowired
    private ChatUserRepository chatUserRepository;
    @Autowired
    private ChatCounsellorRepository chatCounsellorRepository;

    @Autowired
    private ModelMapper modelMapper;

    public ChatUserDTO saveChatUser(ChatUserDTO chatUserDTO){
        chatUserRepository.save(modelMapper.map(chatUserDTO, ChatUser.class));
        return chatUserDTO;
    }
    public List<ChatUserDTO> getAllChatUsers() {
        List<ChatUser> chatUsers = chatUserRepository.findAll();
        return modelMapper.map(chatUsers,new TypeToken<List<ChatUserDTO>>(){}.getType());
    }
//    public List<ChatUserDTO> getAllChatCounsellors(){
//        List<ChatUser> counsellors = chatUserRepository.findAllByUserRole("Counsellor");
//        return  modelMapper.map(counsellors,new TypeToken<List<ChatUserDTO>>(){}.getType());
//    }
    public List<_CounsellorDTO> getAllChatCounsellors(){
        List<_Counsellor> counsellors = chatCounsellorRepository.findAll();
        return  modelMapper.map(counsellors,new TypeToken<List<_CounsellorDTO>>(){}.getType());
    }
//    public List<ChatUserDTO> getAllChatClients(){
//        List<ChatUser> clients = chatUserRepository.findAllByUserRole("user");
//        return  modelMapper.map(clients,new TypeToken<List<ChatUserDTO>>(){}.getType());
//    }
}
