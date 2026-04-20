package com.eventsphere.backend.service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.concurrent.CopyOnWriteArrayList;
import java.util.concurrent.atomic.AtomicLong;

import com.eventsphere.backend.model.Booking;
import com.eventsphere.backend.model.BookingRequest;
import org.springframework.stereotype.Service;

@Service
public class BookingService {

    private final AtomicLong sequence = new AtomicLong(1);
    private final List<Booking> bookings = new CopyOnWriteArrayList<>();

    public Booking save(BookingRequest request) {
        int total = request.unitPrice() * request.quantity();
        Booking booking = new Booking(
                sequence.getAndIncrement(),
                request.eventId(),
                request.eventTitle(),
                request.ticketType(),
                request.quantity(),
                request.unitPrice(),
                total,
                request.userName(),
                request.userEmail(),
                LocalDateTime.now()
        );
        bookings.add(booking);
        return booking;
    }

    public List<Booking> findByEmail(String email) {
        if (email == null || email.isBlank()) {
            return bookings;
        }
        return bookings.stream()
                .filter(booking -> booking.userEmail().equalsIgnoreCase(email))
                .toList();
    }
}
