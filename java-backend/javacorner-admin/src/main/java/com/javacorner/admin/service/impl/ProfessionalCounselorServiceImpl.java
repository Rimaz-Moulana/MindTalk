package com.javacorner.admin.service.impl;

import com.javacorner.admin.dao.ProfessionalCounselorDao;
import com.javacorner.admin.dto.ProfessionalCounselorDTO;
import com.javacorner.admin.model.*;
import com.javacorner.admin.mapper.ProfessionalCounselorMapper;
import com.javacorner.admin.service.ProfessionalCounselorService;
import com.javacorner.admin.service.UserService;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityNotFoundException;
import java.util.stream.Collectors;

@Service
@Transactional
public class ProfessionalCounselorServiceImpl implements ProfessionalCounselorService {
    private ProfessionalCounselorMapper professionalCounselorMapper;
    private ProfessionalCounselorDao professionalCounselorDao;
    private UserService userService;
    @Override
    public ProfessionalCounselor loadProfessionalCounselorById(Long professionalId) {
        return professionalCounselorDao.findById(professionalId).orElseThrow(() -> new EntityNotFoundException("Professional Counselor with ID " + professionalId + " not found"));
    }

    @Override
    public Page<ProfessionalCounselorDTO> loadProfessionalCounselorsByName(String name, int page, int size) {
        PageRequest pageRequest = PageRequest.of(page, size);
        Page<ProfessionalCounselor> professionalCounselorsPage = professionalCounselorDao.findProfessionalCounselorsByName(name, pageRequest);
        return new PageImpl<>(professionalCounselorsPage.getContent().stream().map(professionalCounselor -> professionalCounselorMapper.fromProfessionalCounselor(professionalCounselor)).collect(Collectors.toList()), pageRequest, professionalCounselorsPage.getTotalElements());
    }

    @Override
    public ProfessionalCounselorDTO loadProfessionalCounselorByEmail(String email) {
        return professionalCounselorMapper.fromProfessionalCounselor(professionalCounselorDao.findProfessionalCounselorByEmail(email));
    }

    @Override
    public ProfessionalCounselorDTO createProfessionalCounselor(ProfessionalCounselorDTO professionalCounselorDTO) {
        User user = userService.createUser(professionalCounselorDTO.getUser().getEmail(), professionalCounselorDTO.getUser().getPassword());
        userService.assignRoleToUser(user.getEmail(), "ProfessionalCounselor");
        ProfessionalCounselor professionalCounselor = professionalCounselorMapper.fromProfessionalCounselorDTO(professionalCounselorDTO);
        professionalCounselor.setUser(user);
        ProfessionalCounselor savedProfessionalCounselor = professionalCounselorDao.save(professionalCounselor);
        return professionalCounselorMapper.fromProfessionalCounselor(savedProfessionalCounselor);
    }

    @Override
    public ProfessionalCounselorDTO updateProfessionalCounselor(ProfessionalCounselorDTO professionalCounselorDTO) {
        ProfessionalCounselor loadedProfessionalCounselor = loadProfessionalCounselorById(professionalCounselorDTO.getProfessionalId());
        ProfessionalCounselor professionalCounselor = professionalCounselorMapper.fromProfessionalCounselorDTO(professionalCounselorDTO);
        professionalCounselor.setUser(loadedProfessionalCounselor.getUser());
        ProfessionalCounselor updatedProfessionalCounselor = professionalCounselorDao.save(professionalCounselor);
        return professionalCounselorMapper.fromProfessionalCounselor(updatedProfessionalCounselor);
    }

    @Override
    public void removeProfessionalCounselor(Long professionalId) {
        professionalCounselorDao.deleteById(professionalId);
    }
}
