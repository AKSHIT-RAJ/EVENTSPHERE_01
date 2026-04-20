package com.eventsphere.backend.model;

import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

public record BookingRequest(
        @NotNull Long eventId,
        @NotBlank String eventTitle,
        @NotBlank String ticketType,
        @Min(1) int quantity,
        @Min(0) int unitPrice,
        @NotBlank String userName,
        @NotBlank String userEmail
) {}
