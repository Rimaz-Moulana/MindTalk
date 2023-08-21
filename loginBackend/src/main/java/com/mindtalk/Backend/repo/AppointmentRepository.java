package com.mindtalk.Backend.repo;

import com.mindtalk.Backend.entity.Appointments;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AppointmentRepository extends JpaRepository<Appointments, Integer> {
}
