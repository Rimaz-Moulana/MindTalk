package com.mindtalk.Backend.controller.entertainment;

import com.mindtalk.Backend.dto.entertainment.BlogsDTO;
import com.mindtalk.Backend.entity.Client;
import com.mindtalk.Backend.entity.entertainment.BlogsEntity;
import com.mindtalk.Backend.service.entertainment.BlogsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.*;

@RestController
@RequestMapping("/api/blogs")
public class BlogsController {

    @Autowired
    private BlogsService blogsService;

    @PostMapping
    @CrossOrigin(origins = "http://localhost:5173", allowCredentials = "true")
    public ResponseEntity<BlogsEntity> createBlogs(@RequestBody BlogsDTO blogsDTO){
        BlogsEntity createdBlogs = blogsService.createBlogs(blogsDTO);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdBlogs);
    }

    @GetMapping("/{blogsId}")
    @CrossOrigin(origins = "http://localhost:5173", allowCredentials = "true")
    public ResponseEntity<BlogsEntity> getBlogsById(@PathVariable Integer blogsId){
        BlogsEntity blogs = blogsService.getBlogsById(blogsId);

        if(blogs != null){
            return ResponseEntity.ok(blogs);
        }else{
            return (ResponseEntity<BlogsEntity>) ResponseEntity.noContent();
        }
    }

    @GetMapping("/all")
    @CrossOrigin(origins = "http://localhost:5173", allowCredentials = "true")
    public ResponseEntity<List<BlogsEntity>> getAllBlogs(){
        List<BlogsEntity> allBlogs = blogsService.getAllBlogs();

        if(!allBlogs.isEmpty()){
            return ResponseEntity.ok(allBlogs);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PutMapping("/{blogsId}")
    @CrossOrigin(origins = "http://localhost:5173", allowCredentials = "true")
    public ResponseEntity<BlogsEntity> updateBlogs(
            @PathVariable Integer blogsId,
            @RequestBody BlogsDTO blogsDTO){
        BlogsEntity updatedBlogs = blogsService.updateBlogs(blogsId, blogsDTO);

        if(updatedBlogs != null){
            return ResponseEntity.ok(updatedBlogs);
        }else{
            return ResponseEntity.notFound().build();
        }
    }

    @PutMapping("/remove/{blogsId}")
    @CrossOrigin(origins = "http://localhost:5173", allowCredentials = "true")
    public ResponseEntity<BlogsEntity> removeBlogs(
            @PathVariable Integer blogsId,
            @RequestBody BlogsDTO blogsDTO){
        BlogsEntity removedBlogs = blogsService.removeBlogs(blogsId, blogsDTO);

        if(removedBlogs != null){
            return ResponseEntity.ok(removedBlogs);
        }else{
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{blogsId}")
    @CrossOrigin(origins = "http://localhost:5173", allowCredentials = "true")
    public ResponseEntity<BlogsEntity> deleteBlogs(@PathVariable Integer blogsId){
        boolean isDeleted = blogsService.deleteBlogs(blogsId);

        if(isDeleted){
            return ResponseEntity.ok().build();
        }else{
            return ResponseEntity.notFound().build();
        }
    }

    @PutMapping("/accept/{blogsId}")
    @CrossOrigin(origins = "http://localhost:5173", allowCredentials = "true")
    public ResponseEntity<BlogsEntity> acceptBlog(
            @PathVariable Integer blogsId) {
        BlogsEntity acceptedBlog = blogsService.acceptBlog(blogsId);
        if (acceptedBlog != null) {
            return ResponseEntity.ok(acceptedBlog);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PutMapping("/reject/{blogsId}")
    @CrossOrigin(origins = "http://localhost:5173", allowCredentials = "true")
    public ResponseEntity<BlogsEntity> rejectBlog(
            @PathVariable Integer blogsId) {
        BlogsEntity rejectedBlog = blogsService.rejectBlog(blogsId);
        if (rejectedBlog != null) {
            return ResponseEntity.ok(rejectedBlog);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping("/{blogsId}/coverImagePath")
    @CrossOrigin(origins = "http://localhost:5173", allowCredentials = "true")
    public ResponseEntity<String> getCoverImagePath(@PathVariable Integer blogsId, MultipartFile coverImage) {
        String coverImagePath = blogsService.uploadBlogCoverImage(blogsId, coverImage);

        if (coverImagePath != null) {
            return ResponseEntity.ok(coverImagePath);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PutMapping("/{blogsId}/updateProfilePhoto")
    @CrossOrigin(origins = "http://localhost:5173", allowCredentials = "true")
    public ResponseEntity<BlogsEntity> updateProfilePhoto(
            @PathVariable Integer blogsId,
            @RequestPart(required = false) MultipartFile coverImage) {

        if (coverImage != null) {
            String updatedProfilePhotoPath = blogsService.uploadBlogCoverImage(blogsId, coverImage);
            if (updatedProfilePhotoPath != null) {
                return ResponseEntity.ok(blogsService.getBlogsById(blogsId));
            }
        }

        return ResponseEntity.badRequest().build(); //Handle errors as needed
    }



}
