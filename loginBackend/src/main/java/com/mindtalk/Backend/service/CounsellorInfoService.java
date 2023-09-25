package com.mindtalk.Backend.service;

import com.mindtalk.Backend.dto.Counsellor.CounsellorDTO;
import com.mindtalk.Backend.entity.Counsellor;
import com.mindtalk.Backend.repo.CounselorRepository;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CounsellorInfoService {
    @Autowired
    private CounselorRepository counsellorRepository;

    @Autowired
    private ModelMapper modelMapper;
    public void register(Long id, String firstname, String lastname, String email, Long licenseNo, String licenseImage){
        Counsellor counsellor = new Counsellor();
        counsellor.setId(id);
        counsellor.setFirstname(firstname);
        counsellor.setLastname(lastname);
        counsellor.setEmail(email);
        counsellor.setLicenseNo(licenseNo);
        counsellor.setLicenseImage(licenseImage);
        counsellorRepository.save(counsellor);
    }

    public List<CounsellorDTO> getCounsellor(){
        List<Counsellor> counsellors = counsellorRepository.findAll();
        return modelMapper.map(counsellors, new TypeToken<List<CounsellorDTO>>(){}.getType());
    }

    public List<Counsellor> getAllCounsellors() {
        return counsellorRepository.findAll();
    }




    //Pathum's Service

    public List<Counsellor> getAllCounsellor(){
        return counsellorRepository.findAll();
    }

    public Counsellor getCounsellorById(Long id){
        return counsellorRepository.findById(id).orElse(null);
    }
}
