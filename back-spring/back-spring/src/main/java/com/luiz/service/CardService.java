package com.luiz.service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.luiz.model.Card;
import com.luiz.repository.CardRepository;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class CardService {
    
    private CardRepository cardRepository;

    public Card create(Card card){
        return cardRepository.save(card);
    }

    public List<Card> list(){
        return cardRepository.findAll();
    }

    public Optional<Card> findOne(Long id){
        return cardRepository.findById(id);
    }

    public void remove(Long id){
        cardRepository.deleteById(id);
    }
}
