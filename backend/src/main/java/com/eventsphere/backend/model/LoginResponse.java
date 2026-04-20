package com.eventsphere.backend.model;

public record LoginResponse(
        String token,
        String email,
        String role
) {}
