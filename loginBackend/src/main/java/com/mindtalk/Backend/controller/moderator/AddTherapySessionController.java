package com.mindtalk.Backend.controller.moderator;

import com.mindtalk.Backend.dto.TherapySession.AddTherapySessionDTO;
import com.mindtalk.Backend.service.AddTherapySessionService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/moderator/add")
public class AddTherapySessionController {

    private AddTherapySessionService addTherapySessionService;

    @PostMapping("/therapySession")
    @CrossOrigin(origins = "http://127.0.0.1:5173",allowCredentials = "true")
    public ResponseEntity<String> addTherapySession(@RequestBody AddTherapySessionDTO addTherapySessionDTO){
        Long id = addTherapySessionDTO.getId();
        String date = addTherapySessionDTO.getDate();
        String time = addTherapySessionDTO.getTime();
        String link = addTherapySessionDTO.getLink();
        String counsellors = addTherapySessionDTO.getCounsellors();
        String sessionType = addTherapySessionDTO.getSessionType();

        addTherapySessionService.addSession(id,date,time,link,counsellors,sessionType);
        return ResponseEntity.ok("adding succesfull");
    }
}
