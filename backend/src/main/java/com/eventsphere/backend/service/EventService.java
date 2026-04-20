package com.eventsphere.backend.service;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.List;

import com.eventsphere.backend.exception.NotFoundException;
import com.eventsphere.backend.model.Event;
import org.springframework.stereotype.Service;

@Service
public class EventService {

    private final List<Event> events = List.of(
        new Event(
            1L,
            "Tech Summit 2026",
            "Conference",
            "Bangalore Convention Center",
            LocalDate.of(2026, 5, 18),
            LocalTime.of(10, 0),
            799,
            "A one-day technology conference with talks on AI, cloud, and modern app development.",
            List.of("Keynote Session", "AI Workshop", "Startup Panel", "Networking"),
            List.of(
                new Event.TicketType("General Admission", 799),
                new Event.TicketType("VIP Pass", 1499)
            )
        ),
        new Event(
            2L,
            "Indie Music Night",
            "Concert",
            "City Arena, Jaipur",
            LocalDate.of(2026, 5, 18),
            LocalTime.of(19, 30),
            1199,
            "A curated evening of live performances, food stalls, and premium seating.",
            List.of("Live Band", "DJ Fusion", "Acoustic Set", "Guest Singer"),
            List.of(
                new Event.TicketType("General Admission", 1199),
                new Event.TicketType("VIP Pass", 2499)
            )
        ),
        new Event(
            3L,
            "City Marathon Expo",
            "Sports",
            "Central Ground, Delhi",
            LocalDate.of(2026, 5, 22),
            LocalTime.of(6, 0),
            499,
            "A marathon expo and race-day event for runners, families, and fitness lovers.",
            List.of("Warm-up Zone", "Expo Stalls", "Run Kit Pickup", "Finish Line Booth"),
            List.of(
                new Event.TicketType("Runner Entry", 499),
                new Event.TicketType("Expo Pass", 299)
            )
        )
    );

    public List<Event> findAll() {
        return events;
    }

    public Event findById(Long id) {
        return events.stream()
                .filter(event -> event.id().equals(id))
                .findFirst()
                .orElseThrow(() -> new NotFoundException("Event not found: " + id));
    }
}
