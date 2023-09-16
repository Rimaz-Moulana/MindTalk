package com.mindtalk.Backend.controller.entertainment;

//import com.example.tests.dto.MeditationDTO;
//import com.example.tests.entity.Meditation;
//import com.example.tests.service.MeditationService;
import com.mindtalk.Backend.dto.entertainment.MeditationDTO;
import com.mindtalk.Backend.entity.entertainment.Meditation;
import com.mindtalk.Backend.service.entertainment.MeditationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("api/testing/meditation")
public class MeditationController {

    @Autowired
    private MeditationService meditationService;

    @PostMapping
    @CrossOrigin(origins = "http://localhost:5173", allowCredentials = "true")
    public ResponseEntity<Meditation> createMeditation(@RequestBody MeditationDTO meditationDTO){
        Meditation createdMeditation = meditationService.createMeditation(meditationDTO);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdMeditation);
    }

    @GetMapping("/all")
    @CrossOrigin(origins = "http://localhost:5173", allowCredentials = "true")
    public ResponseEntity<List<Meditation>> getAllMeditation(){
        List<Meditation> allMeditation = meditationService.getAllMeditation();

        if(!allMeditation.isEmpty()){
            return ResponseEntity.ok(allMeditation);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping("/{meditationId}")
    public ResponseEntity<Meditation> getMeditationById(@PathVariable Integer meditationId){
        Meditation meditation = meditationService.getMeditationById(meditationId);

        if (meditation != null ){
            return ResponseEntity.ok(meditation);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PutMapping("/{meditationId}")
    public ResponseEntity<Meditation> updateMeditation(
            @PathVariable Integer meditationId,
            @RequestBody MeditationDTO meditationDTO){
        Meditation updatedMeditation = meditationService.updateMeditation(meditationId, meditationDTO);

        if(updatedMeditation != null ){
            return ResponseEntity.ok(updatedMeditation);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{meditationId}")
    public ResponseEntity<Void> deleteMeditation(@PathVariable Integer meditationId){
        boolean isDeleted = meditationService.deleteMeditation(meditationId);

        if (isDeleted){
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
