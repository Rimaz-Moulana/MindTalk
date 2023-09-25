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
                LocalTime Mon_S =counsellorAvailabilityDTO.getMon_S();
                LocalTime Mon_E = counsellorAvailabilityDTO.getMon_E();
                LocalTime Tue_S =counsellorAvailabilityDTO.getTue_S();
                LocalTime Tue_E = counsellorAvailabilityDTO.getTue_E();
                LocalTime Wed_S =counsellorAvailabilityDTO.getWed_S();
                LocalTime Wed_E = counsellorAvailabilityDTO.getWed_E();
                LocalTime Thur_S =counsellorAvailabilityDTO.getThur_S();
                LocalTime Thur_E = counsellorAvailabilityDTO.getThur_E();
                LocalTime Fri_S =counsellorAvailabilityDTO.getFri_S();
                LocalTime Fri_E = counsellorAvailabilityDTO.getFri_E();
                LocalTime Sat_S =counsellorAvailabilityDTO.getSat_S();
                LocalTime Sat_E = counsellorAvailabilityDTO.getSat_E();
                LocalTime Sun_S =counsellorAvailabilityDTO.getSun_S();
                LocalTime Sun_E = counsellorAvailabilityDTO.getSun_E();

                counsellorAvailabilityService.addAvailabilityDays(CounsellorId, Mon_S, Mon_E, Tue_S, Tue_E,Wed_S,Wed_E,
                        Thur_S,Thur_E,Fri_S,Fri_E,Sat_S,Sat_E,Sun_S,Sun_E);
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
