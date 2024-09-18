package com.service;

import com.entity.Client;
import com.repo.ClientRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ClientService {

    @Autowired
    private ClientRepo clientRepository;

    // Save a client to the database
    public Client saveClient(Client client) {
        return clientRepository.save(client);
    }

    // Get all clients
    public List<Client> getAllClients() {
        return clientRepository.findAll();
    }

    // Get client by clientId
    public Client getClientByClientId(String clientId) {
        return clientRepository.findByClientId(clientId);
    }
    
    // Delete client by clientId
    public void deleteClientByClientId(String clientId) {
        Client client = clientRepository.findByClientId(clientId);
        if (client != null) {
            clientRepository.delete(client);
        } else {
            // Handle the case where the client is not found
            throw new RuntimeException("Client with ID " + clientId + " not found");
        }
    }
    
    // update client by clientId
    public Client updateClientByClientId(String clientId, Client updatedClient) {
        Client existingClient = clientRepository.findByClientId(clientId);
        if (existingClient != null) {
            // Update fields with the values from updatedClient
            existingClient.setClientName(updatedClient.getClientName());
            existingClient.setContactInfo(updatedClient.getContactInfo());
            existingClient.setReceivedDate(updatedClient.getReceivedDate());
            existingClient.setInventoryReceived(updatedClient.getInventoryReceived());
            existingClient.setReportIssue(updatedClient.getReportIssue());
            existingClient.setClientNotes(updatedClient.getClientNotes());
            existingClient.setAssignedTechnician(updatedClient.getAssignedTechnician());
            existingClient.setEstimatedAmount(updatedClient.getEstimatedAmount());
            existingClient.setDeadline(updatedClient.getDeadline());
            existingClient.setStatus(updatedClient.getStatus());
            
            // Save the updated client
            return clientRepository.save(existingClient);
        } else {
            throw new RuntimeException("Client with ID " + clientId + " not found");
        }
    }

}


