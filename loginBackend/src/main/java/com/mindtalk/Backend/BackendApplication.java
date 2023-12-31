package com.mindtalk.Backend;


import com.mindtalk.Backend.controller.auth.RegisterRequest;
import com.mindtalk.Backend.service.AuthenticationService;
import org.modelmapper.ModelMapper;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;

import static com.mindtalk.Backend.entity.Role.*;


@ComponentScan(basePackages = "com.mindtalk.Backend.service")
@ComponentScan(basePackages = "com.mindtalk.Backend.controller")
@SpringBootApplication
public class BackendApplication {

    public static void main(String[] args) {
        SpringApplication.run(BackendApplication.class, args);
    }

    @Bean
    public ModelMapper modelMapper(){
        return new ModelMapper();
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
                    .username("Moderator")
                    .email("moderator@mail.com")
                    .password("password")
                    .role(MODERATOR)
                    .build();
            System.out.println("Moderator token: " + service.register(moderator).getAccessToken());

            var client = RegisterRequest.builder()
                    .username("Client")
                    .email("client@mail.com")
                    .password("password")
                    .role(CLIENT)
                    .build();
            System.out.println("Client token: " + service.register(client).getAccessToken());

            var counsellor = RegisterRequest.builder()
                    .username("Counsellor")
                    .email("counsellor@mail.com")
                    .password("password")
                    .role(COUNSELLOR)
                    .build();
            System.out.println("Counsellor token: " + service.register(counsellor).getAccessToken());

        };
    }
}
