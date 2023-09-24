package com.mindtalk.Backend.controller.counsellor;

import com.mindtalk.Backend.dto.AppointmentDTO;
import com.mindtalk.Backend.dto.CounsellorAvailabilityDTO;
import com.mindtalk.Backend.dto.ExternalBookedDTO;
import com.mindtalk.Backend.service.CounsellorAvailabilityService;
import com.mindtalk.Backend.service.ExternalBookedService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
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
                LocalDate Mon_D =counsellorAvailabilityDTO.getMon_D();
                LocalTime Mon_T = counsellorAvailabilityDTO.getMon_T();
                LocalDate Tue_D =counsellorAvailabilityDTO.getTue_D();
                LocalTime Tue_T = counsellorAvailabilityDTO.getTue_T();
                LocalDate Wed_D =counsellorAvailabilityDTO.getWed_D();
                LocalTime Wed_T = counsellorAvailabilityDTO.getWed_T();
                LocalDate Thur_D =counsellorAvailabilityDTO.getThur_D();
                LocalTime Thur_T = counsellorAvailabilityDTO.getThur_T();
                LocalDate Fri_D =counsellorAvailabilityDTO.getFri_D();
                LocalTime Fri_T = counsellorAvailabilityDTO.getFri_T();
                LocalDate Sat_D =counsellorAvailabilityDTO.getSat_D();
                LocalTime Sat_T = counsellorAvailabilityDTO.getSat_T();
                LocalDate Sun_D =counsellorAvailabilityDTO.getSun_D();
                LocalTime Sun_T = counsellorAvailabilityDTO.getSun_T();

                counsellorAvailabilityService.addAvailabilityDays(CounsellorId, Mon_D, Mon_T, Tue_D, Tue_T,Wed_D,Wed_T,
                        Thur_D,Thur_T,Fri_D,Fri_T,Sat_D,Sat_T,Sun_D,Sun_T);
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
