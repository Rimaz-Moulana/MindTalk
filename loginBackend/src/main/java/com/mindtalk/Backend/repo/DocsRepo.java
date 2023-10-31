package com.mindtalk.Backend.repo;

import com.mindtalk.Backend.entity.Docs;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface DocsRepo extends JpaRepository<Docs, Integer> {
    public List<Docs> findAllByUserId(Integer userId);
}
