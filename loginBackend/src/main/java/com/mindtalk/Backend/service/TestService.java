package com.mindtalk.Backend.service;

import com.mindtalk.Backend.entity.Test;
import com.mindtalk.Backend.entity.User;
import com.mindtalk.Backend.repo.TestRepository;
import com.mindtalk.Backend.repo.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;

@Service
public class TestService {

    @Autowired
    private TestRepository testRepository;
    @Autowired
    private UserRepository userRepository;

    public void saveTestResult(Integer userId, int score) {
        Test test = new Test();
        test.setUserId(userId);
        test.setScore(score);
        test.setTimestamp(new Date()); // set the current timestamp

        testRepository.save(test);
    }

    public String getEmail(int userId) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("User not found"));

        return user.getEmail();
    }
}
