package com.luiz.service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.luiz.model.Client;
import com.luiz.repository.ClientRepository;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class ClientService {
    
    private ClientRepository clientRepository;

    public Client create(Client client){
        return clientRepository.save(client);
    }

    public List<Client> list(){
        return clientRepository.findAll();
    }

    public Optional<Client> findOne(Long id){
        return clientRepository.findById(id);
    }

    public void remove(Long id){
        clientRepository.deleteById(id);
    }
}
