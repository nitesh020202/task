package com.controller;

import com.entity.Client;
import com.service.ClientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/clients")
public class ClientController {

    @Autowired
    private ClientService clientService;

    // Save client data
    @PostMapping
    public ResponseEntity<Client> saveClient(@RequestBody Client client) {
        Client savedClient = clientService.saveClient(client);
        return ResponseEntity.ok(savedClient);
    }

    // Fetch all clients
    @GetMapping
    public ResponseEntity<List<Client>> getAllClients() {
        List<Client> clients = clientService.getAllClients();
        return ResponseEntity.ok(clients);
    }

    // Fetch client by clientId
    @GetMapping("/{clientId}")
    public ResponseEntity<Client> getClientByClientId(@PathVariable String clientId) {
        Client client = clientService.getClientByClientId(clientId);
        return ResponseEntity.ok(client);
    }
    
    @DeleteMapping("/{clientId}")
    public ResponseEntity<String> deleteClientByClientId(@PathVariable String clientId) {
        try {
            clientService.deleteClientByClientId(clientId);
            return ResponseEntity.ok("Client with ID " + clientId + " deleted successfully");
        } catch (RuntimeException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
        }
    }
    
    @PutMapping("/{clientId}")
    public ResponseEntity<Client> updateClientByClientId(
            @PathVariable String clientId,
            @RequestBody Client updatedClient) {
        try {
            // Call service to update client
            Client updatedClientResponse = clientService.updateClientByClientId(clientId, updatedClient);
            return ResponseEntity.ok(updatedClientResponse);
        } catch (RuntimeException e) {
            // Handle the case where the client is not found
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        }
    }
    
    
}

