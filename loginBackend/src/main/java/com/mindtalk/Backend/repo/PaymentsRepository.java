package com.mindtalk.Backend.repo;

import com.mindtalk.Backend.entity.Payments;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface PaymentsRepository extends JpaRepository <Payments, Integer> {
    List<Payments> findByUserId(Integer userId);

    @Query("SELECT SUM(p.amount) FROM Payments p WHERE p.counsellorId = :counsellorId")
    Integer sumAmountsForCounselors(@Param("counsellorId") Integer counsellorId);

    @Query("SELECT SUM(p.amount) FROM Payments p WHERE p.counsellorId = :counsellorId AND MONTH(p.timeline) = MONTH(CURRENT_DATE())")
    Integer sumAmountsForCounselorsCurrentMonth(@Param("counsellorId") Integer counsellorId);


}
