package com.mindtalk.Backend.repo;

import com.mindtalk.Backend.entity.ChatUser;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ChatUserRepository extends JpaRepository<ChatUser, Integer> {
    List<ChatUser> findAllByUserRole(String userRole);
}
