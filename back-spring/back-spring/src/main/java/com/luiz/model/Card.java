package com.luiz.model;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.UniqueConstraint;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.Data;

@Data
@Entity
public class Card {
    
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @JsonProperty("id")
    private Long id;

    @Column(length = 200, nullable = false)
    private String name;

    @Column(length = 150)
    private String type;

    @JsonIgnore
    @ManyToMany
    @JoinTable(
        name="CardsClients",
        uniqueConstraints = @UniqueConstraint(columnNames = {"id_client", "id_card"}),
        joinColumns = @JoinColumn(name = "id_card"),
        inverseJoinColumns = @JoinColumn(name = "id_client")
    )
    private List<Client> clientList;
}
