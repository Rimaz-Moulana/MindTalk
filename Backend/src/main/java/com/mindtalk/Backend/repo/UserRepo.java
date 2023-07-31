package com.mindtalk.Backend.repo;

import com.mindtalk.Backend.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepo extends JpaRepository<User, Integer> {
}
