package com.mindtalk.Backend.service;

import com.mindtalk.Backend.dto.CounsellorAvailabilityDTO;
import com.mindtalk.Backend.entity.CounsellorAvailability;
import com.mindtalk.Backend.repo.CounsellorAvailabilityRepository;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.List;

@Service
public class CounsellorAvailabilityService {
    @Autowired
    public CounsellorAvailabilityRepository counsellorAvailabilityRepository;

    @Autowired
    private ModelMapper modelMapper;

    public void addAvailabilityDays(Integer CounsellorId, LocalDate Mon_D, LocalTime Mon_T, LocalDate Tue_D, LocalTime Tue_T,LocalDate Wed_D,
                                    LocalTime Wed_T,LocalDate Thur_D, LocalTime Thur_T, LocalDate Fri_D, LocalTime Fri_T,
                                    LocalDate Sat_D, LocalTime Sat_T,LocalDate Sun_D, LocalTime Sun_T) {
        CounsellorAvailability counsellorAvailability = new CounsellorAvailability();
        counsellorAvailability.setCounsellorId(CounsellorId);
        counsellorAvailability.setMon_D(Mon_D);
        counsellorAvailability.setMon_T(Mon_T);
        counsellorAvailability.setTue_D(Tue_D);
        counsellorAvailability.setTue_T(Tue_T);
        counsellorAvailability.setWed_D(Wed_D);
        counsellorAvailability.setWed_T(Wed_T);
        counsellorAvailability.setThur_D(Thur_D);
        counsellorAvailability.setSun_T(Thur_T);
        counsellorAvailability.setFri_D(Fri_D);
        counsellorAvailability.setFri_T(Fri_T);
        counsellorAvailability.setSat_D(Sat_D);
        counsellorAvailability.setSat_T(Sat_T);
        counsellorAvailability.setSun_D(Sun_D);
        counsellorAvailability.setSun_T(Sun_T);
        counsellorAvailabilityRepository.save(counsellorAvailability);
    }

    public List<CounsellorAvailabilityDTO> getAvailableDateForCounsellors(Integer CounsellorId) {
        List<CounsellorAvailability> counsellorAvailability = counsellorAvailabilityRepository.findByCounsellorId(CounsellorId);
        return modelMapper.map(counsellorAvailability, new TypeToken<List<CounsellorAvailabilityDTO>>(){}.getType());
    }
}
