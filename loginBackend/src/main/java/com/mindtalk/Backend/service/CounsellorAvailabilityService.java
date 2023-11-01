package com.mindtalk.Backend.service;

import com.mindtalk.Backend.dto.CounsellorAvailabilityDTO;
import com.mindtalk.Backend.entity.CounsellorAvailability;
import com.mindtalk.Backend.repo.CounsellorAvailabilityRepository;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalTime;
import java.util.List;

@Service
public class CounsellorAvailabilityService {
    @Autowired
    public CounsellorAvailabilityRepository counsellorAvailabilityRepository;

    @Autowired
    private ModelMapper modelMapper;

    public void addAvailabilityDays(Integer CounsellorId, Integer Day, LocalTime timeslot1_S, LocalTime timeslot1_E,LocalTime timeslot2_S,LocalTime timeslot2_E,LocalTime timeslot3_S,LocalTime timeslot3_E) {
        CounsellorAvailability counsellorAvailability = new CounsellorAvailability();
        counsellorAvailability.setCounsellorId(CounsellorId);
        counsellorAvailability.setDay(Day);
        counsellorAvailability.getTimeslot1_S();
        counsellorAvailability.getTimeslot1_E();
        counsellorAvailability.getTimeslot2_S();
        counsellorAvailability.getTimeslot2_E();
        counsellorAvailability.getTimeslot3_S();
        counsellorAvailability.getTimeslot3_E();
        counsellorAvailabilityRepository.save(counsellorAvailability);
    }

    public List<CounsellorAvailabilityDTO> getAvailableDateForCounsellors(Integer CounsellorId) {
        List<CounsellorAvailability> counsellorAvailability = counsellorAvailabilityRepository.findByCounsellorId(CounsellorId);
        return modelMapper.map(counsellorAvailability, new TypeToken<List<CounsellorAvailabilityDTO>>(){}.getType());
    }
}
