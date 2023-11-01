package com.mindtalk.Backend.repo;

import com.mindtalk.Backend.entity.Client;
import com.mindtalk.Backend.entity.Test;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface ClientRepo extends JpaRepository<Client, Integer> {
    public Optional<Client> findByUserId(Integer user_id);

    public List<Client> findAllByUserId(Integer userId);
}