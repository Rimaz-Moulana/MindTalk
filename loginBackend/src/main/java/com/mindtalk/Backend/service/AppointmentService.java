package com.mindtalk.Backend.service;

import com.mindtalk.Backend.dto.AppointmentDTO;
import com.mindtalk.Backend.entity.Appointments;
import com.mindtalk.Backend.entity.Chat;
import com.mindtalk.Backend.repo.AppointmentRepository;
import com.mindtalk.Backend.repo.ChatRepository;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.List;

@Service
public class AppointmentService {

    @Autowired
    private AppointmentRepository appointmentRepository;

    @Autowired
    private ChatRepository chatRepository;

    @Autowired
    private ModelMapper modelMapper;

    public void createAppointment(Integer userId, Integer counsellorId, LocalDate appointmentDate, LocalTime timeSlot) {
        Appointments appointment = new Appointments();
        appointment.setUserId(userId);
        appointment.setCounsellorId(counsellorId);
        appointment.setAppointmentDate(appointmentDate);
        appointment.setTimeSlot(timeSlot);
        appointmentRepository.save(appointment);

        // Create a Chat associated with this appointment
        Chat chat = new Chat();
        chat.setUserId(userId);
        chat.setCounsellorId(counsellorId);
        chat.setFirstUserName("User " + userId); // Customize as needed
        chat.setSecondUserName("Counselor " + counsellorId);
        chatRepository.save(chat);
    }

    public List<AppointmentDTO> getAllAppointments() {
        List<Appointments> appointments = appointmentRepository.findAll();
        return modelMapper.map(appointments, new TypeToken<List<AppointmentDTO>>(){}.getType());
    }

    public List<AppointmentDTO> getAppointmentsForUser(Integer userId) {
        List<Appointments> appointments = appointmentRepository.findByUserId(userId);
        return modelMapper.map(appointments, new TypeToken<List<AppointmentDTO>>(){}.getType());
    }

    public List<AppointmentDTO> getAppointmentsForCounsellors(Integer counsellorId) {
        List<Appointments> appointments = appointmentRepository.findByCounsellorId(counsellorId);
        return modelMapper.map(appointments, new TypeToken<List<AppointmentDTO>>(){}.getType());
    }
}
