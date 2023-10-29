package com.mindtalk.Backend.repo;

import com.mindtalk.Backend.entity.AppointmentRequests;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AppointmentRequestsRepository extends JpaRepository<AppointmentRequests, Integer> {
}
