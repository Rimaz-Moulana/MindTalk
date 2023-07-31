package com.mindtalk.Backend.repo;

import com.mindtalk.Backend.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Integer> {

    default Optional<User> findByEmail(String email){
    return null;
    }
}
