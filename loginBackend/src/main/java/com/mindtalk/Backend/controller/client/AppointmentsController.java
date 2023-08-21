package com.mindtalk.Backend.controller.client;

import com.mindtalk.Backend.dto.AppointmentDTO;
import com.mindtalk.Backend.service.AppointmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.List;

@RestController
@RequestMapping("/api/client/appointment")
public class AppointmentsController {

    @Autowired
    private AppointmentService appointmentService;

    @PostMapping("/create-appointment")
    @CrossOrigin(origins = "http://127.0.0.1:5173", allowCredentials = "true")
    public ResponseEntity<String> createAppointment(@RequestBody AppointmentDTO appointmentDTO) {
        try {
            // Extract the fields from appointmentDTO
            Integer userId = appointmentDTO.getUserId();
            Integer counsellorId = appointmentDTO.getCounsellorId();
            LocalDate appointmentDate = appointmentDTO.getDate();
            LocalTime timeSlot = LocalTime.parse(appointmentDTO.getTimeSlot());

            appointmentService.createAppointment(userId, counsellorId, appointmentDate, timeSlot);

            return ResponseEntity.ok("Appointment added successfully");
        } catch (Exception e) {
            return ResponseEntity.status(500).body("An error occurred");
        }
    }

    @GetMapping("/get-appointments")
    @CrossOrigin(origins = "http://127.0.0.1:5173", allowCredentials = "true")
    public List<AppointmentDTO> getAppointments() {
        return appointmentService.getAllAppointments();
    }
}