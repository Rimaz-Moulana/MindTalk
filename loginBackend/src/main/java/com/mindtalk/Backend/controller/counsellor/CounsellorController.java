package com.mindtalk.Backend.controller.counsellor;

import com.mindtalk.Backend.entity.Counsellor;
import com.mindtalk.Backend.repo.CounsellorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class CounsellorController {
    private final CounsellorRepository counsellorRepository;

    @Autowired
    public CounsellorController(CounsellorRepository counsellorRepository) {
        this.counsellorRepository = counsellorRepository;
    }

    @PostMapping("/register")
    public ResponseEntity<String> registerCounsellor(@ModelAttribute Counsellor counsellor){
        Counsellor savedCounsellor = counsellorRepository.save(counsellor);
        return ResponseEntity.ok("User registered with ID:" + savedCounsellor.getId());
    }
}
