package com.mindtalk.Backend.service;

//import com.example.tests.dto.ClientDTO;
//import com.example.tests.entity.Client;
//import com.example.tests.repo.ClientRepo;
import com.mindtalk.Backend.dto.ClientDTO;
import com.mindtalk.Backend.entity.Client;
import com.mindtalk.Backend.repo.ClientRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ClientService {

    @Autowired
    private ClientRepo clientRepo;

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

        return clientRepo.save(client);

    }

    public Client getClientById(Integer clientId) {
        return clientRepo.findById(clientId).orElse(null);
    }

    public List<Client> getAllClient(){
        return clientRepo.findAll();
    }

    public Client updateClient(Integer clientId, ClientDTO clientDTO){
        Client existingClient = clientRepo.findById(clientId).orElse(null);

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

    public boolean deleteClient(Integer clientId){
        Client existingClient = clientRepo.findById(clientId).orElse(null);

        if (existingClient != null ){
            clientRepo.delete(existingClient);
            return true; //client Deleted
        }
        return false; //client not deleted
    }
}
