package com.mindtalk.Backend.service;

import java.io.IOException;

import com.mindtalk.Backend.entity.Image;
import com.mindtalk.Backend.repo.ImageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;



@Service
public class ImageService {
    @Autowired
    private ImageRepository imageRepository;

    public String saveImage(MultipartFile file, String name, String description) throws IOException {
        Image image = new Image();
        image.setImage(file.getBytes());
        imageRepository.save(image);
        return "Image saved in DB";
    }
}
