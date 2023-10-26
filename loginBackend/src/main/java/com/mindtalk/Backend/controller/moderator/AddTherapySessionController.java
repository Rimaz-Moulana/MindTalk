package com.mindtalk.Backend.controller.moderator;

import com.mindtalk.Backend.dto.TherapySession.AddTherapySessionDTO;
import com.mindtalk.Backend.entity.AddTherapySession;
import com.mindtalk.Backend.repo.AddTherapySessionRepository;
import com.mindtalk.Backend.service.AddTherapySessionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/moderator")
public class AddTherapySessionController {

    @Autowired
    private AddTherapySessionService addTherapySessionService;
    private final List<String> allowedOrigins;

    public AddTherapySessionController(@Value("#{'${app.cors.allowed-origins}'.split(',')}") List<String> allowedOrigins) {
        this.allowedOrigins = allowedOrigins;
    }

    @PostMapping("/addtherapySession")
    @CrossOrigin(origins = "${app.cors.allowed-origins}",allowCredentials = "true")
    public ResponseEntity<String> addTherapySession(@RequestBody AddTherapySessionDTO addTherapySessionDTO){
        try {
            Long id = addTherapySessionDTO.getId();
            String date = addTherapySessionDTO.getDate();
            String time = addTherapySessionDTO.getTime();
            String link = addTherapySessionDTO.getLink();
            String counsellors = addTherapySessionDTO.getCounsellors();
            String sessionType = addTherapySessionDTO.getSessionType();

            addTherapySessionService.addSession(id, date, time, link, counsellors, sessionType);
            return ResponseEntity.ok("adding successfully");
        }catch(Exception e){
            return ResponseEntity.status(500).body("An error occurred");
        }
    }

    @GetMapping("/getSession")
    @CrossOrigin(origins = "${app.cors.allowed-origins}",allowCredentials = "true")
    public List<AddTherapySessionDTO> getAllSession(){
        return addTherapySessionService.getAllTherapySession();
    }
}
