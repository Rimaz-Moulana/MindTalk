package com.mindtalk.Backend.service;

import com.mindtalk.Backend.entity.User;
import com.mindtalk.Backend.repo.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    public String getUsernameByUserId(Integer userId) {
        User user = userRepository.findById(userId).orElse(null);
        if (user != null) {
            return user.gettingUsername();
        }
        return null; // Handle the case when the user is not found
    }

}
