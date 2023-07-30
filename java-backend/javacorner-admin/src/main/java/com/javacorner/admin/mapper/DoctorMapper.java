package com.javacorner.admin.mapper;

import com.javacorner.admin.dto.DoctorDTO;
import com.javacorner.admin.model.Doctor;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

@Service
public class DoctorMapper {
    public DoctorDTO fromDoctor(Doctor doctor) {
        DoctorDTO doctorDTO = new DoctorDTO();
        BeanUtils.copyProperties(doctor, doctorDTO);
        return doctorDTO;
    }

    public Doctor fromDoctorDTO(DoctorDTO doctorDTO) {
        Doctor doctor = new Doctor();
        BeanUtils.copyProperties(doctorDTO, doctor);
        return doctor;
    }
}
