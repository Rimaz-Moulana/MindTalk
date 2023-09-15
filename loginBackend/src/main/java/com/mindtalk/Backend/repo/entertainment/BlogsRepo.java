package com.mindtalk.Backend.repo.entertainment;

//import org.springframework.data.jpa.repository.JpaRepository;

import com.mindtalk.Backend.entity.entertainment.BlogsEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BlogsRepo extends JpaRepository<BlogsEntity, Long> {
}
