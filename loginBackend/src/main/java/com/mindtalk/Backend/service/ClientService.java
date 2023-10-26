package com.mindtalk.Backend.service;

//import com.example.tests.dto.ClientDTO;
//import com.example.tests.entity.Client;
//import com.example.tests.repo.ClientRepo;
import com.mindtalk.Backend.dto.ClientDTO;
import com.mindtalk.Backend.entity.Client;
import com.mindtalk.Backend.repo.ClientRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.util.List;

@Service
public class ClientService {

    @Autowired
    private ClientRepo clientRepo;

    @Value("${profile.photo.upload.path}")
    private String profilePhotoUploadPath;

    public Client createClient(ClientDTO clientDTO){
        Client client = new Client();
        client.setFName(clientDTO.getFName());
        client.setLName(clientDTO.getLName());
        client.setDob(clientDTO.getDob());
        client.setGender(clientDTO.getGender());
        client.setEmail(clientDTO.getEmail());
        client.setPhone(clientDTO.getPhone());
        client.setAddress(clientDTO.getAddress());
        client.setCity(clientDTO.getCity());
        client.setDistrict(clientDTO.getDistrict());
        client.setZip(clientDTO.getZip());
        client.setEmName1(clientDTO.getEmName1());
        client.setEmPhone1(clientDTO.getEmPhone1());
        client.setEmName2(clientDTO.getEmName2());
        client.setEmPhone2(clientDTO.getEmPhone2());
        client.setEmName3(clientDTO.getEmName3());
        client.setEmPhone3(clientDTO.getEmPhone3());

        //handle profile photo
        if (clientDTO.getProfilePhoto() != null && !clientDTO.getProfilePhoto().isEmpty()){
            try {
                //save the profile photo to a local file
                String fileName = System.currentTimeMillis() + "_" + clientDTO.getProfilePhoto().getOriginalFilename();
                Path filePath = Paths.get(profilePhotoUploadPath, fileName);
                Files.copy(clientDTO.getProfilePhoto().getInputStream(), filePath, StandardCopyOption.REPLACE_EXISTING);

                //set the profile photo path in the database
                client.setProfilePhotoPath(fileName);
            } catch (IOException e){
                e.printStackTrace(); //handle the exception
            }
        }

        return clientRepo.save(client);

    }

//    public Client getClientById(Integer clientId) {
//        return clientRepo.findById(clientId).orElse(null);
//    }

    public Client getClientByUserId(Integer user_id) {
        return clientRepo.findByUserId(user_id).orElse(null);
    }

    

    public List<Client> getAllClient(){
        return clientRepo.findAll();
    }

    public Client updateClient(Integer user_id, ClientDTO clientDTO){
        Client existingClient = clientRepo.findByUserId(user_id).orElse(null);

        if(existingClient != null){
            existingClient.setFName(clientDTO.getFName());
            existingClient.setLName(clientDTO.getLName());
            existingClient.setDob(clientDTO.getDob());
            existingClient.setGender(clientDTO.getGender());
            existingClient.setEmail(clientDTO.getEmail());
            existingClient.setPhone(clientDTO.getPhone());
            existingClient.setAddress(clientDTO.getAddress());
            existingClient.setCity(clientDTO.getCity());
            existingClient.setDistrict(clientDTO.getDistrict());
            existingClient.setZip(clientDTO.getZip());
            existingClient.setEmName1(clientDTO.getEmName1());
            existingClient.setEmPhone1(clientDTO.getEmPhone1());
            existingClient.setEmName2(clientDTO.getEmName2());
            existingClient.setEmPhone2(clientDTO.getEmPhone2());
            existingClient.setEmName3(clientDTO.getEmName3());
            existingClient.setEmPhone3(clientDTO.getEmPhone3());
            return clientRepo.save(existingClient);
        }
        return null; //client not found
    }

    public String updateProfilePhoto(Integer user_id, MultipartFile profilePhoto) {
        // Find the client by user_id
        Client existingClient = clientRepo.findByUserId(user_id).orElse(null);

        if (existingClient != null) {
            // Delete the existing profile photo if it exists
            if (existingClient.getProfilePhotoPath() != null) {
                Path existingPhotoPath = Paths.get(profilePhotoUploadPath, existingClient.getProfilePhotoPath());
                try {
                    Files.deleteIfExists(existingPhotoPath);
                } catch (IOException e) {
                    e.printStackTrace(); // Handle the exception if necessary
                }
            }

            // Handle the new profile photo
            if (profilePhoto != null && !profilePhoto.isEmpty()) {
                try {
                    // Save the new profile photo to a local file
                    String fileName = System.currentTimeMillis() + "_" + profilePhoto.getOriginalFilename();
                    Path filePath = Paths.get(profilePhotoUploadPath, fileName);
                    Files.copy(profilePhoto.getInputStream(), filePath, StandardCopyOption.REPLACE_EXISTING);

                    // Set the new profile photo path in the database
                    existingClient.setProfilePhotoPath(fileName);

                    // Save the updated client to update the profile photo path
                    clientRepo.save(existingClient);

                    return fileName; // Return the new profile photo path
                } catch (IOException e) {
                    e.printStackTrace(); // Handle the exception
                }
            }
        }

        return null; // Client not found or profile photo not updated
    }


    public boolean deleteClient(Integer clientId){
        Client existingClient = clientRepo.findById(clientId).orElse(null);

        if (existingClient != null ){
            clientRepo.delete(existingClient);
            return true; //client Deleted
        }
        return false; //client not deleted
    }
}