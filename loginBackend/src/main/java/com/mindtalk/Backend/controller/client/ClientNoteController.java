package com.mindtalk.Backend.controller.client;

import com.mindtalk.Backend.dto.client.ClientNoteDTO;
import com.mindtalk.Backend.entity.client.ClientNoteEntity;
import com.mindtalk.Backend.service.client.ClientNoteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/client")
public class ClientNoteController {

    @Autowired
    private ClientNoteService clientNoteService;

    @PostMapping(value = "/savenote")
    public ResponseEntity<ClientNoteEntity> saveClientNote(@RequestBody ClientNoteDTO clientNoteDTO){
        ClientNoteEntity savedClientNote = clientNoteService.saveClientNote(clientNoteDTO);
        return ResponseEntity.status(HttpStatus.CREATED).body(savedClientNote);
    }




}
