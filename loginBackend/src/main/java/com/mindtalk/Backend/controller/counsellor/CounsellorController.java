package com.mindtalk.Backend.controller.counsellor;

import com.mindtalk.Backend.dto.Counsellor.CounsellorDTO;

import com.mindtalk.Backend.entity.Client;
import com.mindtalk.Backend.entity.Counsellor;
import com.mindtalk.Backend.entity.client.ClientNoteEntity;
import com.mindtalk.Backend.service.CounsellorInfoService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@RestController
@RequestMapping(path = "/api/counsellor/details")
// @RequestMapping(path = "/api/counsellor/details" , method =
// RequestMethod.POST, consumes = "application/json", produces =
// "application/json")
// @TokenSecurity(allowWithoutToken = true)
// @CrossOrigin("http://127.0.0.1:5173")
public class CounsellorController {

    @Autowired
    private CounsellorInfoService counsellorInfoService;

    private final List<String> allowedOrigins;

    @Autowired
    public CounsellorController(@Value("#{'${app.cors.allowed-origins}'.split(',')}") List<String> allowedOrigins) {
        this.allowedOrigins = allowedOrigins;
    }

    @PostMapping("/add")
    @CrossOrigin(origins = "${app.cors.allowed-origins}", allowCredentials = "true")
    public ResponseEntity<String> registerCounsellor(@RequestBody CounsellorDTO counsellorDTO) {
        try {
            Long id = counsellorDTO.getId();
            String firstname = counsellorDTO.getFirstname();
            String lastname = counsellorDTO.getLastname();
            String email = counsellorDTO.getEmail();
            Long licenseNo = counsellorDTO.getLicenseNo();
            String licenseImage = counsellorDTO.getLicenseImage();

            counsellorInfoService.register(id, firstname, lastname, email, licenseNo, licenseImage);

            return ResponseEntity.ok("adding successful");
        } catch (Exception e) {
            return ResponseEntity.status(500).body("An error");
        }
    }

    @GetMapping("/getCounsellor")
    @CrossOrigin(origins = "${app.cors.allowed-origins}", allowCredentials = "true")
    public List<CounsellorDTO> getCounsellor() {
        return counsellorInfoService.getCounsellor();
    }

    @GetMapping("/all")
    @CrossOrigin(origins = "${app.cors.allowed-origins}", allowCredentials = "true")
    public ResponseEntity<List<Counsellor>> getAllCounsellors() {
        List<Counsellor> allCounsellors = counsellorInfoService.getAllCounsellors();

        if (!allCounsellors.isEmpty()) {
            return ResponseEntity.ok(allCounsellors);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    // Pathum's Controller

    @GetMapping("/getCounsellor/{user_id}")
    @CrossOrigin(origins = "${app.cors.allowed-origins}", allowCredentials = "true")
    public ResponseEntity<Counsellor> getCounsellorById(@PathVariable Integer user_id) {
        Counsellor counsellor = counsellorInfoService.getCounsellorByUserId(user_id);

        if (counsellor != null) {
            return ResponseEntity.ok(counsellor);
        } else {
            return (ResponseEntity<Counsellor>) ResponseEntity.noContent();
        }
    }

    // @GetMapping("/profilePhotoPath/{user_id}")
    // @CrossOrigin(origins = "${app.cors.allowed-origins}", allowCredentials =
    // "true")
    // public ResponseEntity<String> getProfilePhotoPath(@PathVariable Integer
    // user_id) {
    // String profilePhotoPath =
    // counsellorInfoService.getProfilePhotoPathByUserId(user_id);
    //
    // if (profilePhotoPath != null) {
    // return ResponseEntity.ok(profilePhotoPath);
    // } else {
    // return ResponseEntity.notFound().build();
    // }
    // }

    @GetMapping("/allCounsellor")
    @CrossOrigin(origins = "${app.cors.allowed-origins}", allowCredentials = "true")
    public ResponseEntity<List<Counsellor>> getAllCounsellor() {
        List<Counsellor> allCounsellor = counsellorInfoService.getAllCounsellor();

        if (!allCounsellor.isEmpty()) {
            return ResponseEntity.ok(allCounsellor);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    // getting counsellorId from userID
    @GetMapping("/{userId}/counsellorId")
    @CrossOrigin(origins = "${app.cors.allowed-origins}", allowCredentials = "true")
    public ResponseEntity<Integer> getCounsellorId(@PathVariable Integer userId) {
        Integer counsellorId = counsellorInfoService.getCounsellorIdByUserId(userId);
        return ResponseEntity.ok(counsellorId);
    }

    // get counsellor name given id
    @GetMapping("/{counsellorId}/counsellorName")
    @CrossOrigin(origins = "${app.cors.allowed-origins}", allowCredentials = "true")
    public ResponseEntity<String> getCounsellById(@PathVariable("counsellorId") Long counsellorId) {
        Counsellor counsellor = counsellorInfoService.getCounsellorById(counsellorId);
        if (counsellor != null) {
            String fullName = counsellor.getFirstname() + " " + counsellor.getLastname();
            return ResponseEntity.ok(fullName);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PutMapping("/updateCounsellor/{user_id}")
    @CrossOrigin(origins = "${app.cors.allowed-origins}", allowCredentials = "true")
    public ResponseEntity<Counsellor> updateCounsellor(
            @PathVariable Integer user_id,
            @RequestBody CounsellorDTO counsellorDTO) {
        Counsellor updatedCounsellor = counsellorInfoService.updateCounsellor(user_id, counsellorDTO);

        if (updatedCounsellor != null) {
            return ResponseEntity.ok(updatedCounsellor);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    // @PutMapping("/updateProfilePhoto/{user_id}")
    // @CrossOrigin(origins = "${app.cors.allowed-origins}", allowCredentials =
    // "true")
    // public ResponseEntity<Counsellor> updateProfilePhoto(
    // @PathVariable Integer user_id,
    // @RequestPart(required = false) MultipartFile profilePhoto) {
    //
    // if (profilePhoto != null) {
    // String updatedProfilePhotoPath =
    // counsellorInfoService.updateProfilePhoto(user_id, profilePhoto);
    // if (updatedProfilePhotoPath != null) {
    // return ResponseEntity.ok(counsellorInfoService.getClientByUserId(user_id));
    // }
    // }
    //
    // return ResponseEntity.badRequest().build(); //Handle errors as needed
    // }

    // @DeleteMapping("/{counsellorId}")
    // @CrossOrigin(origins = "${app.cors.allowed-origins}", allowCredentials =
    // "true")
    // public ResponseEntity<Void> deleteCounsellor(@PathVariable Integer
    // counsellorId){
    // boolean isDeleted = counsellorInfoService.deleteCounsellor(counsellorId);
    //
    // if (isDeleted){
    // return ResponseEntity.noContent().build();
    // } else {
    // return ResponseEntity.notFound().build();
    // }
    // }

}
