package com.mindtalk.Backend.controller.counsellor;


import com.mindtalk.Backend.service.WithdrawService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/withdraws")
public class WithdrawController {
    @Autowired
    private WithdrawService withdrawService;

    private final List<String> allowedOrigins;

    @Autowired
    public WithdrawController(@Value("#{'${app.cors.allowed-origins}'.split(',')}") List<String> allowedOrigins) {
        this.allowedOrigins = allowedOrigins;
    }

    @GetMapping("/sumWithdraws/{counsellorId}")
    @CrossOrigin(origins = "${app.cors.allowed-origins}", allowCredentials = "true")
    public ResponseEntity<Integer> sumWithdrawsForCounselors(@PathVariable Integer counsellorId) {
        try {
            Integer sumWithdraw = withdrawService.sumWithdrawForCounselors(counsellorId);
            return ResponseEntity.ok(sumWithdraw);
        } catch (Exception e) {
            return ResponseEntity.status(500).body(-1); // You can choose an appropriate error code or response here.
        }
    }
}
