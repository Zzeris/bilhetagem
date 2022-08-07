package com.luiz.model;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.Data;

@Data
@Entity
public class Client {
    
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @JsonProperty("id")
    private Long id;

    @Column(length = 200, nullable = false)
    private String name;

    @Column(length = 200)
    private String email;

    @Column(length = 100)
    private String password;

    @OneToMany(mappedBy = "client", cascade = CascadeType.ALL)
    private List<Card> cardList;
}
