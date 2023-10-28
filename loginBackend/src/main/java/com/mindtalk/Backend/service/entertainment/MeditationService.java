package com.mindtalk.Backend.service.entertainment;

//import com.example.tests.dto.MeditationDTO;
//import com.example.tests.entity.Meditation;
//import com.example.tests.repo.MeditationRepo;
import com.mindtalk.Backend.dto.entertainment.MeditationDTO;
import com.mindtalk.Backend.entity.entertainment.Meditation;
import com.mindtalk.Backend.repo.entertainment.MeditationRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MeditationService {

    @Autowired
    private MeditationRepo meditationRepo;

    public Meditation createMeditation(MeditationDTO meditationDTO){
        Meditation meditation = new Meditation();
        meditation.setStatus(meditationDTO.getStatus());
        meditation.setTitle(meditationDTO.getTitle());
        meditation.setCategory(meditationDTO.getCategory());
        meditation.setDescription(meditationDTO.getDescription());
        meditation.setLink(meditationDTO.getLink());

        return meditationRepo.save(meditation);
    }

    public Meditation getMeditationById(Integer meditationId) {
        return meditationRepo.findById(meditationId).orElse(null);
    }

    public List<Meditation> getAllMeditation(){
        return meditationRepo.findAll();
    }

    public Meditation updateMeditation(Integer meditationId, MeditationDTO meditationDTO){
        Meditation existingMeditation = meditationRepo.findById(meditationId).orElse(null);

        if (existingMeditation != null){
            existingMeditation.setTitle(meditationDTO.getTitle());
            existingMeditation.setCategory(meditationDTO.getCategory());
            existingMeditation.setDescription(meditationDTO.getDescription());
            existingMeditation.setLink(meditationDTO.getLink());
            return meditationRepo.save(existingMeditation);
        }
        return null; //meditation not found
    }

    public boolean deleteMeditation(Integer meditationId){
        Meditation existingMeditation = meditationRepo.findById(meditationId).orElse(null);

        if (existingMeditation != null){
            existingMeditation.setStatus(false); //set the status to false
            meditationRepo.save(existingMeditation); //save the updated meditation entity
            return true; // meditation status updated
        }
        return false; //meditation not deleted
    }

}
