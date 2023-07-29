package com.javacorner.admin.controller;

import com.javacorner.admin.dto.DoctorDTO;
import com.javacorner.admin.model.User;
import com.javacorner.admin.service.DoctorService;
import com.javacorner.admin.service.UserService;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin("http://localhost:3000")
public class DoctorRestController {
    private DoctorService doctorService;
    private UserService userService;

    @PostMapping("/doctor")
    @PreAuthorize("hasAuthority('Admin')")
    public DoctorDTO saveDoctor(@RequestBody DoctorDTO doctorDTO) {
        User user = userService.loadUserByEmail(doctorDTO.getUser().getEmail());
        if (user != null) throw new RuntimeException("Email Already Exist");
        return doctorService.createDoctor(doctorDTO);
    }
}
