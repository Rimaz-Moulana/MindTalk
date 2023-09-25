package com.mindtalk.Backend.service;

import com.mindtalk.Backend.dto.AppointmentDTO;
import com.mindtalk.Backend.dto.PaymentsDTO;
import com.mindtalk.Backend.entity.Appointments;
import com.mindtalk.Backend.entity.Payments;
import com.mindtalk.Backend.repo.PaymentsRepository;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PaymentsService {
    @Autowired
    private PaymentsRepository paymentsRepository;
    @Autowired
    private ModelMapper modelMapper;

    public void createPayment(Long payment_id, Integer userId, Integer amount, String payment_type) {
        Payments payments = new Payments();
        payments.setPayment_id(payment_id);
        payments.setUserId(userId);
        payments.setAmount(amount);
        payments.setPayment_type(payment_type);
        paymentsRepository.save(payments);
    }

    public List<PaymentsDTO> getPaymentsForCounsellors(Integer userId) {
        List<Payments> payments = paymentsRepository.findByUserId(userId);
        return modelMapper.map(payments, new TypeToken<List<PaymentsDTO>>(){}.getType());
    }
}
