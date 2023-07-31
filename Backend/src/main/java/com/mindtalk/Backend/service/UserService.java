package com.mindtalk.Backend.service;

import com.mindtalk.Backend.dto.UserDTO;
import com.mindtalk.Backend.entity.User;
import com.mindtalk.Backend.repo.UserRepo;
import jakarta.transaction.Transactional;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@Transactional
public class UserService {
    @Autowired
    private UserRepo userRepo;
    @Autowired
    private  ModelMapper modelMapper;

    public UserDTO saveUser(UserDTO userDTO) {
        User user = modelMapper.map(userDTO, User.class);

        // Save the User entity to the database
        userRepo.save(user);

        // Convert the saved User entity back to UserDTO (if needed)
        return modelMapper.map(user, UserDTO.class);
    }
}
