package com.mindtalk.Backend.controller.client;

import com.mindtalk.Backend.dto.client.ClientNoteDTO;
import com.mindtalk.Backend.entity.client.ClientNoteEntity;
import com.mindtalk.Backend.entity.entertainment.BlogsEntity;
import com.mindtalk.Backend.service.client.ClientNoteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/client")

public class ClientNoteController {

    @Autowired
    private ClientNoteService clientNoteService;

    @PostMapping(value = "/saveClientNote")
    @CrossOrigin(origins = "http://localhost:5173", allowCredentials = "true")
    public ResponseEntity<ClientNoteEntity> saveClientNote(@RequestBody ClientNoteDTO clientNoteDTO){
        ClientNoteEntity savedClientNote = clientNoteService.saveClientNote(clientNoteDTO);
        return ResponseEntity.status(HttpStatus.CREATED).body(savedClientNote);
    }

    @GetMapping(value = "/getClientNotes")
    @CrossOrigin(origins = "http://localhost:5173", allowCredentials = "true")
    public ResponseEntity<List<ClientNoteEntity>> getAllClientNote(){
        List<ClientNoteEntity> allClientNote = clientNoteService.getAllClientNote();

        if(!allClientNote.isEmpty()){
            return ResponseEntity.ok(allClientNote);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping(value = "/getClientNoteById/{clientNoteId}")
    @CrossOrigin(origins = "http://localhost:5173", allowCredentials = "true")
    public ResponseEntity<ClientNoteEntity> getClientNoteById(@PathVariable Integer clientNoteId){
        ClientNoteEntity clientNote = clientNoteService.getClientNoteById(clientNoteId);

        if(clientNote != null){
            return ResponseEntity.ok(clientNote);
        }else{
            return (ResponseEntity<ClientNoteEntity>) ResponseEntity.noContent();
        }
    }




}
