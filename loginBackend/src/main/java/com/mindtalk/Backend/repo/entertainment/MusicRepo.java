package com.mindtalk.Backend.repo.entertainment;

import com.mindtalk.Backend.entity.entertainment.Music;
import org.springframework.data.jpa.repository.JpaRepository;
public interface MusicRepo extends JpaRepository<Music, Integer> {
}