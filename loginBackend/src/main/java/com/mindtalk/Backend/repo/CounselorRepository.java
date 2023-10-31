package com.mindtalk.Backend.repo;

import com.mindtalk.Backend.entity.Counsellor;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.Optional;

public interface CounselorRepository extends JpaRepository<Counsellor, Long> {
    @Query("SELECT c.id FROM Counsellor c WHERE c.user.id = :userId")
    Integer findCounsellorIdByUserId(@Param("userId") Integer userId);

    public Optional<Counsellor> findByUserId(Integer user_id);
}
