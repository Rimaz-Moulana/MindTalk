package com.javacorner.admin.mapper;

import com.javacorner.admin.dto.ProfessionalCounselorDTO;
import com.javacorner.admin.entity.ProfessionalCounselor;
import org.springframework.beans.BeanUtils;

public class ProfessionalCounselorMapper {
    public ProfessionalCounselorDTO fromProfessionalCounselor(ProfessionalCounselor professionalCounselor){
        ProfessionalCounselorDTO professionalCounselorDTO = new ProfessionalCounselorDTO();
        BeanUtils.copyProperties(professionalCounselor , professionalCounselorDTO);
        return professionalCounselorDTO;
    }

    public ProfessionalCounselor fromProfessionalCounselorDTO(ProfessionalCounselorDTO professionalCounselorDTO){
        ProfessionalCounselor professionalCounselor = new ProfessionalCounselor();
        BeanUtils.copyProperties(professionalCounselorDTO,professionalCounselor);
        return professionalCounselor;
    }
}
