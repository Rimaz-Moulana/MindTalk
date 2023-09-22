package com.mindtalk.Backend.controller.entertainment;

import com.mindtalk.Backend.dto.entertainment.MusicDTO;
import com.mindtalk.Backend.entity.entertainment.Music;
import com.mindtalk.Backend.service.entertainment.MusicService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

//@CrossOrigin
@RestController
@RequestMapping("/api/testing/music")
public class MusicController {

    @Autowired
    private MusicService musicService;

    @PostMapping
    @CrossOrigin(origins = "http://localhost:5173", allowCredentials = "true")
    public ResponseEntity<Music> createMusic(@RequestBody MusicDTO musicDTO){
        Music createdMusic = musicService.createMusic(musicDTO);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdMusic);
    }

    @GetMapping("/{musicId}")
    @CrossOrigin(origins = "http://localhost:5173", allowCredentials = "true")
    public ResponseEntity<Music> getMusicById(@PathVariable Integer musicId){
        Music music = musicService.getMusicById(musicId);

        if(music != null){
            return ResponseEntity.ok(music);
        }else{
            return (ResponseEntity<Music>) ResponseEntity.noContent();
        }
    }

    @GetMapping("/all")
    @CrossOrigin(origins = "http://localhost:5173", allowCredentials = "true")
    public ResponseEntity<List<Music>> getAllMusic(){
        List<Music> allMusic = musicService.getAllMusic();

        if(!allMusic.isEmpty()){
            return ResponseEntity.ok(allMusic);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PutMapping("/{musicId}")
    @CrossOrigin(origins = "http://localhost:5173", allowCredentials = "true")
    public ResponseEntity<Music> updateMusic(
            @PathVariable Integer musicId,
            @RequestBody MusicDTO musicDTO){
        Music updatedMusic = musicService.updateMusic(musicId, musicDTO);

        if(updatedMusic != null){
            return ResponseEntity.ok(updatedMusic);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

//    @PutMapping("/remove/{musicId}")
//    @CrossOrigin(origins = "http://localhost:5173", allowCredentials = "true")
//    public  ResponseEntity<Music> removeMusic(
//            @PathVariable Integer musicId,
//            @RequestBody MusicDTO musicDTO) {
//        Music removedMusic = musicService.removeMusic(musicId, musicDTO);
//
//        if (removedMusic != null) {
//            return ResponseEntity.ok(removedMusic);
//        } else {
//            return ResponseEntity.notFound().build();
//        }
//    }

    @DeleteMapping("/{musicId}")
    @CrossOrigin(origins = "http://localhost:5173", allowCredentials = "true")
    public ResponseEntity<Void> deleteMusic(@PathVariable Integer musicId){
        boolean isUpdated = musicService.deleteMusic(musicId);

        if (isUpdated) {
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }

}
