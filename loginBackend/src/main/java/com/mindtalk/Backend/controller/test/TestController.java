package com.mindtalk.Backend.controller.test;

import com.mindtalk.Backend.dto.test.TestDTO;
import com.mindtalk.Backend.service.EmailService;
import com.mindtalk.Backend.service.TestService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/test")
public class TestController {

    @Autowired
    private TestService testService;

    @Autowired
    private EmailService emailService;

    @PostMapping("/send-test-results")
    @CrossOrigin(origins = "http://localhost:5173", allowCredentials = "true")
    public ResponseEntity<String> sendTestResults(@RequestBody TestDTO testDTO) {
        int userId = testDTO.getUserId();
        int score = testDTO.getScore();

        testService.saveTestResult(userId, score);

        String userEmail = testService.getEmail(userId);

        String subject = "Test Results";
        String content = "Your test results have been saved successfully.";
        emailService.sendEmail(userEmail, subject, content);

        return ResponseEntity.ok("Test results saved and email sent successfully");
    }
}
