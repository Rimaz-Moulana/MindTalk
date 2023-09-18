package com.mindtalk.Backend.repo;

import com.mindtalk.Backend.entity.Payments;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PaymentsRepository extends JpaRepository<Payments, Integer> {
}
