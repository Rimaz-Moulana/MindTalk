package com.mindtalk.Backend.service;

import com.mindtalk.Backend.entity.Test;
import com.mindtalk.Backend.entity.User;
import com.mindtalk.Backend.repo.TestRepository;
import com.mindtalk.Backend.repo.UserRepository;
import org.springframework.data.domain.Sort;
import org.springframework.data.domain.Sort.Order;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

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

//    public Test getTestByUserId(Integer user_id){
//        return testRepository.findByUserId(user_id).orElse(null);
//    }

    public List<Test> getTestsResultsByUserId(Integer user_id) {
        // Use the userId to retrieve all records with the given userId
        List<Test> testResults = testRepository.findAllByUserId(user_id);

        // Sort the test results by timestamp in descending order
        testResults.sort((test1, test2) -> test2.getTimestamp().compareTo(test1.getTimestamp()));

        return testResults;
    }
    public List<Test> getTestResultsByUserIdsSorted(List<Integer> userIds) {
        Sort sortByTimestampDesc = Sort.by(Sort.Order.desc("timestamp"));
        return testRepository.findByUserIdIn(userIds, sortByTimestampDesc);
    }

    public List<Test> getRecentTestResultsByUserIds(List<Integer> userIds) {
        List<Test> recentTestResults = new ArrayList<>();
        for (Integer userId : userIds) {
            List<Test> userTestResults = testRepository.findByUserIdOrderByTimestampDesc(userId);
            if (userTestResults.size() >= 2) {
                recentTestResults.add(userTestResults.get(0)); // Most recent test result
                recentTestResults.add(userTestResults.get(1)); // Second most recent test result
            }
        }
        return recentTestResults;
    }


}
