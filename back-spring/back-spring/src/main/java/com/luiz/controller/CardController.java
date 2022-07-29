package com.luiz.controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.luiz.model.Card;
import com.luiz.repository.CardRepository;

import lombok.AllArgsConstructor;

@RestController
@RequestMapping("/api/cards")
@AllArgsConstructor
public class CardController {

    private final CardRepository cardRepository;

    @GetMapping
    public List<Card> list(){
        return cardRepository.findAll();
    }
    
}
