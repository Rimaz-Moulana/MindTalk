package com.javacorner.admin.service.impl;

import com.javacorner.admin.dao.DoctorDao;
import com.javacorner.admin.dto.DoctorDTO;
import com.javacorner.admin.model.Doctor;
import com.javacorner.admin.model.User;
import com.javacorner.admin.mapper.DoctorMapper;
import com.javacorner.admin.service.DoctorService;
import com.javacorner.admin.service.UserService;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityNotFoundException;
import java.util.stream.Collectors;

@Service
@Transactional
public class DoctorServiceImpl implements DoctorService{
    private DoctorDao doctorDao;
    private DoctorMapper doctorMapper;
    private UserService userService;

    public DoctorServiceImpl(DoctorDao doctorDao, DoctorMapper doctorMapper, UserService userService) {
        this.doctorDao = doctorDao;
        this.doctorMapper = doctorMapper;
        this.userService = userService;
    }

    @Override
    public Doctor loadDoctorById(Long doctorId) {
        return doctorDao.findById(doctorId).orElseThrow(() -> new EntityNotFoundException("Doctor with ID " + doctorId + " not found"));
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
    public Page<DoctorDTO> findDoctorByName(String name, int page, int size) {
        PageRequest pageRequest = PageRequest.of(page, size);
        Page<Doctor> doctorsPage = doctorDao.findDoctorsByName(name,pageRequest);
        return new PageImpl<>(doctorsPage.getContent().stream().map(doctor -> doctorMapper.fromDoctor(doctor)).collect(Collectors.toList()), pageRequest, doctorsPage.getTotalElements());
    }

    @Override
    public void removeDoctor(Long doctorId) {
doctorDao.deleteById(doctorId);
    }
}
