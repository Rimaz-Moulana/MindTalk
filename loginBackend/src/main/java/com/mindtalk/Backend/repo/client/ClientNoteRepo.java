package com.mindtalk.Backend.repo.client;

import com.mindtalk.Backend.entity.client.ClientNoteEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ClientNoteRepo extends JpaRepository<ClientNoteEntity, Integer> {
    public List<ClientNoteEntity> findAllByClientIdAndCounsellorId(Integer client_id, Integer counsellor_id);
}
