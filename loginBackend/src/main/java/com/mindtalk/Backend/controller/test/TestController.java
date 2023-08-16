package com.mindtalk.Backend.controller.test;

import com.mindtalk.Backend.dto.test.TestDTO;
import com.mindtalk.Backend.service.TestService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/test")
public class TestController {

    @Autowired
    private TestService testService;

    @PostMapping("/send-test-results")
    @CrossOrigin(origins = "http://localhost:5173", allowCredentials = "true")
    public ResponseEntity<String> sendTestResults(@RequestBody TestDTO testDTO) {
        int userId = testDTO.getUserId();
        int score = testDTO.getScore();

        testService.saveTestResult(userId, score);

        return ResponseEntity.ok("Test results saved successfully");
    }
}
