package com.javacorner.admin.service;

import com.javacorner.admin.dto.DoctorDTO;
import com.javacorner.admin.dto.ProfessionalCounselorDTO;
import com.javacorner.admin.dto.VolunteerCounselorDTO;
import com.javacorner.admin.entity.ProfessionalCounselor;
import org.springframework.data.domain.Page;

import java.util.List;

public interface ProfessionalCounserlorService {
    ProfessionalCounselor loadProfessionalCounselorById(Long PcounselorId);
    Page<ProfessionalCounselorDTO> loadProfessionalCounselorByName(String name, int page, int size);
    ProfessionalCounselorDTO loadProfessionalCounselorByEmail(String email);
    ProfessionalCounselorDTO createProfessionalCounselor(ProfessionalCounselorDTO professionalCounselorDTO);
    ProfessionalCounselorDTO updateProfessionalCounselor(ProfessionalCounselorDTO professionalCounselorDTO);

    List<ProfessionalCounselorDTO> fetchProdessionalCounselor();
    void removeProfessionalCounselor(Long PcounselorId);
}
