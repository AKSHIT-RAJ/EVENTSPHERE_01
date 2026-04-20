package com.eventsphere.backend.model;

import java.time.LocalDateTime;

public record Booking(
        Long id,
        Long eventId,
        String eventTitle,
        String ticketType,
        int quantity,
        int unitPrice,
        int totalAmount,
        String userName,
        String userEmail,
        LocalDateTime bookedAt
) {}
