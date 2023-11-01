package com.mindtalk.Backend.controller.client;

import com.mindtalk.Backend.dto.AppointmentDTO;
import com.mindtalk.Backend.dto.AppointmentRequestsDTO;
import com.mindtalk.Backend.dto.ClientDTO;
import com.mindtalk.Backend.entity.Appointments;
import com.mindtalk.Backend.service.AppointmentRequestsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.List;

@RestController
@RequestMapping("/api/client/appointment-requests")
public class AppointmentRequestsController {
    @Autowired
    private AppointmentRequestsService appointmentRequestsService;

    private final List<String> allowedOrigins;

    @Autowired
    public AppointmentRequestsController(@Value("#{'${app.cors.allowed-origins}'.split(',')}") List<String> allowedOrigins) {
        this.allowedOrigins = allowedOrigins;
    }
    @PostMapping("/create-request")
    @CrossOrigin(origins = "${app.cors.allowed-origins}", allowCredentials = "true")
    public ResponseEntity<String> createRequest(@RequestBody AppointmentRequestsDTO appointmentRequestsDTO) {
        try {
            Integer requestId = appointmentRequestsDTO.getRequestId();
            Integer userId = appointmentRequestsDTO.getUserId();
            Boolean requested = appointmentRequestsDTO.getRequested();
            Boolean accepted = appointmentRequestsDTO.getAccepted();
            Integer counsellorId = appointmentRequestsDTO.getCounsellorId();
            LocalDate date = appointmentRequestsDTO.getDate();
            LocalTime timeSlot = LocalTime.parse(appointmentRequestsDTO.getTimeSlot());
            appointmentRequestsService.createAppointmentRequest(requestId, userId, requested, accepted, counsellorId, date, timeSlot);

            return ResponseEntity.ok("Appointment Request added successfully");
        } catch (Exception e) {
            return ResponseEntity.status(500).body("An error occurred");
        }
    }

    @GetMapping("/get-requests")
    @CrossOrigin(origins = "${app.cors.allowed-origins}", allowCredentials = "true")
    public List<AppointmentRequestsDTO> getRequests() {
        return appointmentRequestsService.getAllAppointmentRequests();
    }
    @GetMapping("/get-requests/{userId}")
    @CrossOrigin(origins = "${app.cors.allowed-origins}", allowCredentials = "true")
    public List<AppointmentRequestsDTO> getRequestsForUser(@PathVariable Integer userId) {
        return appointmentRequestsService.getRequestsForUser(userId);
    }
    @GetMapping("/get-requests/counsellors/{counsellorId}")
    @CrossOrigin(origins = "${app.cors.allowed-origins}", allowCredentials = "true")
    public List<AppointmentRequestsDTO> getAppointmentsForCounsellors(@PathVariable Integer counsellorId) {
        return appointmentRequestsService.getRequestsForCounsellors(counsellorId);
    }

    @PostMapping("/accept-appointment-request/{requestId}")
    @CrossOrigin(origins = "http://127.0.0.1:5173", allowCredentials = "true")
    public ResponseEntity<String> acceptAppointmentRequest(@PathVariable Integer requestId) {
        try {
            appointmentRequestsService.acceptAppointmentRequest(requestId);
            return ResponseEntity.ok("Appointment Request accepted successfully");
        } catch (Exception e) {
            return ResponseEntity.status(500).body("An error occurred");
        }
    }

    @PostMapping("/reject-appointment-request/{requestId}")
    @CrossOrigin(origins = "http://127.0.0.1:5173", allowCredentials = "true")
    public ResponseEntity<String> rejectAppointmentRequest(@PathVariable Integer requestId) {
        try {
            appointmentRequestsService.rejectAppointmentRequest(requestId);
            return ResponseEntity.ok("Appointment Request rejected successfully");
        } catch (Exception e) {
            return ResponseEntity.status(500).body("An error occurred");
        }
    }
    @DeleteMapping("/delete-appointment-request/{requestId}")
    @CrossOrigin(origins = "${app.cors.allowed-origins}", allowCredentials = "true")
    public ResponseEntity<String> deleteAppointmentRequest(@PathVariable Integer requestId) {
        try {
            appointmentRequestsService.deleteAppointmentRequestById(requestId);
            return ResponseEntity.ok("Appointment Request deleted successfully");
        } catch (Exception e) {
            return ResponseEntity.status(500).body("An error occurred");
        }
    }



}
