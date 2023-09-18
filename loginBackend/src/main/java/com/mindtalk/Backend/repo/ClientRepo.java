package com.mindtalk.Backend.repo;

import com.mindtalk.Backend.entity.Client;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ClientRepo extends JpaRepository<Client, Integer> {
}
