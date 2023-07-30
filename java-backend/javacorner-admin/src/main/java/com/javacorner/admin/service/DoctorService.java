package com.javacorner.admin.service;

import com.javacorner.admin.dto.DoctorDTO;
import com.javacorner.admin.model.Doctor;
import org.springframework.data.domain.Page;


public interface DoctorService {
    Doctor loadDoctorById(Long doctorId);
    DoctorDTO loadDoctorByEmail(String email);
    DoctorDTO createDoctor(DoctorDTO doctorDTO);

    DoctorDTO updateDoctor( DoctorDTO doctorDTO);

    Page< DoctorDTO> findDoctorByName(String name, int page, int size);

//    void assignDoctorToCourse(Long coId, Long studentId);

//    Page< DoctorDTO> fetchCoursesForStudent(Long studentId,int page, int size);

//    Page<CourseDTO> fetchNonEnrolledInCoursesForStudent(Long studentId, int page, int size);

    void removeDoctor(Long doctorId);

//    Page<CourseDTO> fetchCoursesForInstructor(Long instructorId, int page, int size);
}
