package com.mindtalk.Backend.controller.counsellor;

import com.mindtalk.Backend.dto.Counsellor.CounsellorDTO;

import com.mindtalk.Backend.service.CounsellorInfoService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/counsellor/details")
//@CrossOrigin("http://127.0.0.1:5173")
public class CounsellorController {

    @Autowired
    private CounsellorInfoService counsellorInfoService;

    @PostMapping("/add")
    @CrossOrigin(origins = "http://127.0.0.1:5173",allowCredentials = "true")
    public ResponseEntity<String> registerCounsellor(@RequestBody CounsellorDTO counsellorDTO){
        try{
        Long id = counsellorDTO.getId();
        String firstname = counsellorDTO.getFirstname();
        String lastname = counsellorDTO.getLastname();
        String email = counsellorDTO.getEmail();
        Long licenseNo = counsellorDTO.getLicenseNo();
        String licenseImage = counsellorDTO.getLicenseImage();

        counsellorInfoService.register(id,firstname,lastname,email,licenseNo,licenseImage);

        return ResponseEntity.ok("adding succesfull");
        }catch (Exception e){
            return ResponseEntity.status(500).body("An error");
        }
    }
    @GetMapping("/getCounsellor")
    @CrossOrigin(origins = "http://127.0.0.1:5173",allowCredentials = "true")
    public List<CounsellorDTO> getCounsellors(){
        return counsellorInfoService.getAllCounsellors();
    }
}
