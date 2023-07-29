package com.javacorner.admin.mapper;

import com.javacorner.admin.dto.DoctorDTO;
import com.javacorner.admin.dto.StudentDTO;
import com.javacorner.admin.entity.Doctor;
import com.javacorner.admin.entity.Student;
import org.springframework.beans.BeanUtils;

import javax.print.Doc;

public class DoctorMapper {
    public DoctorDTO fromDoctor(Doctor doctor){
        DoctorDTO doctorDTO = new DoctorDTO();
        BeanUtils.copyProperties(doctor,doctorDTO);
        return doctorDTO;
    }

    public Doctor fromDoctorDTO(DoctorDTO doctorDTO){
        Doctor doctor = new Doctor();
        BeanUtils.copyProperties(doctorDTO,doctor);
        return doctor;
    }
}
