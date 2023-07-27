package com.javacorner.admin.service;

import com.javacorner.admin.dto.DoctorDTO;
import com.javacorner.admin.dto.ModeratorDTO;
import com.javacorner.admin.dto.VolunteerCounselorDTO;
import com.javacorner.admin.entity.Doctor;
import com.javacorner.admin.entity.VolunteerCounselor;
import org.springframework.data.domain.Page;

import java.util.List;

public interface DoctorService {
    Doctor loadDoctorById(Long doctorId);
    Page<DoctorDTO> loadDoctorByName(String name, int page, int size);
    DoctorDTO loadDoctorByEmail(String email);
    DoctorDTO createDoctor(DoctorDTO doctorDTO);
    DoctorDTO updateDoctor(DoctorDTO doctorDTO);

    List<DoctorDTO> fetchDoctors();

    void removeDoctor(Long doctorId);
}
