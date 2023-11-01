package com.mindtalk.Backend.controller.counsellor;

import com.mindtalk.Backend.dto.CounsellorAvailabilityDTO;
import com.mindtalk.Backend.service.CounsellorAvailabilityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalTime;
import java.util.List;

@RestController
@RequestMapping("api/v1/counsellor-availability")
public class CounsellorAvailabilityController {
    @Autowired
    private CounsellorAvailabilityService counsellorAvailabilityService;

    private final List<String> allowedOrigins;

    @Autowired
    public CounsellorAvailabilityController(@Value("#{'${app.cors.allowed-origins}'.split(',')}") List<String> allowedOrigins) {
        this.allowedOrigins = allowedOrigins;
    }

    @PostMapping("/add-days")
    @CrossOrigin(origins = "${app.cors.allowed-origins}", allowCredentials = "true")
    public ResponseEntity<String> addAvailabilityDays(@RequestBody List<CounsellorAvailabilityDTO> counsellorAvailabilityDTOList) {
        try {
            for (CounsellorAvailabilityDTO counsellorAvailabilityDTO : counsellorAvailabilityDTOList) {
                Integer CounsellorId = counsellorAvailabilityDTO.getCounsellorId();
                Integer Day = counsellorAvailabilityDTO.getDay();
                LocalTime tiimeslot1_S=counsellorAvailabilityDTO.getTimeslot1_S();
                LocalTime tiimeslot1_E=counsellorAvailabilityDTO.getTimeslot1_E();
                LocalTime tiimeslot2_S=counsellorAvailabilityDTO.getTimeslot2_S();
                LocalTime tiimeslot2_E=counsellorAvailabilityDTO.getTimeslot2_E();
                LocalTime tiimeslot3_S=counsellorAvailabilityDTO.getTimeslot3_S();
                LocalTime tiimeslot3_E=counsellorAvailabilityDTO.getTimeslot3_E();

                counsellorAvailabilityService.addAvailabilityDays(CounsellorId,Day,tiimeslot1_S,tiimeslot1_E,tiimeslot2_S,tiimeslot2_E,tiimeslot3_S,tiimeslot3_E);
            }

            return ResponseEntity.ok("Availability Slots added successfully");
        } catch (Exception e) {
            return ResponseEntity.status(500).body("An error occurred");
        }
    }


    @GetMapping("/get-available-days/{counsellorId}")
    @CrossOrigin(origins = "${app.cors.allowed-origins}", allowCredentials = "true")
    public List<CounsellorAvailabilityDTO> getAvailableDateForCounsellors(@PathVariable Integer counsellorId) {
        return counsellorAvailabilityService.getAvailableDateForCounsellors(counsellorId);
    }

}
