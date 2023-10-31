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

    public void register(Long id, String firstname, String lastname, String email, Long licenseNo, String licenseImage) {
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

    public List<Counsellor> getAllCounsellor() {
        return counsellorRepository.findAll();
    }

    public Counsellor getCounsellorByUserId(Integer user_id) {
        return counsellorRepository.findByUserId(user_id).orElse(null);
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

    @Configuration
    public class MultipartConfig {
        @Bean
        public MultipartConfigElement multipartConfigElement() {
            return new MultipartConfigElement("");
        }
    }

    // Additional methods and error handling can be added as per your requirements
}
