package com.mindtalk.Backend.controller;

import com.mindtalk.Backend.dto.UserDTO;
import com.mindtalk.Backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/v1/user")
@CrossOrigin
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping("/getUser")
    public String getUser(){
        return "MindTalk";
    }

    @PostMapping("/saveUser")
    public UserDTO saveUser(@RequestBody UserDTO userDTO){
        return userService.saveUser(userDTO);
    }

    @PutMapping("/updateUser")
    public String updateUser(){
        return "User Updated";
    }

    @DeleteMapping("/deleteUser")
    public String deleteUser(){
        return "User Deleted";
    }
}
