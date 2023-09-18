package com.mindtalk.Backend.controller.client;

import com.mindtalk.Backend.dto.ClientDTO;
import com.mindtalk.Backend.entity.Client;
import com.mindtalk.Backend.service.ClientService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

//@CrossOrigin
@RestController
@RequestMapping("/api/v1/client")
@Tag(name = "Client")
public class ClientController {

    @Autowired
    private ClientService clientService;

    @Operation(
            description = "Get endpoint for client",
            summary = "This is a summary for client get endpoint",
            responses = {
                    @ApiResponse(
                            description = "Success",
                            responseCode = "200"
                    ),
                    @ApiResponse(
                            description = "Unauthorized / Invalid Token",
                            responseCode = "403"
                    )
            }

    )

    @PostMapping
    @CrossOrigin(origins = "http://localhost:5173", allowCredentials = "true")
    public ResponseEntity<Client> createClient(@RequestBody ClientDTO clientDTO){
        Client createdClient = clientService.createClient(clientDTO);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdClient);
    }

    @GetMapping("/{clientId}")
    @CrossOrigin(origins = "http://localhost:5173", allowCredentials = "true")
    public ResponseEntity<Client> getClientById(@PathVariable Integer clientId){
        Client client = clientService.getClientById(clientId);

        if(client != null ){
            return ResponseEntity.ok(client);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping("/all")
    @CrossOrigin(origins = "http://localhost:5173", allowCredentials = "true")
    public ResponseEntity<List<Client>> getAllClient(){
        List<Client> allClient = clientService.getAllClient();

        if(!allClient.isEmpty()){
            return ResponseEntity.ok(allClient);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PutMapping("/{clientId}")
    @CrossOrigin(origins = "http://localhost:5173", allowCredentials = "true")
    public ResponseEntity<Client> updateClient(
            @PathVariable Integer clientId,
            @RequestBody ClientDTO clientDTO){
        Client updatedClient = clientService.updateClient(clientId, clientDTO);

        if(updatedClient != null ){
            return ResponseEntity.ok(updatedClient);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{clientId}")
    @CrossOrigin(origins = "http://localhost:5173", allowCredentials = "true")
    public ResponseEntity<Void> deleteClient(@PathVariable Integer clientId){
        boolean isDeleted = clientService.deleteClient(clientId);

        if (isDeleted){
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
