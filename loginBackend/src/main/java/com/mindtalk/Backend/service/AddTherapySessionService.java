package com.mindtalk.Backend.service;

import com.mindtalk.Backend.dto.AppointmentDTO;
import com.mindtalk.Backend.dto.Counsellor.CounsellorDTO;
import com.mindtalk.Backend.dto.TherapySession.AddTherapySessionDTO;
import com.mindtalk.Backend.entity.AddTherapySession;
import com.mindtalk.Backend.entity.Appointments;
import com.mindtalk.Backend.repo.AddTherapySessionRepository;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AddTherapySessionService {
    @Autowired
    private AddTherapySessionRepository addTherapySessionRepository;

    @Autowired
    private ModelMapper modelMapper;

//    @Autowired
//    private ModelMapper modelMapper;

    public void addSession(Long id, String time, String date, String counsellors, String sessionType, String link) {

        AddTherapySession addTherapySession = new AddTherapySession();
        addTherapySession.setId(id);
        addTherapySession.setDate(date);
        addTherapySession.setTime(time);
        addTherapySession.setLink(link);
        addTherapySession.setCounsellors(counsellors);
        addTherapySession.setSessionType(sessionType);
        addTherapySessionRepository.save(addTherapySession);
    }

    public List<AddTherapySessionDTO> getAllTherapySession(){
        List<AddTherapySession> addTherapySessions = addTherapySessionRepository.findAll();
        return modelMapper.map(addTherapySessions, new TypeToken<List<AddTherapySessionDTO>>(){}.getType());
    }

}
