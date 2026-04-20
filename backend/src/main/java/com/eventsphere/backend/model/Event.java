package com.eventsphere.backend.model;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.List;

public record Event(
        Long id,
        String title,
        String category,
        String venue,
        LocalDate date,
        LocalTime time,
        int price,
        String description,
        List<String> lineup,
        List<TicketType> ticketTypes
) {
    public record TicketType(String name, int price) {}
}
