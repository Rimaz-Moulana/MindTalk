package com.javacorner.admin.service.impl;

import com.javacorner.admin.dao.ProfessionalCounselorDao;
import com.javacorner.admin.dto.ProfessionalCounselorDTO;
import com.javacorner.admin.dto.VolunteerCounselorDTO;
import com.javacorner.admin.entity.Moderator;
import com.javacorner.admin.entity.ProfessionalCounselor;
import com.javacorner.admin.entity.User;
import com.javacorner.admin.mapper.ProfessionalCounselorMapper;
import com.javacorner.admin.service.ProfessionalCounserlorService;
import com.javacorner.admin.service.UserService;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;

import javax.persistence.EntityNotFoundException;
import java.util.List;
import java.util.stream.Collectors;

public class ProfessionalCounselorServiceImpl implements ProfessionalCounserlorService {
    ProfessionalCounserlorService professionalCounserlorService;

    ProfessionalCounselorDTO professionalCounselorDTO;

    ProfessionalCounselorDao professionalCounselorDao;
    UserService userService;

    ProfessionalCounselorMapper professionalCounselorMapper;

    @Override
    public ProfessionalCounselor loadProfessionalCounselorById(Long PcounselorId) {
        return professionalCounselorDao.findById(PcounselorId).orElseThrow( () -> new EntityNotFoundException("ProfessionalCounselor with ID" + PcounselorId + " not found"));
    }

    @Override
    public Page<ProfessionalCounselorDTO> loadProfessionalCounselorByName(String name, int page, int size) {
        PageRequest pageRequest = PageRequest.of(page, size);
        Page<ProfessionalCounselor> professionalCounselorsPage = professionalCounselorDao.findProfessionalCounselorsByName(name,pageRequest);
        return new PageImpl<>(professionalCounselorsPage.getContent().stream().map(professionalCounselor -> professionalCounselorMapper.fromProfessionalCounselor(professionalCounselor)).collect(Collectors.toList()), pageRequest,professionalCounselorsPage.getTotalElements());
    }

    @Override
    public ProfessionalCounselorDTO loadProfessionalCounselorByEmail(String email) {
        return professionalCounselorMapper.fromProfessionalCounselor(professionalCounselorDao.findProfessionalCounselorByEmail(email));
    }

    @Override
    public ProfessionalCounselorDTO createProfessionalCounselor(ProfessionalCounselorDTO professionalCounselorDTO) {
        User user = userService.createUser(moderatorDTO.getUser().getEmail(), moderatorDTO.getUser().getPassword());
        userService.assignRoleToUser(user.getEmail(), "Moderator");
        Moderator moderator = moderatorMapper.fromModeratorDTO(moderatorDTO);
        moderator.setUser(user);
        Moderator savedModerator = moderatorDao.save(moderator);
        return moderatorMapper.fromModerator(savedModerator);
    }

    @Override
    public ProfessionalCounselorDTO updateProfessionalCounselor(ProfessionalCounselorDTO professionalCounselorDTO) {
        Moderator loadedModerator = loadModeratorById(moderatorDTO.getModeratorId());
        Moderator moderator = moderatorMapper.fromModeratorDTO(moderatorDTO);
        moderator.setUser(loadedModerator.getUser());
        Moderator updateModerator = moderatorDao.save(moderator);
        return moderatorMapper.fromModerator(updateModerator);
    }

    @Override
    public List<ProfessionalCounselorDTO> fetchProdessionalCounselor() {
        return professionalCounselorDao.findAll().stream().map(professionalCounselor -> professionalCounselorMapper.fromProfessionalCounselor(professionalCounselor)).collect(Collectors.toList());
    }

    @Override
    public void removeProfessionalCounselor(Long PcounselorId) {
        professionalCounselorDao.deleteById(PcounselorId);
    }
}
