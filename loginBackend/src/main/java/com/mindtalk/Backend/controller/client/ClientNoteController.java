package com.mindtalk.Backend.controller.client;

import com.mindtalk.Backend.dto.client.ClientNoteDTO;
import com.mindtalk.Backend.entity.client.ClientNoteEntity;
import com.mindtalk.Backend.entity.entertainment.BlogsEntity;
import com.mindtalk.Backend.service.client.ClientNoteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/client")

public class ClientNoteController {

    @Autowired
    private ClientNoteService clientNoteService;

    private final List<String> allowedOrigins;

    @Autowired
    public ClientNoteController(@Value("#{'${app.cors.allowed-origins}'.split(',')}") List<String> allowedOrigins) {
        this.allowedOrigins = allowedOrigins;
    }

    @PostMapping(value = "/saveClientNote")
    @CrossOrigin(origins = "${app.cors.allowed-origins}", allowCredentials = "true")
    public ResponseEntity<ClientNoteEntity> saveClientNote(@RequestBody ClientNoteDTO clientNoteDTO){
        ClientNoteEntity savedClientNote = clientNoteService.saveClientNote(clientNoteDTO);
        return ResponseEntity.status(HttpStatus.CREATED).body(savedClientNote);
    }

    @GetMapping(value = "/getClientNotes")
    @CrossOrigin(origins = "${app.cors.allowed-origins}", allowCredentials = "true")
    public ResponseEntity<List<ClientNoteEntity>> getAllClientNote(){
        List<ClientNoteEntity> allClientNote = clientNoteService.getAllClientNote();

        if(!allClientNote.isEmpty()){
            return ResponseEntity.ok(allClientNote);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping(value = "/getClientNoteById/{clientNoteId}")
    @CrossOrigin(origins = "${app.cors.allowed-origins}", allowCredentials = "true")
    public ResponseEntity<ClientNoteEntity> getClientNoteById(@PathVariable Integer clientNoteId){
        ClientNoteEntity clientNote = clientNoteService.getClientNoteById(clientNoteId);

        if(clientNote != null){
            return ResponseEntity.ok(clientNote);
        }else{
            return (ResponseEntity<ClientNoteEntity>) ResponseEntity.noContent();
        }
    }

//    @GetMapping("/allNotes/{client_id}")
//    @CrossOrigin(origins = "${app.cors.allowed-origins}", allowCredentials = "true")
//    public ResponseEntity<List<ClientNoteEntity>> getAllNotesByUserId(@PathVariable Integer client_id) {
//        List<ClientNoteEntity> allNotes = clientNoteService.getAllNotesByClientId(client_id);
//
//        if (!allNotes.isEmpty()){
//            return ResponseEntity.ok(allNotes);
//        } else {
//            return ResponseEntity.notFound().build();
//        }
//    }

    @GetMapping("/notesByClientAndCounsellor/{client_id}/{counsellor_id}")
    @CrossOrigin(origins = "${app.cors.allowed-origins}", allowCredentials = "true")
    public ResponseEntity<List<ClientNoteEntity>> getNotesByClientAndCounsellor(
            @PathVariable Integer client_id,
            @PathVariable Integer counsellor_id
    ) {
        List<ClientNoteEntity> notes = clientNoteService.getAllNotesByClientIdAndCounsellorId(client_id, counsellor_id);

        if (!notes.isEmpty()) {
            return ResponseEntity.ok(notes);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

}
