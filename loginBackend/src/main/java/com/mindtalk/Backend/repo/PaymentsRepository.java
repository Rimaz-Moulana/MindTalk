package com.mindtalk.Backend.repo;

import com.mindtalk.Backend.entity.Payments;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface PaymentsRepository extends JpaRepository <Payments, Integer> {
    List<Payments> findByUserId(Integer userId);
}
