package com.luiz.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.luiz.model.Card;

@Repository
public interface CardRepository extends JpaRepository<Card, Long> {
    
}
