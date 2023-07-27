package com.javacorner.admin.mapper;

import com.javacorner.admin.dto.RegUserDTO;
import com.javacorner.admin.dto.VolunteerCounselorDTO;
import com.javacorner.admin.entity.RegUser;
import com.javacorner.admin.entity.VolunteerCounselor;
import org.springframework.beans.BeanUtils;

public class RegUserMapper {
    public RegUserDTO fromRegUser(RegUser regUser){
        RegUserDTO regUserDTO = new RegUserDTO();
        BeanUtils.copyProperties(regUser , regUserDTO);
        return regUserDTO;
    }

    public RegUser fromRegUserDTO(RegUserDTO regUserDTO){
        RegUser regUser = new RegUser();
        BeanUtils.copyProperties(regUserDTO,regUser);
        return regUser;
    }

}
