package com.mindtalk.Backend.service.entertainment;

import com.mindtalk.Backend.dto.entertainment.MusicDTO;
import com.mindtalk.Backend.entity.entertainment.Music;
import com.mindtalk.Backend.repo.entertainment.MusicRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MusicService {

    @Autowired
    private MusicRepo musicRepo;

    public Music createMusic(MusicDTO musicDTO){
        Music music = new Music();
        music.setStatus(musicDTO.getStatus());
        music.setTitle(musicDTO.getTitle());
        music.setCategory(musicDTO.getCategory());
        music.setDescription(musicDTO.getDescription());
        music.setLink(musicDTO.getLink());

        return musicRepo.save(music);
    }

    public Music getMusicById(Integer musicId) {
        return musicRepo.findById(musicId).orElse(null);
    }

    public List<Music> getAllMusic(){
        return musicRepo.findAll();
    }

    public Music updateMusic(Integer musicId, MusicDTO musicDTO){
        Music existingMusic = musicRepo.findById(musicId).orElse(null);

        if(existingMusic != null){
            existingMusic.setTitle(musicDTO.getTitle());
//            existingMusic.setStatus(musicDTO.getStatus());
            existingMusic.setCategory(musicDTO.getCategory());
            existingMusic.setDescription(musicDTO.getDescription());
            existingMusic.setLink(musicDTO.getLink());
            return musicRepo.save(existingMusic);
        }
        return null; //Music not found
    }

    public Music removeMusic(Integer musicId, MusicDTO musicDTO){
        Music existingMusic = musicRepo.findById(musicId).orElse(null);

        if(existingMusic != null) {
            existingMusic.setStatus(musicDTO.getStatus());
            return musicRepo.save(existingMusic);
        }
        return null;
    }

    public boolean deleteMusic(Integer musicId){
        Music existingMusic = musicRepo.findById(musicId).orElse(null);

        if(existingMusic != null){
            existingMusic.setStatus(false); // Set status to false
            musicRepo.save(existingMusic); // Save the updated music entity
            return true; // Music status updated
        }
        return false; //Music not deleted
    }
}
