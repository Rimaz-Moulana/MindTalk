package com.mindtalk.Backend.service;

import com.mindtalk.Backend.dto.AppointmentDTO;
import com.mindtalk.Backend.dto.ExternalBookedDTO;
import com.mindtalk.Backend.entity.ExternalBooked;
import com.mindtalk.Backend.repo.ExternalBookedRepository;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.List;

@Service
public class ExternalBookedService {
    @Autowired
    private ExternalBookedRepository externalBookedRepository;

    @Autowired
    private ModelMapper modelMapper;

    public void addBookedSlots(Integer counsellorId, LocalDate date, LocalTime startTime, LocalTime endTime) {
        ExternalBooked externalBooked = new ExternalBooked();
        externalBooked.setCounsellorId(counsellorId);
        externalBooked.setDate(date);
        externalBooked.setStartTime(startTime);
        externalBooked.setEndTime(endTime);
        externalBookedRepository.save(externalBooked);
    }

    public List<AppointmentDTO> getBookedSlotsForCounsellors(Integer counsellorId) {
        List<ExternalBooked> externalBooked = externalBookedRepository.findByCounsellorId(counsellorId);
        return modelMapper.map(externalBooked, new TypeToken<List<ExternalBookedDTO>>(){}.getType());
    }
}

