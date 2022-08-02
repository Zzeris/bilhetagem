package com.luiz;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import com.luiz.model.Card;
import com.luiz.repository.CardRepository;

@SpringBootApplication
public class BackSpringApplication {

	public static void main(String[] args) {
		SpringApplication.run(BackSpringApplication.class, args);
	}

	@Bean
	CommandLineRunner initDatabase(CardRepository cardRepository) {
		return args -> {
			cardRepository.deleteAll();

			Card c = new Card();
			c.setName("jose");
			c.setType("estudante");
			
			cardRepository.save(c);
		};
	}
}
