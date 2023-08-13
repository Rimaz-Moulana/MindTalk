package com.mindtalk.Backend.service;
import com.mindtalk.Backend.dto.ChatUserDTO;
import com.mindtalk.Backend.entity.ChatUser;
import com.mindtalk.Backend.repo.ChatUserRepo;
import jakarta.transaction.Transactional;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.stream.Collectors;

@Service
@Transactional
public class ChatUserService {

    @Autowired
    private ChatUserRepo chatUserRepo;
    @Autowired
    private ModelMapper modelMapper;

    public ChatUserDTO saveChatUser(ChatUserDTO chatUserDTO) {
        chatUserRepo.save(modelMapper.map(chatUserDTO, ChatUser.class));
        return chatUserDTO;
    }

    public List<ChatUserDTO> getAllChatUsers() {
        List<ChatUser> chatUsers = chatUserRepo.findAll();
        return modelMapper.map(chatUsers,new TypeToken<List<ChatUserDTO>>(){}.getType());
    }
    public List<ChatUserDTO> getAllChatCounsellors(){
        List<ChatUser> counsellors = chatUserRepo.findAllByUserRole("Counsellor");
        return  modelMapper.map(counsellors,new TypeToken<List<ChatUserDTO>>(){}.getType());
    }
    public List<ChatUserDTO> getAllChatClients(){
        List<ChatUser> clients = chatUserRepo.findAllByUserRole("user");
        return  modelMapper.map(clients,new TypeToken<List<ChatUserDTO>>(){}.getType());
    }

}
