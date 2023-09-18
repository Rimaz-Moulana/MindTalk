package com.mindtalk.Backend.controller.client;

import com.mindtalk.Backend.dto.client.PaymentDTO;
import com.mindtalk.Backend.entity.Payments;
import com.mindtalk.Backend.service.PaymentsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/v1/payments")
public class PaymentsController {

    @Autowired
    private  PaymentsService paymentsService;

    @PostMapping("/create")
    public ResponseEntity<Payments> createPayment(@RequestBody PaymentDTO paymentDTO) {
        Payments payment = paymentsService.createPayment(paymentDTO);
        return ResponseEntity.ok(payment);
    }
}
