package com.javacorner.admin.service;

import com.javacorner.admin.dto.ProfessionalCounselorDTO;
import com.javacorner.admin.dto.VolunteerCounselorDTO;
import com.javacorner.admin.entity.VolunteerCounselor;
import org.springframework.data.domain.Page;

import java.util.List;

public interface VolunteerCounselorService {
    VolunteerCounselor loadVolunteerCounselorById(Long VcounselorId);
    Page<VolunteerCounselorDTO> loadVolunteerCounselorByName(String name, int page, int size);
    VolunteerCounselorDTO loadVolunteerCounselorByEmail(String email);
    VolunteerCounselorDTO createVolunteerCounselor(VolunteerCounselorDTO volunteerCounselorDTO);
    VolunteerCounselorDTO updateVolunteerCounselor(VolunteerCounselorDTO volunteerCounselorDTO);
    List<VolunteerCounselorDTO> fetchVolunteerCounselor();
    void removeVolunteerCounselor(Long VcounselorId);

}
