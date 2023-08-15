package com.mindtalk.Backend.service;

import com.mindtalk.Backend.entity.Counsellor;
import com.mindtalk.Backend.repo.CounsellorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

@Service
public class CounsellorInfoService {
    @Autowired
    private CounsellorRepository counsellorRepository;
    public void register(Counsellor counsellor, MultipartFile licenseImage){
        String licenseImagePath = saveImagePath(licenseImage);
        counsellor.setLicenseImage(licenseImagePath);
        counsellorRepository.save(counsellor);
    }

    public String saveImagePath(MultipartFile licenseImage){
        return "path/to/licence/image";
    }
}
