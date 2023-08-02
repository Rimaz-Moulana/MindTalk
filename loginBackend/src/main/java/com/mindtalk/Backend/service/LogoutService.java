package com.mindtalk.Backend.service;

import com.mindtalk.Backend.repo.TokenRepository;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.security.web.authentication.logout.LogoutHandler;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class LogoutService implements LogoutHandler {

    private final TokenRepository tokenRepository;
    @Override
    public void logout(
            HttpServletRequest request,
            HttpServletResponse response,
            Authentication authentication
    ) {
        final String authHeader = request.getHeader("Authorization");
        final String jwt;
        if (authHeader == null ||!authHeader.startsWith("Bearer ")){
            return;
        }
        jwt = authHeader.substring(7);
        var storedTOKEN = tokenRepository.findByToken(jwt)
                .orElse(null);
        if (storedTOKEN !=null){
            storedTOKEN.setExpired(true);
            storedTOKEN.setRevoked(true);
            tokenRepository.save(storedTOKEN);
        }
    }
}
