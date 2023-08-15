package com.mindtalk.Backend.service;

import com.mindtalk.Backend.entity.Test;
import com.mindtalk.Backend.repo.TestRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;

@Service
public class TestService {

    @Autowired
    private TestRepository testRepository;

    public void saveTestResult(Integer userId, int score) {
        Test test = new Test();
        test.setUserId(userId);
        test.setScore(score);
        test.setTimestamp(new Date()); // You can set the current timestamp here

        testRepository.save(test);
    }
}
