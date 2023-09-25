package com.mindtalk.Backend.service;

import com.mindtalk.Backend.entity.Withdraw;
import com.mindtalk.Backend.repo.WithdrawRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@Service
public class WithdrawService {
    @Autowired
    private WithdrawRepository withdrawRepository;
    @Autowired
    private ModelMapper modelMapper;

    public void createWithdrawal( Integer counsellorId, Integer amount, String receiver_name, String bank_name, LocalDateTime timeline) {
        Withdraw withdraw = new Withdraw();
        withdraw.setCounsellorId(counsellorId);
        withdraw.setAmount(amount);
        withdraw.setReceiver_name(receiver_name);
        withdraw.setBank_name(bank_name);
        withdraw.setTimeline(timeline);
        withdrawRepository.save(withdraw);
    }

    public Integer sumWithdrawForCounselors(Integer counsellorId) {
        return withdrawRepository.sumWithdrawForCounselors(counsellorId);
    }
}
