package com.javacorner.admin.service;

import com.javacorner.admin.dto.ProfessionalCounselorDTO;
import com.javacorner.admin.model.ProfessionalCounselor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.domain.Page;

public interface ProfessionalCounselorService {


    ProfessionalCounselor loadProfessionalCounselorById(Long professionalId);

    Page<ProfessionalCounselorDTO> loadProfessionalCounselorsByName(String name, int page, int size);

    ProfessionalCounselorDTO loadProfessionalCounselorByEmail(String email);

    ProfessionalCounselorDTO createProfessionalCounselor(ProfessionalCounselorDTO professionalCounselorDTO);

    ProfessionalCounselorDTO updateProfessionalCounselor(ProfessionalCounselorDTO professionalCounselorDTO);

    void removeProfessionalCounselor(Long professionalId);
}
