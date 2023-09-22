package com.mindtalk.Backend.repo.client;

import com.mindtalk.Backend.entity.client.ClientNoteEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ClientNoteRepo extends JpaRepository<ClientNoteEntity, Integer> {
}
