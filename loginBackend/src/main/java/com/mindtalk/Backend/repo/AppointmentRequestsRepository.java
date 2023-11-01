package com.mindtalk.Backend.repo;

import com.mindtalk.Backend.entity.AppointmentRequests;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface AppointmentRequestsRepository extends JpaRepository<AppointmentRequests, Integer> {
    List<AppointmentRequests> findByUserId(Integer userId);

    List<AppointmentRequests> findByCounsellorId(Integer counsellorId);
}
