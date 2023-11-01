package com.mindtalk.Backend.repo;

import com.mindtalk.Backend.entity.ExternalBooked;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ExternalBookedRepository extends JpaRepository<ExternalBooked , Integer> {
    List<ExternalBooked> findByCounsellorId(Integer counsellorId);
}
