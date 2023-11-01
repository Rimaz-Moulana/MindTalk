package com.mindtalk.Backend.service;

import com.mindtalk.Backend.dto.AppointmentRequestsDTO;
import com.mindtalk.Backend.entity.AppointmentRequests;
import com.mindtalk.Backend.repo.AppointmentRequestsRepository;
import com.mindtalk.Backend.repo.ClientRepo;
import jakarta.transaction.Transactional;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.List;
import java.util.Optional;

@Service
public class AppointmentRequestsService {
    @Autowired
    private AppointmentRequestsRepository appointmentRequestsRepository;
    @Autowired
    private ModelMapper modelMapper;

    public void createAppointmentRequest(Integer requestId, Integer userId, Boolean requested, Boolean accepted, Integer counsellorId, LocalDate date, LocalTime timeSlot) {
        AppointmentRequests appointmentRequests = new AppointmentRequests();
        appointmentRequests.setRequestId(requestId);
        appointmentRequests.setUserId(userId);
        appointmentRequests.setRequested(requested);
        appointmentRequests.setAccepted(accepted);
        appointmentRequests.setCounsellorId(counsellorId);
        appointmentRequests.setDate(date);
        appointmentRequests.setTimeSlot(timeSlot);
        appointmentRequestsRepository.save(appointmentRequests);
    }

    public List<AppointmentRequestsDTO> getAllAppointmentRequests() {
        List<AppointmentRequests> appointmentRequests = appointmentRequestsRepository.findAll();
        return modelMapper.map(appointmentRequests, new TypeToken<List<AppointmentRequestsDTO>>(){}.getType());
    }

    public List<AppointmentRequestsDTO> getRequestsForUser(Integer userId) {
        List<AppointmentRequests> appointmentRequests = appointmentRequestsRepository.findByUserId(userId);
        return modelMapper.map(appointmentRequests, new TypeToken<List<AppointmentRequestsDTO>>(){}.getType());
    }

    public List<AppointmentRequestsDTO> getRequestsForCounsellors(Integer counsellorId) {
        List<AppointmentRequests> appointmentRequests = appointmentRequestsRepository.findByCounsellorId(counsellorId);
        return modelMapper.map(appointmentRequests, new TypeToken<List<AppointmentRequestsDTO>>(){}.getType());
    }
    @Transactional
    public void acceptAppointmentRequest(Integer requestId) {
        // Find the appointment request by ID
        Optional<AppointmentRequests> appointmentRequestOptional = appointmentRequestsRepository.findById(requestId);

        if (appointmentRequestOptional.isPresent()) {
            AppointmentRequests appointmentRequest = appointmentRequestOptional.get();
            appointmentRequest.setAccepted(true); // Set 'accepted' to true
            appointmentRequestsRepository.save(appointmentRequest);
        }
    }

    @Transactional
    public void rejectAppointmentRequest(Integer requestId) {
        // Find the appointment request by ID
        Optional<AppointmentRequests> appointmentRequestOptional = appointmentRequestsRepository.findById(requestId);

        if (appointmentRequestOptional.isPresent()) {
            AppointmentRequests appointmentRequest = appointmentRequestOptional.get();
            appointmentRequest.setRequested(false);
            appointmentRequestsRepository.save(appointmentRequest);
        }
    }
    @Transactional
    public void deleteAppointmentRequestById(Integer requestId) {
        // Find the appointment request by ID
        Optional<AppointmentRequests> appointmentRequestOptional = appointmentRequestsRepository.findById(requestId);

        if (appointmentRequestOptional.isPresent()) {
            AppointmentRequests appointmentRequest = appointmentRequestOptional.get();
            appointmentRequestsRepository.delete(appointmentRequest); // Delete the appointment request
        }
    }
}
