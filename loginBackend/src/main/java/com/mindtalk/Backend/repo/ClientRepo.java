package com.mindtalk.Backend.repo;

import com.mindtalk.Backend.entity.Client;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface ClientRepo extends JpaRepository<Client, Integer> {
    public Optional<Client> findByUserId(Integer user_id);
}