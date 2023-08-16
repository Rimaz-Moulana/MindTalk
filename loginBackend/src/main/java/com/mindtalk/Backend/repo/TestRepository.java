package com.mindtalk.Backend.repo;

import com.mindtalk.Backend.entity.Test;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TestRepository extends JpaRepository<Test, Integer> {
    // Add any custom query methods if needed
}
