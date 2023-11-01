package com.mindtalk.Backend.controller.counsellor;

import com.mindtalk.Backend.dto.AppointmentDTO;
import com.mindtalk.Backend.dto.ExternalBookedDTO;
import com.mindtalk.Backend.service.ExternalBookedService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.List;

@RestController
@RequestMapping("api/v1/external-booked")
public class ExternalBookedController {

    @Autowired
    private ExternalBookedService externalBookedService;

    private final List<String> allowedOrigins;

    @Autowired
    public ExternalBookedController(@Value("#{'${app.cors.allowed-origins}'.split(',')}") List<String> allowedOrigins) {
        this.allowedOrigins = allowedOrigins;
    }

    @PostMapping("/add")
    @CrossOrigin(origins = "${app.cors.allowed-origins}", allowCredentials = "true")
    public ResponseEntity<String> addBookedSlots(@RequestBody List<ExternalBookedDTO> externalBookedDTOList) {
        try {
            for (ExternalBookedDTO externalBookedDTO : externalBookedDTOList) {
                Integer counsellorId = externalBookedDTO.getCounsellorId();
                LocalDate date = externalBookedDTO.getDate();
                LocalTime startTime = externalBookedDTO.getStartTime();
                LocalTime endTime = externalBookedDTO.getEndTime();

                externalBookedService.addBookedSlots(counsellorId, date, startTime, endTime);
            }

            return ResponseEntity.ok("ExternalBooking added successfully");
        } catch (Exception e) {
            return ResponseEntity.status(500).body("An error occurred");
        }
    }


    @GetMapping("/get-booked-slots/{counsellorId}")
    @CrossOrigin(origins = "${app.cors.allowed-origins}", allowCredentials = "true")
    public List<AppointmentDTO> getBookedSlotsForCounsellors(@PathVariable Integer counsellorId) {
        return externalBookedService.getBookedSlotsForCounsellors(counsellorId);
    }
}
