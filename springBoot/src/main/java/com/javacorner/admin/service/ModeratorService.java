package com.javacorner.admin.service;

import com.javacorner.admin.dao.ModeratorDao;
import com.javacorner.admin.dto.ModeratorDTO;
import com.javacorner.admin.dto.ProfessionalCounselorDTO;
import com.javacorner.admin.dto.VolunteerCounselorDTO;
import com.javacorner.admin.entity.Moderator;
import com.javacorner.admin.entity.VolunteerCounselor;
import org.springframework.data.domain.Page;

import java.util.List;

public interface ModeratorService {
    Moderator loadModeratorById(Long moderatorId);
    Page<ModeratorDTO> loadModeratorByName(String name, int page, int size);
    ModeratorDTO loadModeratorByEmail(String email);
    ModeratorDTO createModerator(ModeratorDTO moderatorDTO);
    ModeratorDTO updateModerator(ModeratorDTO moderatorDTO);

    List<ModeratorDTO> fetchModerators();

    void removeModerator(Long moderatorId);
}
