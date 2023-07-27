package com.javacorner.admin.service.impl;

import com.javacorner.admin.dao.DoctorDao;
import com.javacorner.admin.dto.DoctorDTO;
import com.javacorner.admin.entity.*;
import com.javacorner.admin.mapper.DoctorMapper;
import com.javacorner.admin.service.DoctorService;
import com.javacorner.admin.service.ProfessionalCounserlorService;
import com.javacorner.admin.service.RegUserService;
import com.javacorner.admin.service.UserService;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;

import javax.persistence.EntityNotFoundException;
import java.util.List;
import java.util.stream.Collectors;

public class DoctorServiceImpl implements DoctorService {
    private DoctorDao doctorDao;
    private UserService userService;

//    private RegUserService regUserService;
//    private ProfessionalCounserlorService professionalCounserlorService;
    private DoctorMapper doctorMapper;

    public DoctorServiceImpl(DoctorDao doctorDao, UserService userService, DoctorMapper doctorMapper) {
        this.doctorDao = doctorDao;
        this.userService = userService;
        this.doctorMapper = doctorMapper;
    }

    @Override
    public Doctor loadDoctorById(Long doctorId) {
        return doctorDao.findById(doctorId).orElseThrow(()-> new EntityNotFoundException("Doctor with ID" + doctorId + " not found"));
    }

    @Override
    public Page<DoctorDTO> loadDoctorByName(String name, int page, int size) {

        PageRequest pageRequest = PageRequest.of(page, size);
        Page<Doctor> doctorsPage = doctorDao.findDoctorsByName(name, pageRequest);
        return new PageImpl<>(doctorsPage.getContent().stream().map(doctor -> doctorMapper.fromDoctor(doctor)).collect(Collectors.toList()), pageRequest, doctorsPage.getTotalElements());
    }

    @Override
    public DoctorDTO loadDoctorByEmail(String email) {

        return doctorMapper.fromDoctor(doctorDao.findDoctorByEmail(email));
    }

    @Override
    public DoctorDTO createDoctor(DoctorDTO doctorDTO) {
        User user = userService.createUser(doctorDTO.getUser().getEmail(), doctorDTO.getUser().getPassword());
        userService.assignRoleToUser(user.getEmail(), "Doctor");
        Doctor doctor = doctorMapper.fromDoctorDTO(doctorDTO);
        doctor.setUser(user);
        Doctor savedDoctor = doctorDao.save(doctor);
        return doctorMapper.fromDoctor(savedDoctor);
    }

    @Override
    public DoctorDTO updateDoctor(DoctorDTO doctorDTO) {
        Doctor loadedDoctor = loadDoctorById(doctorDTO.getDoctorId());
        Doctor doctor = doctorMapper.fromDoctorDTO(doctorDTO);
        doctor.setUser(loadedDoctor.getUser());
        Doctor updatedDoctor = doctorDao.save(doctor);
        return doctorMapper.fromDoctor(updatedDoctor);
    }
    @Override
    public List<DoctorDTO> fetchDoctors() {
        return doctorDao.findAll().stream().map(doctor -> doctorMapper.fromDoctor(doctor)).collect(Collectors.toList());
    }
    @Override
    public void removeDoctor(Long doctorId) {
        doctorDao.deleteById(doctorId);
    }
}
