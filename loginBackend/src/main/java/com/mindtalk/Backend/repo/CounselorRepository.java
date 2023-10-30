package com.mindtalk.Backend.repo;

import com.mindtalk.Backend.entity.Counsellor;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface CounselorRepository extends JpaRepository<Counsellor,Long> {
    public Optional<Counsellor> findByUserId(Integer user_id);
}
