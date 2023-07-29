package com.javacorner.admin.service;

import com.javacorner.admin.dto.VolunteerCounselorDTO;
import com.javacorner.admin.model.VolunteerCounselor;
import org.springframework.data.domain.Page;

public interface VolunteerCounselorService {
    VolunteerCounselor loadVolunteerCounselorById(Long volunteerId);
//    VolunteerCounselor loadVolunteerCounselorByName(String name, int size, int page);
    Page<VolunteerCounselorDTO> loadVolunteerCounselorsByName(String name, int page, int size);
    VolunteerCounselorDTO loadVolunteerCounselorByEmail(String email);

    VolunteerCounselorDTO createVolunteerCounselor(VolunteerCounselorDTO volunteerCounselorDTO);

    VolunteerCounselorDTO updateVolunteerCounselor(VolunteerCounselorDTO volunteerCounselorDTO);

    void removeVolunteerCounselor(Long volunteerId);
}
