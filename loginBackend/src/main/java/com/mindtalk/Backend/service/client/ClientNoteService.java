package com.mindtalk.Backend.service.client;

import com.mindtalk.Backend.dto.client.ClientNoteDTO;
import com.mindtalk.Backend.entity.client.ClientNoteEntity;
import com.mindtalk.Backend.repo.client.ClientNoteRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ClientNoteService {

    @Autowired
    private ClientNoteRepo clientNoteRepo;

    public ClientNoteEntity saveClientNote (ClientNoteDTO clientNoteDTO){
        ClientNoteEntity clientNoteEntity = new ClientNoteEntity();
        clientNoteEntity.setDate(clientNoteDTO.getDate());
        clientNoteEntity.setDuration(clientNoteDTO.getDuration());
        clientNoteEntity.setSummary(clientNoteDTO.getSummary());

        return clientNoteRepo.save(clientNoteEntity);

    }
}
