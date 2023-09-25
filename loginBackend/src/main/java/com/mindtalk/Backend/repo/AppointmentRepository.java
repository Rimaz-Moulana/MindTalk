package com.mindtalk.Backend.repo;

import com.mindtalk.Backend.entity.Appointments;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface AppointmentRepository extends JpaRepository<Appointments, Integer> {
    List<Appointments> findByUserId(Integer userId);

    List<Appointments> findByCounsellorId(Integer counsellorId);
}
