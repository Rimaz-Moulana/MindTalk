package com.mindtalk.Backend.service.client;

import com.mindtalk.Backend.dto.client.ClientNoteDTO;
import com.mindtalk.Backend.entity.Test;
import com.mindtalk.Backend.entity.client.ClientNoteEntity;
import com.mindtalk.Backend.repo.client.ClientNoteRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ClientNoteService {

    @Autowired
    private ClientNoteRepo clientNoteRepo;

    public ClientNoteEntity saveClientNote (ClientNoteDTO clientNoteDTO){
        ClientNoteEntity clientNoteEntity = new ClientNoteEntity();
        clientNoteEntity.setClientId(clientNoteDTO.getClientId());
        clientNoteEntity.setDate(clientNoteDTO.getDate());
        clientNoteEntity.setDuration(clientNoteDTO.getDuration());
        clientNoteEntity.setNote(clientNoteDTO.getNote());
        clientNoteEntity.setCounsellorId(clientNoteDTO.getCounsellorId());

        return clientNoteRepo.save(clientNoteEntity);

    }

    public List<ClientNoteEntity> getAllClientNote(){
        return clientNoteRepo.findAll();
    }

    public ClientNoteEntity getClientNoteById(Integer clientNoteId){
        return clientNoteRepo.findById(clientNoteId).orElse(null);
    }

    public List<ClientNoteEntity> getAllNotesByClientIdAndCounsellorId(Integer client_id, Integer counsellor_id) {
        // Use the clientId and counsellorId to retrieve records with the given client and counsellor ids
        List<ClientNoteEntity> allNotes = clientNoteRepo.findAllByClientIdAndCounsellorId(client_id, counsellor_id);

        return allNotes;
    }
}
