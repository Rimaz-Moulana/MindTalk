package com.javacorner.admin.service.impl;

import com.javacorner.admin.dao.ModeratorDao;
import com.javacorner.admin.dto.ModeratorDTO;

import com.javacorner.admin.entity.*;
import com.javacorner.admin.mapper.ModeratorMapper;
import com.javacorner.admin.service.ModeratorService;
import com.javacorner.admin.service.UserService;
import org.springframework.boot.Banner;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;

import javax.persistence.EntityNotFoundException;
import java.util.List;
import java.util.stream.Collectors;


public class ModeratorServiceImpl implements ModeratorService {

    ModeratorService moderatorService;
    ModeratorDao moderatorDao;
    ModeratorMapper moderatorMapper;

    UserService userService;

    public ModeratorServiceImpl(ModeratorService moderatorService, ModeratorDao moderatorDao, ModeratorMapper moderatorMapper) {
        this.moderatorService = moderatorService;
        this.moderatorDao = moderatorDao;
        this.moderatorMapper = moderatorMapper;
    }

    @Override
    public Moderator loadModeratorById(Long moderatorId) {
        return moderatorDao.findById(moderatorId).orElseThrow(()-> new EntityNotFoundException("Moderator with ID" + moderatorId + " not found"));
    }

    @Override
    public Page<ModeratorDTO> loadModeratorByName(String name, int page, int size) {
        PageRequest pageRequest = PageRequest.of(page, size);
        Page<Moderator> moderatorsPage = moderatorDao.findModeratorsByName(name, pageRequest);
        return new PageImpl<>(moderatorsPage.getContent().stream().map(moderator -> moderatorMapper.fromModerator(moderator)).collect(Collectors.toList()), pageRequest,moderatorsPage.getTotalElements());
    }

    @Override
    public ModeratorDTO loadModeratorByEmail(String email) {
        return moderatorMapper.fromModerator(moderatorDao.findModeratorByEmail(email));
    }

    @Override
    public ModeratorDTO createModerator(ModeratorDTO moderatorDTO) {
        User user = userService.createUser(moderatorDTO.getUser().getEmail(), moderatorDTO.getUser().getPassword());
        userService.assignRoleToUser(user.getEmail(), "Moderator");
        Moderator moderator = moderatorMapper.fromModeratorDTO(moderatorDTO);
        moderator.setUser(user);
        Moderator savedModerator = moderatorDao.save(moderator);
        return moderatorMapper.fromModerator(savedModerator);
    }

    @Override
    public ModeratorDTO updateModerator(ModeratorDTO moderatorDTO) {
        Moderator loadedModerator = loadModeratorById(moderatorDTO.getModeratorId());
        Moderator moderator = moderatorMapper.fromModeratorDTO(moderatorDTO);
        moderator.setUser(loadedModerator.getUser());
        Moderator updateModerator = moderatorDao.save(moderator);
        return moderatorMapper.fromModerator(updateModerator);
    }

    @Override
    public List<ModeratorDTO> fetchModerators() {
        return moderatorDao.findAll().stream().map(moderator -> moderatorMapper.fromModerator(moderator)).collect(Collectors.toList());
    }

    @Override
    public void removeModerator(Long moderatorId) {
        moderatorDao.deleteById(moderatorId);
    }
}
