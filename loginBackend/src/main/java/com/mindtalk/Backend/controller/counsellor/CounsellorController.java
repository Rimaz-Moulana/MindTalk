package com.mindtalk.Backend.controller.counsellor;

import com.mindtalk.Backend.entity.Counsellor;
import com.mindtalk.Backend.repo.CounsellorRepository;
import com.mindtalk.Backend.service.CounsellorInfoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequestMapping("/api")
public class CounsellorController {

    @Autowired
    private CounsellorInfoService counsellorInfoService;

    @PostMapping("/register")
    public ResponseEntity<String> registerCounsellor(@ModelAttribute Counsellor counsellor, @RequestParam("licenseImage")MultipartFile licenseImage){
        try {
            counsellorInfoService.register(counsellor, licenseImage);
            return ResponseEntity.ok("registration successful");
        }catch (Exception e){
            return ResponseEntity.status(500).body("An error");
        }
    }

}
