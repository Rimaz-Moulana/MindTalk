package com.mindtalk.Backend.service;

import com.mindtalk.Backend.controller.auth.AuthenticationRequest;
import com.mindtalk.Backend.controller.auth.AuthenticationResponse;
import com.mindtalk.Backend.controller.auth.RegisterRequest;
import com.mindtalk.Backend.entity.Role;
import com.mindtalk.Backend.entity.User;
import com.mindtalk.Backend.model.Token;
import com.mindtalk.Backend.model.TokenType;
import com.mindtalk.Backend.repo.TokenRepository;
import com.mindtalk.Backend.repo.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.HashMap;

@Service
@RequiredArgsConstructor
public class AuthenticationService {

    private final UserRepository repository;

    private final TokenRepository tokenRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;

    public AuthenticationResponse register(RegisterRequest request) {
        var user = User.builder()
                .firstname(request.getFirstname())
                .lastname(request.getLastname())
                .email(request.getEmail())
                .password(passwordEncoder.encode(request.getPassword()))
                .role(Role.USER)
                .build();
        var savedUser = repository.save(user);
        var jwtToken =jwtService.generateToken(new HashMap<>(),user);
        saveUserToken(savedUser, jwtToken);
        return AuthenticationResponse.builder()
                .token(jwtToken)
                .build();
    }

    private void saveUserToken(User user, String jwtToken) {
        var token = Token.builder()
                .user(user)
                .token(jwtToken)
                .tokenType(TokenType.BEARER)
                .revoked(false)
                .expired(false)
                .build();
        tokenRepository.save(token);
    }

    public AuthenticationResponse authenticate(AuthenticationRequest request) {
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        request.getEmail(),
                        request.getPassword()
                )

        );
        var user = repository.findByEmail(request.getEmail())
                .orElseThrow();
        var jwtToken =jwtService.generateToken(new HashMap<>(),user);
        saveUserToken(user, jwtToken);
        return AuthenticationResponse.builder()
                .token(jwtToken)
                .build();
    }
}
