package com.javacorner.admin.mapper;

import com.javacorner.admin.dto.VolunteerCounselorDTO;
import com.javacorner.admin.model.VolunteerCounselor;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;

@Service
public class VolunteerCounselorMapper {
    public VolunteerCounselorDTO fromVolunteerCounselor(VolunteerCounselor volunteerCounselor) {
        VolunteerCounselorDTO volunteerCounselorDTO = new VolunteerCounselorDTO();
        BeanUtils.copyProperties(volunteerCounselor, volunteerCounselorDTO);
        return volunteerCounselorDTO;
    }

    public VolunteerCounselor fromVolunteerCounselorDTO(VolunteerCounselorDTO volunteerCounselorDTO) {
        VolunteerCounselor volunteerCounselor = new VolunteerCounselor();
        BeanUtils.copyProperties(volunteerCounselorDTO,  volunteerCounselor);
        return volunteerCounselor;
    }
}
