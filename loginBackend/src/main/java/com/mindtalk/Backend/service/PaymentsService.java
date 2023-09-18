package com.mindtalk.Backend.service;

import com.mindtalk.Backend.dto.client.PaymentDTO;
import com.mindtalk.Backend.entity.Payments;
import com.mindtalk.Backend.repo.PaymentsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PaymentsService {
    @Autowired
    private PaymentsRepository paymentsRepository;

    public Payments createPayment(PaymentDTO paymentDTO) {
        // Use Stripe to process the payment here

        Payments payments = new Payments();
        payments.setPaymentType(paymentDTO.getPaymentType());
        payments.setTimestamp(paymentDTO.getTimestamp());
        payments.setUserId(paymentDTO.getUserId());
        payments.setAmount(paymentDTO.getAmount());

        return paymentsRepository.save(payments);
    }
}
