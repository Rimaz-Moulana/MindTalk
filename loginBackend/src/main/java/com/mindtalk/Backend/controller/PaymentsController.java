package com.mindtalk.Backend.controller;

import com.mindtalk.Backend.dto.PaymentsDTO;
import com.mindtalk.Backend.service.PaymentsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.List;
@RestController
@RequestMapping("/api/v1/payments")
public class PaymentsController {
    @Autowired
    private PaymentsService paymentsService;

    private final List<String> allowedOrigins;

    @Autowired
    public PaymentsController(@Value("#{'${app.cors.allowed-origins}'.split(',')}") List<String> allowedOrigins) {
        this.allowedOrigins = allowedOrigins;
    }

    @PostMapping("/create")
    @CrossOrigin(origins = "${app.cors.allowed-origins}", allowCredentials = "true")
    public ResponseEntity<String> createPayment(@RequestBody PaymentsDTO paymentsDTO) {
        try {
            Long payment_id=paymentsDTO.getPayment_id();

            Integer counsellorId=paymentsDTO.getCounsellorId();

            Integer userId=paymentsDTO.getUserId();

            Integer amount=paymentsDTO.getAmount();

            String payment_type=paymentsDTO.getPayment_type();

            LocalDateTime timeline = paymentsDTO.getTimeline();


            paymentsService.createPayment(payment_id, counsellorId,userId, amount, payment_type, timeline);

            return ResponseEntity.ok("Appointment added successfully");
        } catch (Exception e) {
            return ResponseEntity.status(500).body("An error occurred");
        }
    }

    @GetMapping("/get/{userId}")
    @CrossOrigin(origins = "${app.cors.allowed-origins}", allowCredentials = "true")
    public List<PaymentsDTO> getPaymentsForCounsellors(@PathVariable Integer userId) {
        return paymentsService.getPaymentsForCounsellors(userId);
    }

    @GetMapping("/sumAmounts/{counsellorId}")
    @CrossOrigin(origins = "${app.cors.allowed-origins}", allowCredentials = "true")
    public ResponseEntity<Integer> sumAmountsForCounselors(@PathVariable Integer counsellorId) {
        try {
            Integer sumAmount = paymentsService.sumAmountsForCounselors(counsellorId);
            return ResponseEntity.ok(sumAmount);
        } catch (Exception e) {
            return ResponseEntity.status(500).body(-1); // You can choose an appropriate error code or response here.
        }
    }

    @GetMapping("/sumMonthlyAmounts/{counsellorId}")
    @CrossOrigin(origins = "${app.cors.allowed-origins}", allowCredentials = "true")
    public ResponseEntity<Integer> sumAmountsForCounselorsCurrentMonth(@PathVariable Integer counsellorId) {
        try {
            Integer sumMonthlyAmount = paymentsService.sumAmountsForCounselorsCurrentMonth(counsellorId);
            return ResponseEntity.ok(sumMonthlyAmount);
        } catch (Exception e) {
            return ResponseEntity.status(500).body(-1); // You can choose an appropriate error code or response here.
        }
    }


}
