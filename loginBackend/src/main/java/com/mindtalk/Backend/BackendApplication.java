package com.mindtalk.Backend;


import com.mindtalk.Backend.controller.auth.RegisterRequest;
import com.mindtalk.Backend.service.AuthenticationService;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import static com.mindtalk.Backend.entity.Role.ADMIN;
import static com.mindtalk.Backend.entity.Role.MODERATOR;


@SpringBootApplication
public class BackendApplication {

    public static void main(String[] args) {
        SpringApplication.run(BackendApplication.class, args);
    }

    @Bean
    public CommandLineRunner commandLineRunner(
            AuthenticationService service
    ) {
        return args -> {
            var admin = RegisterRequest.builder()
                    .username("Admin")
                    .email("admin@mail.com")
                    .password("password")
                    .role(ADMIN)
                    .build();
            System.out.println("Admin token: " + service.register(admin).getAccessToken());

            var moderator = RegisterRequest.builder()
                    .username("Admin")
                    .email("moderator@mail.com")
                    .password("password")
                    .role(MODERATOR)
                    .build();
            System.out.println("Moderator token: " + service.register(moderator).getAccessToken());

        };
    }
}
