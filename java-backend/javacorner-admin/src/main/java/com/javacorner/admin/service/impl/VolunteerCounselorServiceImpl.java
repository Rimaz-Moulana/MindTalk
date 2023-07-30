package com.javacorner.admin.service.impl;

import com.javacorner.admin.dao.VolunteerCounselorDao;
import com.javacorner.admin.dto.VolunteerCounselorDTO;
import com.javacorner.admin.model.*;
import com.javacorner.admin.mapper.VolunteerCounselorMapper;
import com.javacorner.admin.service.UserService;
import com.javacorner.admin.service.VolunteerCounselorService;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityNotFoundException;
import java.util.stream.Collectors;

@Service
@Transactional
public class VolunteerCounselorServiceImpl implements VolunteerCounselorService {
    private VolunteerCounselorDao volunteerCounselorDao;
    private VolunteerCounselorMapper volunteerCounselorMapper;
    private UserService userService;
    @Override
    public VolunteerCounselor loadVolunteerCounselorById(Long volunteerId) {
        return volunteerCounselorDao.findById(volunteerId).orElseThrow(() -> new EntityNotFoundException("Volunteer Counselor with ID " + volunteerId + " not found"));
    }

    @Override
    public Page<VolunteerCounselorDTO> loadVolunteerCounselorsByName(String name, int page, int size) {
        PageRequest pageRequest = PageRequest.of(page, size);
        Page<VolunteerCounselor> volunteerCounselorsPage = volunteerCounselorDao.findVolunteerCounserlorsByName(name, pageRequest);
        return new PageImpl<>(volunteerCounselorsPage.getContent().stream().map(volunteerCounselor -> volunteerCounselorMapper.fromVolunteerCounselor(volunteerCounselor)).collect(Collectors.toList()), pageRequest, volunteerCounselorsPage.getTotalElements());
    }

    @Override
    public VolunteerCounselorDTO loadVolunteerCounselorByEmail(String email) {
        return volunteerCounselorMapper.fromVolunteerCounselor(volunteerCounselorDao.findVolunteerCounserlorByEmail(email));
    }

    @Override
    public VolunteerCounselorDTO createVolunteerCounselor(VolunteerCounselorDTO volunteerCounselorDTO) {
        User user = userService.createUser(volunteerCounselorDTO.getUser().getEmail(), volunteerCounselorDTO.getUser().getPassword());
        userService.assignRoleToUser(user.getEmail(), "VolunteerCounselor");
        VolunteerCounselor volunteerCounselor = volunteerCounselorMapper.fromVolunteerCounselorDTO(volunteerCounselorDTO);
        volunteerCounselor.setUser(user);
        VolunteerCounselor savedVolunteerCounselor = volunteerCounselorDao.save(volunteerCounselor);
        return volunteerCounselorMapper.fromVolunteerCounselor(savedVolunteerCounselor);
    }

    @Override
    public VolunteerCounselorDTO updateVolunteerCounselor(VolunteerCounselorDTO volunteerCounselorDTO) {
        VolunteerCounselor loadedVolunteerCounselor = loadVolunteerCounselorById(volunteerCounselorDTO.getVolunteerId());
        VolunteerCounselor volunteerCounselor = volunteerCounselorMapper.fromVolunteerCounselorDTO(volunteerCounselorDTO);
        volunteerCounselor.setUser(loadedVolunteerCounselor.getUser());
        VolunteerCounselor updatedVolunteerCounselor = volunteerCounselorDao.save(volunteerCounselor);
        return volunteerCounselorMapper.fromVolunteerCounselor(updatedVolunteerCounselor);
    }

    @Override
    public void removeVolunteerCounselor(Long volunteerId) {
        volunteerCounselorDao.deleteById(volunteerId);
    }
}
