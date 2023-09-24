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

    public void addAvailabilityDays(Integer CounsellorId, LocalTime Mon_S, LocalTime Mon_E, LocalTime Tue_S, LocalTime Tue_E,LocalTime Wed_S,
                                    LocalTime Wed_E,LocalTime Thur_S, LocalTime Thur_E, LocalTime Fri_S, LocalTime Fri_E,
                                    LocalTime Sat_S, LocalTime Sat_E,LocalTime Sun_S, LocalTime Sun_E) {
        CounsellorAvailability counsellorAvailability = new CounsellorAvailability();
        counsellorAvailability.setCounsellorId(CounsellorId);
        counsellorAvailability.setMon_S(Mon_S);
        counsellorAvailability.setMon_E(Mon_E);
        counsellorAvailability.setTue_S(Tue_S);
        counsellorAvailability.setTue_E(Tue_E);
        counsellorAvailability.setWed_S(Wed_S);
        counsellorAvailability.setWed_E(Wed_E);
        counsellorAvailability.setThur_S(Thur_S);
        counsellorAvailability.setThur_E(Thur_E);
        counsellorAvailability.setFri_S(Fri_S);
        counsellorAvailability.setFri_E(Fri_E);
        counsellorAvailability.setSat_S(Sat_S);
        counsellorAvailability.setSat_E(Sat_E);
        counsellorAvailability.setSun_S(Sun_S);
        counsellorAvailability.setSun_E(Sun_E);
        counsellorAvailabilityRepository.save(counsellorAvailability);
    }

    public List<CounsellorAvailabilityDTO> getAvailableDateForCounsellors(Integer CounsellorId) {
        List<CounsellorAvailability> counsellorAvailability = counsellorAvailabilityRepository.findByCounsellorId(CounsellorId);
        return modelMapper.map(counsellorAvailability, new TypeToken<List<CounsellorAvailabilityDTO>>(){}.getType());
    }
}
