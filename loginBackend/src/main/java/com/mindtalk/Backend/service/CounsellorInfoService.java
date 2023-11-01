package com.mindtalk.Backend.service;

import com.mindtalk.Backend.dto.Counsellor.CounsellorDTO;
import com.mindtalk.Backend.entity.Counsellor;
import com.mindtalk.Backend.repo.CounselorRepository;
import jakarta.servlet.MultipartConfigElement;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.util.List;

@Service
public class CounsellorInfoService {

    @Autowired
    private CounselorRepository counsellorRepository;

    @Value("${profile.photo.upload.path}")
    private String profilePhotoUploadPath;

    @Autowired
    private ModelMapper modelMapper;

    public void register(Long id, String firstname, String lastname, String email, Long licenseNo,
            String licenseImage) {
        Counsellor counsellor = new Counsellor();
        counsellor.setId(id);
        counsellor.setFirstname(firstname);
        counsellor.setLastname(lastname);
        counsellor.setEmail(email);
        counsellor.setLicenseNo(licenseNo);
        counsellor.setLicenseImage(licenseImage);
        counsellorRepository.save(counsellor);
    }

    public List<CounsellorDTO> getCounsellor() {
        List<Counsellor> counsellors = counsellorRepository.findAll();
        return modelMapper.map(counsellors, new TypeToken<List<CounsellorDTO>>() {
        }.getType());
    }

    public List<Counsellor> getAllCounsellors() {
        return counsellorRepository.findAll();
    }

    // Pathum's Service

    public List<Counsellor> getAllCounsellor() {
        return counsellorRepository.findAll();
    }

    public Counsellor getCounsellorByUserId(Integer user_id) {

        return counsellorRepository.findByUserId(user_id).orElse(null);
    }

     public String getProfilePhotoPathByUserId(Integer user_id) {
     // Find the counsellor by user_id
     Counsellor existingCounsellor =
     counsellorRepository.findByUserId(user_id).orElse(null);

     if (existingCounsellor != null) {
     // Get the profile photo path from the counsellor entity
     return existingCounsellor.getProfilePhotoPath();
     }

     return null; // counsellor not found or profile photo path not available
     }

    public Counsellor updateCounsellor(Integer user_id, CounsellorDTO counsellorDTO) {
        Counsellor existingCounsellor = counsellorRepository.findByUserId(user_id).orElse(null);

        if (existingCounsellor != null) {
            existingCounsellor.setFirstname(counsellorDTO.getFirstname());
            existingCounsellor.setLastname(counsellorDTO.getLastname());
            existingCounsellor.setAddress(counsellorDTO.getAddress());
            existingCounsellor.setEmail(counsellorDTO.getEmail());
            existingCounsellor.setPhone(counsellorDTO.getPhone());
            existingCounsellor.setAgeGroup(counsellorDTO.getAgeGroup());
            existingCounsellor.setLicenseNo(counsellorDTO.getLicenseNo());
            existingCounsellor.setLicenseImage(counsellorDTO.getLicenseImage());
            existingCounsellor.setCoreServices(counsellorDTO.getCoreServices());
            existingCounsellor.setDegree(counsellorDTO.getDegree());
            existingCounsellor.setExperience(counsellorDTO.getExperience());
            existingCounsellor.setJobRole(counsellorDTO.getJobRole());
            existingCounsellor.setLanguage(counsellorDTO.getLanguage());
            existingCounsellor.setScopeOfPractice(counsellorDTO.getScopeOfPractice());
            existingCounsellor.setWorkplace(counsellorDTO.getWorkplace());
            existingCounsellor.setAbout(counsellorDTO.getAbout());
            return counsellorRepository.save(existingCounsellor);
        }
        return null; // counsellor not found
    }

     public String updateProfilePhoto(Integer user_id, MultipartFile profilePhoto)
     {
         // Find the counsellor by user_id
         Counsellor existingCounsellor = counsellorRepository.findByUserId(user_id).orElse(null);

        if (existingCounsellor != null) {
            // Delete the existing profile photo if it exists
            if (existingCounsellor.getProfilePhotoPath() != null) {
                Path existingPhotoPath = Paths.get(profilePhotoUploadPath, existingCounsellor.getProfilePhotoPath());
                try {
                    Files.deleteIfExists(existingPhotoPath);
                } catch (IOException e) {
                    e.printStackTrace(); // Handle the exception if necessary
                }
            }

             // Handle the new profile photo
             if (profilePhoto != null && !profilePhoto.isEmpty()) {
                try {
                    // Save the new profile photo to a local file
                    String fileName = System.currentTimeMillis() + "_" + profilePhoto.getOriginalFilename();
                    Path filePath = Paths.get(profilePhotoUploadPath, fileName);
                    Files.copy(profilePhoto.getInputStream(), filePath, StandardCopyOption.REPLACE_EXISTING);

                     // Set the new profile photo path in the database
                     existingCounsellor.setProfilePhotoPath(fileName);

                     // Save the updated counsellor to update the profile photo path
                    counsellorRepository.save(existingCounsellor);

                    return fileName; // Return the new profile photo path
                } catch (IOException e) {
                e.printStackTrace(); // Handle the exception
                }
             }
        }
        return null; // counsellor not found or profile photo not updated
     }

//     public boolean deleteCounsellor(Integer counsellorId){
//     Counsellor existingCounsellor =
//     CounselorRepository.findById(counsellorId).orElse(null);
//
//     if (existingCounsellor != null ){
//     counsellorRepository.delete(existingCounsellor);
//     return true; //client Deleted
//     }
//     return false; //client not deleted
//     }

    public Integer getCounsellorIdByUserId(Integer userId) {
        // Implement the logic to retrieve the counsellorId based on userId
        return counsellorRepository.findCounsellorIdByUserId(userId);
    }
    public Counsellor getCounsellorById(Long counsellorId) {
        return counsellorRepository.findById(counsellorId).orElse(null);
    }
}
