package com.mindtalk.Backend.controller.client;

import com.mindtalk.Backend.entity.ChargeRequest;
import com.mindtalk.Backend.service.StripeService;
import com.stripe.exception.StripeException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/payment")
public class CheckoutController {
    @Autowired
    private StripeService stripeService;

    @PostMapping("/complete")
    public ResponseEntity<String> completePayment(@RequestBody ChargeRequest chargerequest) {
        try {
            String chargeId = String.valueOf(stripeService.charge(chargerequest));
            if (chargeId != null) {
                return new ResponseEntity<>(chargeId, HttpStatus.OK);
            } else {
                return new ResponseEntity<>("Please check the credit card details entered", HttpStatus.BAD_REQUEST);
            }
        } catch (StripeException e) {
            // Handle StripeException here, return an appropriate response or log the error.
            return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

}
