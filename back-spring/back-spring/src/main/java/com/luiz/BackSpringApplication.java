package com.luiz;

import org.modelmapper.ModelMapper;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import com.luiz.model.Card;
import com.luiz.repository.CardRepository;

@SpringBootApplication
public class BackSpringApplication {

	@Bean
	public ModelMapper modelmapper(){
		ModelMapper modelMapper = new ModelMapper();
		modelMapper.getConfiguration().setSkipNullEnabled(true);
		return modelMapper;
	}

	public static void main(String[] args) {
		SpringApplication.run(BackSpringApplication.class, args);
	}

	@Bean
	CommandLineRunner initDatabase(CardRepository cardRepository) {
		return args -> {
			cardRepository.deleteAll();

			//Card c = new Card();
			//c.setName("jose");
			//c.setType("comum");
			
			//cardRepository.save(c);
		};
	}
}
