package com.javacorner.admin.service;

import com.javacorner.admin.dto.ModeratorDTO;
import com.javacorner.admin.model.Moderator;
import org.springframework.data.domain.Page;

public interface ModeratorService {
    Moderator loadModeratorById(Long moderatorId);

    Page<ModeratorDTO> loadModeratorsByName(String name, int page, int size);

    ModeratorDTO loadModeratorByEmail(String email);

    ModeratorDTO createModerator(ModeratorDTO moderatorDTO);

    ModeratorDTO updateModerator(ModeratorDTO moderatorDTO);

    void removeModerator(Long moderatorId);
}