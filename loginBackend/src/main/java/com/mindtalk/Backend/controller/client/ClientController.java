package com.mindtalk.Backend.controller.client;

import com.mindtalk.Backend.dto.ClientDTO;
import com.mindtalk.Backend.entity.Client;
import com.mindtalk.Backend.entity.User;
import com.mindtalk.Backend.service.ClientService;
import com.mindtalk.Backend.service.UserService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

//@CrossOrigin
@RestController
@RequestMapping("/api/v1/client")
@Tag(name = "Client")
public class ClientController {

    @Autowired
    private ClientService clientService;

    @Autowired
    private UserService userService;

    private final List<String> allowedOrigins;

    @Autowired
    public ClientController(@Value("#{'${app.cors.allowed-origins}'.split(',')}") List<String> allowedOrigins) {
        this.allowedOrigins = allowedOrigins;
    }

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
    @CrossOrigin(origins = "${app.cors.allowed-origins}", allowCredentials = "true")
    public ResponseEntity<Client> createClient(@RequestBody ClientDTO clientDTO) {
        Client createdClient = clientService.createClient(clientDTO);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdClient);
    }

    @GetMapping("/{user_id}")
    @CrossOrigin(origins = "${app.cors.allowed-origins}", allowCredentials = "true")
    public ResponseEntity<Client> getClientByUserId(@PathVariable Integer user_id) {
        Client client = clientService.getClientByUserId(user_id);

        if (client != null) {
            return ResponseEntity.ok(client);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping("/{user_id}/profilePhotoPath")
    @CrossOrigin(origins = "${app.cors.allowed-origins}", allowCredentials = "true")
    public ResponseEntity<String> getProfilePhotoPath(@PathVariable Integer user_id) {
        String profilePhotoPath = clientService.getProfilePhotoPathByUserId(user_id);

        if (profilePhotoPath != null) {
            return ResponseEntity.ok(profilePhotoPath);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping("/all")
    @CrossOrigin(origins = "${app.cors.allowed-origins}", allowCredentials = "true")
    public ResponseEntity<List<Client>> getAllClient() {
        List<Client> allClient = clientService.getAllClient();

        if (!allClient.isEmpty()) {
            return ResponseEntity.ok(allClient);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PutMapping("/{user_id}")
    @CrossOrigin(origins = "${app.cors.allowed-origins}", allowCredentials = "true")
    public ResponseEntity<Client> updateClient(
            @PathVariable Integer user_id,
            @RequestBody ClientDTO clientDTO) {
        Client updatedClient = clientService.updateClient(user_id, clientDTO);

        if (updatedClient != null) {
            return ResponseEntity.ok(updatedClient);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PutMapping("/{user_id}/updateProfilePhoto")
    @CrossOrigin(origins = "${app.cors.allowed-origins}", allowCredentials = "true")
    public ResponseEntity<Client> updateProfilePhoto(
            @PathVariable Integer user_id,
            @RequestPart(required = false) MultipartFile profilePhoto) {

        if (profilePhoto != null) {
            String updatedProfilePhotoPath = clientService.updateProfilePhoto(user_id, profilePhoto);
            if (updatedProfilePhotoPath != null) {
                return ResponseEntity.ok(clientService.getClientByUserId(user_id));
            }
        }

        return ResponseEntity.badRequest().build(); //Handle errors as needed
    }


    @DeleteMapping("/{clientId}")
    @CrossOrigin(origins = "${app.cors.allowed-origins}", allowCredentials = "true")
    public ResponseEntity<Void> deleteClient(@PathVariable Integer clientId){
        boolean isDeleted = clientService.deleteClient(clientId);

        if (isDeleted){
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    //get username by id
    @GetMapping("/{user_id}/username")
    @CrossOrigin(origins = "${app.cors.allowed-origins}", allowCredentials = "true")
    public ResponseEntity<String> getUsernameByUserId(@PathVariable Integer user_id) {
        String username = userService.getUsernameByUserId(user_id);

        if (username != null) {
            return ResponseEntity.ok(username);
        } else {
            return ResponseEntity.notFound().build();
        }
    }


}