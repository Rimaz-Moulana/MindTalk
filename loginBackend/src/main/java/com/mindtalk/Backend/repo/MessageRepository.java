package com.mindtalk.Backend.repo;

import com.mindtalk.Backend.entity.Message;
import com.mindtalk.Backend.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface MessageRepository extends JpaRepository<Message,Integer> {
    //List<Message> findAllBySenderAndReceiver(User sender, User receiver);
}
