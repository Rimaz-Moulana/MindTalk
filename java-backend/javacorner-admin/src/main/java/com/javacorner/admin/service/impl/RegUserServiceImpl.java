package com.javacorner.admin.service.impl;

import com.javacorner.admin.dao.RegUserDao;
import com.javacorner.admin.dto.RegUserDTO;
import com.javacorner.admin.model.*;
import com.javacorner.admin.mapper.RegUserMapper;
import com.javacorner.admin.service.RegUserService;
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
public class RegUserServiceImpl implements RegUserService {
    private RegUserMapper regUserMapper;
    private RegUserDao regUserDao;
    private UserService userService;

    @Override
    public RegUser loadRegUserById(Long regUserId) {
        return regUserDao.findById(regUserId).orElseThrow(() -> new EntityNotFoundException("Registered user with ID " + regUserId + " not found"));
    }

    @Override
    public Page<RegUserDTO> loadRegUsersByName(String name, int page, int size) {

        PageRequest pageRequest = PageRequest.of(page, size);
        Page<RegUser> regUsersPage = regUserDao.findRegUserByName(name, pageRequest);
        return new PageImpl<>(regUsersPage.getContent().stream().map(regUser -> regUserMapper.fromRegUser(regUser)).collect(Collectors.toList()), pageRequest, regUsersPage.getTotalElements());
    }

    @Override
    public RegUserDTO loadRegUserByEmail(String email) {
        return regUserMapper.fromRegUser(regUserDao.findRegUserByEmail(email));
    }

    @Override
    public RegUserDTO createRegUser(RegUserDTO regUserDTO) {
        User user = userService.createUser(regUserDTO.getUser().getEmail(), regUserDTO.getUser().getPassword());
        userService.assignRoleToUser(user.getEmail(), "RegUser");
        RegUser regUser = regUserMapper.fromRegUserDTO(regUserDTO);
        regUser.setUser(user);
        RegUser savedRegUser = regUserDao.save(regUser);
        return regUserMapper.fromRegUser(savedRegUser);
    }

    @Override
    public RegUserDTO updateRegUser(RegUserDTO regUserDTO) {
        RegUser loadedRegUser = loadRegUserById(regUserDTO.getRegUserId());
        RegUser regUser = regUserMapper.fromRegUserDTO(regUserDTO);
        regUser.setUser(loadedRegUser.getUser());
        RegUser updatedRegUser = regUserDao.save(regUser);
        return regUserMapper.fromRegUser(updatedRegUser);
    }

    @Override
    public void removeRegUser(Long regUserId) {
        regUserDao.deleteById(regUserId);
    }
}
