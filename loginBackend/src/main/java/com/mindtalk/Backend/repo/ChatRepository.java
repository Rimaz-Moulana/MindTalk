package com.mindtalk.Backend.repo;

import com.mindtalk.Backend.entity.Chat;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ChatRepository extends JpaRepository<Chat, Integer> {
}
