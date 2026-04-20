package com.eventsphere.backend.controller;

import java.util.List;
import java.util.Map;

import com.eventsphere.backend.model.Booking;
import com.eventsphere.backend.model.BookingRequest;
import com.eventsphere.backend.service.BookingService;
import jakarta.validation.Valid;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/bookings")
public class BookingController {

    private final BookingService bookingService;

    public BookingController(BookingService bookingService) {
        this.bookingService = bookingService;
    }

    @PostMapping
    public Booking createBooking(@Valid @RequestBody BookingRequest request) {
        return bookingService.save(request);
    }

    @GetMapping
    public List<Booking> getBookings(@RequestParam(required = false) String email) {
        return bookingService.findByEmail(email);
    }
}
