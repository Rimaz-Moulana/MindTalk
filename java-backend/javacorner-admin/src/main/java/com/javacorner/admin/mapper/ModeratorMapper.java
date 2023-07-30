package com.javacorner.admin.mapper;

import com.javacorner.admin.dto.ModeratorDTO;
import com.javacorner.admin.model.Moderator;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;

@Service
public class ModeratorMapper {
    public ModeratorDTO fromModerator(Moderator moderator) {
        ModeratorDTO moderatorDTO = new ModeratorDTO();
        BeanUtils.copyProperties(moderator, moderatorDTO);
        return moderatorDTO;
    }

    public Moderator fromModeratorDTO(ModeratorDTO moderatorDTO) {
        Moderator moderator = new Moderator();
        BeanUtils.copyProperties(moderatorDTO, moderator);
        return moderator;
    }
}
