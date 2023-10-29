package com.mindtalk.Backend.service;

import com.mindtalk.Backend.dto.AppointmentRequestsDTO;
import com.mindtalk.Backend.entity.AppointmentRequests;
import com.mindtalk.Backend.entity.Appointments;
import com.mindtalk.Backend.repo.AppointmentRequestsRepository;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AppointmentRequestsService {
    @Autowired
    private AppointmentRequestsRepository appointmentRequestsRepository;

    @Autowired
    private ModelMapper modelMapper;

    public void createAppointmentRequest(Integer requestId, Appointments appointments, Boolean requested, Boolean accepted) {
        AppointmentRequests appointmentRequests = new AppointmentRequests();
        appointmentRequests.setRequestId(requestId);
        appointmentRequests.setAppointments(appointments);
        appointmentRequests.setRequested(requested);
        appointmentRequests.setAccepted(accepted);
        appointmentRequestsRepository.save(appointmentRequests);
    }

    public List<AppointmentRequestsDTO> getAllAppointmentRequests() {
        List<AppointmentRequests> appointmentRequests = appointmentRequestsRepository.findAll();
        return modelMapper.map(appointmentRequests, new TypeToken<List<AppointmentRequestsDTO>>(){}.getType());
    }
}
