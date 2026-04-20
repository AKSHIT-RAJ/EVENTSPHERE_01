package com.eventsphere.backend.service;

import java.nio.charset.StandardCharsets;
import java.util.Base64;

import com.eventsphere.backend.model.LoginRequest;
import com.eventsphere.backend.model.LoginResponse;
import org.springframework.stereotype.Service;

@Service
public class AuthService {

    public LoginResponse login(LoginRequest request) {
        if (request.email() == null || request.email().isBlank() || request.password() == null || request.password().isBlank()) {
            throw new IllegalArgumentException("Email and password are required");
        }

        String raw = request.email() + ":eventsphere-demo";
        String token = Base64.getEncoder().encodeToString(raw.getBytes(StandardCharsets.UTF_8));
        return new LoginResponse(token, request.email(), "USER");
    }
}
