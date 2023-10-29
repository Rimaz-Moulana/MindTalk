package com.mindtalk.Backend.controller.client;

import com.mindtalk.Backend.dto.AppointmentDTO;
import com.mindtalk.Backend.dto.AppointmentRequestsDTO;
import com.mindtalk.Backend.entity.Appointments;
import com.mindtalk.Backend.service.AppointmentRequestsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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
            Appointments appointments = appointmentRequestsDTO.getAppointments();
            Boolean requested = appointmentRequestsDTO.getRequested();
            Boolean accepted = appointmentRequestsDTO.getAccepted();
            appointmentRequestsService.createAppointmentRequest(requestId, appointments, requested, accepted);

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
}
