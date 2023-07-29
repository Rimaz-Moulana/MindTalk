package com.javacorner.admin.mapper;

import com.javacorner.admin.dto.ProfessionalCounselorDTO;
import com.javacorner.admin.dto.VolunteerCounselorDTO;
import com.javacorner.admin.entity.ProfessionalCounselor;
import com.javacorner.admin.entity.VolunteerCounselor;
import org.springframework.beans.BeanUtils;

public class VolunteerCounselorMapper {
    public VolunteerCounselorDTO fromVolunteerCounselor(VolunteerCounselor volunteerCounselor){
        VolunteerCounselorDTO volunteerCounselorDTO = new VolunteerCounselorDTO();
        BeanUtils.copyProperties(volunteerCounselor , volunteerCounselorDTO);
        return volunteerCounselorDTO;
    }

    public VolunteerCounselor fromProfessionalCounselorDTO(VolunteerCounselorDTO volunteerCounselorDTO){
        VolunteerCounselor volunteerCounselor = new VolunteerCounselor();
        BeanUtils.copyProperties(volunteerCounselorDTO,volunteerCounselor);
        return volunteerCounselor;
    }
}
