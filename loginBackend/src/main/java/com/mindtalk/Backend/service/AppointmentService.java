package com.mindtalk.Backend.service;

import com.mindtalk.Backend.dto.AppointmentDTO;
import com.mindtalk.Backend.dto.ClientDTO;
import com.mindtalk.Backend.entity.Appointments;
import com.mindtalk.Backend.entity.Chat;
import com.mindtalk.Backend.entity.Client;
import com.mindtalk.Backend.repo.AppointmentRepository;
import com.mindtalk.Backend.repo.ChatRepository;
import com.mindtalk.Backend.repo.ClientRepo;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class AppointmentService {

    @Autowired
    private AppointmentRepository appointmentRepository;

    @Autowired
    private ChatRepository chatRepository;

    @Autowired
    private ClientRepo clientRepo;

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
        return modelMapper.map(appointments, new TypeToken<List<AppointmentDTO>>() {
        }.getType());
    }

    public List<AppointmentDTO> getAppointmentsForUser(Integer userId) {
        List<Appointments> appointments = appointmentRepository.findByUserId(userId);
        return modelMapper.map(appointments, new TypeToken<List<AppointmentDTO>>() {
        }.getType());
    }

    public List<AppointmentDTO> getAppointmentsForCounsellors(Integer counsellorId) {
        List<Appointments> appointments = appointmentRepository.findByCounsellorId(counsellorId);
        return modelMapper.map(appointments, new TypeToken<List<AppointmentDTO>>() {
        }.getType());
    }

    public List<Integer> getClientIdsForCounsellor(Integer counsellorId) {
        List<Appointments> appointments = appointmentRepository.findByCounsellorId(counsellorId);
        List<Integer> clientIds = appointments.stream().map(Appointments::getUserId).collect(Collectors.toList());
        return clientIds;
    }

    public List<Integer> getUserIdsByCounsellorId(Integer counsellorId) {
        return appointmentRepository.findUserIdsByCounsellorId(counsellorId);
    }

    // public List<ClientDTO> getClientInfoForCounsellor(Integer counsellorId) {
    // List<Appointments> appointments =
    // appointmentRepository.findByCounsellorId(counsellorId);
    // List<ClientDTO> clientInfoList = new ArrayList<>();
    //
    // for (Appointments appointment : appointments) {
    // Integer clientId = appointment.getUserId();
    // String clientName = getClientName(clientId); // Use the getClientName method
    //
    // // Check if the clientName is not null before adding it
    // if (clientName != null) {
    // String[] nameParts = clientName.split(" "); // Assuming fname and lname are
    // separated by a space
    // if (nameParts.length >= 2) {
    //// String combinedName = nameParts[0] + " " + nameParts[1]; // Combine fname
    // and lname
    //// clientInfoList.add(new ClientDTO(clientId, combinedName));
    // String fName = nameParts[0];
    // String lName = nameParts[1];
    // clientInfoList.add(new ClientDTO(clientId, fName, lName));
    // } else {
    // // Handle the case where the name is not in the expected format
    // clientInfoList.add(new ClientDTO(clientId, "Unknown", "Unknown"));
    // }
    // } else {
    // // Handle the case where the client name couldn't be retrieved
    // clientInfoList.add(new ClientDTO(clientId, "Unknown", "Unknown"));
    // }
    // }
    //
    // return clientInfoList;
    // }
    //
    // public String getClientName(Integer clientId) {
    //
    // Client client = clientRepo.findById(clientId)
    // .orElse(null);
    //
    // // Check if the client exists and return their name
    // if (client != null) {
    // return client.getFName() + " " + client.getLName(); // Combine fname and
    // lname
    // } else {
    // return null; // Return null if the client doesn't exist
    // }
    // }

    public List<ClientDTO> getClientInfoForCounsellor(Integer counsellorId) {
        List<Integer> clientIds = getClientIdsForCounsellor(counsellorId);

        List<ClientDTO> clientInfoList = new ArrayList<>();

        for (Integer clientId : clientIds) {
            ClientDTO clientDTO = getClientInfo(clientId);
            clientInfoList.add(clientDTO);
        }

        return clientInfoList;
    }

    private ClientDTO getClientInfo(Integer clientId) {
        Client client = clientRepo.findByUserId(clientId).orElse(null);

        if (client != null) {
            // Map the client information to a ClientDTO
            ClientDTO clientDTO = modelMapper.map(client, ClientDTO.class);
            return clientDTO;
        } else {
            // Handle the case where the client doesn't exist
            return new ClientDTO(); // You can set default values in ClientDTO
        }
    }

    public AppointmentDTO getLatestAppointmentForUser(Integer userId) {
        // Fetch the most recent appointment for the user
        Optional<Appointments> latestAppointmentOptional = appointmentRepository.findTop1ByUserIdOrderByAppointmentDateDescTimeSlotDesc(userId);

        if (latestAppointmentOptional.isPresent()) {
            // Extract the Appointment from the Optional
            Appointments latestAppointment = latestAppointmentOptional.get();

            // Map the Appointment to an AppointmentDTO
            AppointmentDTO appointmentDTO = modelMapper.map(latestAppointment, AppointmentDTO.class);
            return appointmentDTO;
        } else {
            // Handle the case where no appointment was found for the user
            return null; // or throw an exception, return a default value, etc.
        }
    }
}
