package com.mindtalk.Backend.service;

import com.mindtalk.Backend.entity.AddTherapySession;
import com.mindtalk.Backend.repo.AddTherapySessionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AddTherapySessionService {
    @Autowired
    private AddTherapySessionRepository addTherapySessionRepository;

    public void addSession(Long id,String time,String date,String counsellors,String sessionType,String link){
        AddTherapySession addTherapySession = new AddTherapySession();
        addTherapySession.setId(id);
        addTherapySession.setDate(date);
        addTherapySession.setTime(time);
        addTherapySession.setLink(link);
        addTherapySession.setCounsellors(counsellors);
        addTherapySession.setSessionType(sessionType);
        addTherapySessionRepository.save(addTherapySession);
    }
}
