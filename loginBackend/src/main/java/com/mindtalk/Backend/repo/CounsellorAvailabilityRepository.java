package com.mindtalk.Backend.repo;

import com.mindtalk.Backend.entity.CounsellorAvailability;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CounsellorAvailabilityRepository extends JpaRepository<CounsellorAvailability, Integer> {
    List<CounsellorAvailability> findByCounsellorId(Integer CounsellorId);
}
