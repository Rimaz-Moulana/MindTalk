package com.mindtalk.Backend.repo;

import com.mindtalk.Backend.entity.Payments;
import com.mindtalk.Backend.entity.Withdraw;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface WithdrawRepository extends JpaRepository<Withdraw, Integer> {
    @Query("SELECT SUM(w.amount) FROM Withdraw w WHERE w.counsellorId = :counsellorId")
    Integer sumWithdrawForCounselors(@Param("counsellorId") Integer counsellorId);

}
