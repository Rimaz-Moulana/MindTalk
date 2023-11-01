package com.mindtalk.Backend.repo;

import com.mindtalk.Backend.entity.Appointments;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface AppointmentRepository extends JpaRepository<Appointments, Integer> {
    List<Appointments> findByUserId(Integer userId);

    List<Integer> findUserIdsByCounsellorId(Integer counsellorId);

    List<Appointments> findByCounsellorId(Integer counsellorId);

    Optional<Appointments> findTop1ByUserIdOrderByAppointmentDateDescTimeSlotDesc(Integer userId);

}
