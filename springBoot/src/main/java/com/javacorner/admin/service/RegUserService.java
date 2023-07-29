package com.javacorner.admin.service;

import com.javacorner.admin.dto.ProfessionalCounselorDTO;
import com.javacorner.admin.dto.RegUserDTO;
import com.javacorner.admin.entity.RegUser;
import org.springframework.data.domain.Page;

import java.util.List;

public interface RegUserService {
    RegUser loadRegUserById(Long regUserId);
    Page<RegUserDTO> loadDoctorByName(String name, int page, int size);
    RegUserDTO loadRegUserByEmail(String email);
    RegUserDTO createRegUser(RegUserDTO regUserDTO);
    RegUserDTO updateRegUser(RegUserDTO regUserDTO);

    List<RegUserDTO> fetchRegUser();
    void removeRegUser(Long regUserId);
}
