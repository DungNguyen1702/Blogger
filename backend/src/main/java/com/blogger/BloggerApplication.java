package com.blogger;

import io.github.cdimascio.dotenv.Dotenv;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class BloggerApplication {

	public static void main(String[] args) {
		Dotenv dotenv = Dotenv.configure().load();

		// Set .env variables to System properties
		dotenv.entries().forEach(entry -> System.setProperty(entry.getKey(), entry.getValue()));
		SpringApplication.run(BloggerApplication.class, args);
	}

}
