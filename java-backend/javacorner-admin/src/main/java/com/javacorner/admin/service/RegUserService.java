package com.javacorner.admin.service;

import com.javacorner.admin.dto.RegUserDTO;
import com.javacorner.admin.model.RegUser;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;

public interface RegUserService {
    RegUser loadRegUserById(Long regUserId);

    Page<RegUserDTO> loadRegUsersByName(String name, int page, int size);

    RegUserDTO loadRegUserByEmail(String email);

    RegUserDTO createRegUser(RegUserDTO regUserDTO);

    RegUserDTO updateRegUser(RegUserDTO regUserDTO);

    void removeRegUser(Long regUserId);
}
