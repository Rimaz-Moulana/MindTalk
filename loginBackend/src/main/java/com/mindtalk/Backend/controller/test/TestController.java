package com.mindtalk.Backend.controller.test;

import com.mindtalk.Backend.dto.test.TestDTO;
import com.mindtalk.Backend.entity.Test;
import com.mindtalk.Backend.service.TestService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/test")
public class TestController {


    @Autowired
    private TestService testService;



    private final List<String> allowedOrigins;

    @Autowired
    public TestController(@Value("#{'${app.cors.allowed-origins}'.split(',')}") List<String> allowedOrigins) {
        this.allowedOrigins = allowedOrigins;
    }

    @PostMapping("/send-test-results")
    @CrossOrigin(origins = "${app.cors.allowed-origins}", allowCredentials = "true")
    public ResponseEntity<String> sendTestResults(@RequestBody TestDTO testDTO) {
        int userId = testDTO.getUserId();
        int score = testDTO.getScore();

        testService.saveTestResult(userId, score);

        String userEmail = testService.getEmail(userId);

        String subject = "Test Results";
        String content = "Your test results have been saved successfully.";


        return ResponseEntity.ok("Test results saved and email sent successfully");
    }

//    @GetMapping("/{user_id}")
//    @CrossOrigin(origins = "${app.cors.allowed-origins}", allowCredentials = "true")
//    public ResponseEntity<Test> getTestByUserId(@PathVariable Integer user_id){
//        Test test = testService.getTestByUserId(user_id);
//
//        if (test != null) {
//            return ResponseEntity.ok(test);
//        } else {
//            return ResponseEntity.notFound().build();
//        }
//    }

    @GetMapping("/all/{user_id}")
    @CrossOrigin(origins = "${app.cors.allowed-origins}", allowCredentials = "true")
    public ResponseEntity<List<Test>> getTestsResultsByUserId(@PathVariable Integer user_id){
        List<Test> allTestsResults = testService.getTestsResultsByUserId(user_id);

        if (!allTestsResults.isEmpty()) {
            return ResponseEntity.ok(allTestsResults);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
    @GetMapping("/sorted-results/{userIds}")
    @CrossOrigin(origins = "${app.cors.allowed-origins}", allowCredentials = "true")
    public ResponseEntity<List<Test>> getTestResultsByUserIds(@PathVariable List<Integer> userIds) {
        List<Test> testResults = testService.getTestResultsByUserIdsSorted(userIds);
        return ResponseEntity.ok(testResults);
    }


    @GetMapping("/latest-results/{userIds}")
    @CrossOrigin(origins = "${app.cors.allowed-origins}", allowCredentials = "true")
    public ResponseEntity<List<Test>> getRecentTestResultsByUserIds(@PathVariable List<Integer> userIds) {
        List<Test> testResults = testService.getLastTwoTestResultsForUser(userIds);
        return ResponseEntity.ok(testResults);
    }

}
