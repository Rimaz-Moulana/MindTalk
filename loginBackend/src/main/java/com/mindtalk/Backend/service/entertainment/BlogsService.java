package com.mindtalk.Backend.service.entertainment;

import com.mindtalk.Backend.dto.entertainment.BlogsDTO;
import com.mindtalk.Backend.entity.Client;
import com.mindtalk.Backend.entity.entertainment.BlogsEntity;
import com.mindtalk.Backend.repo.entertainment.BlogsRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.util.List;

@Service
public class BlogsService {

    @Autowired
    private BlogsRepo blogsRepo;

    @Value("${cover.image.upload.path}")
    private String coverImageUploadPath;


    public BlogsEntity createBlogs(BlogsDTO blogsDTO){
        BlogsEntity blogsEntity = new BlogsEntity();
        blogsEntity.setTitle(blogsDTO.getTitle());
        blogsEntity.setCategory(blogsDTO.getCategory());
        blogsEntity.setContent(blogsDTO.getContent());

        return blogsRepo.save(blogsEntity);
    }


    public BlogsEntity getBlogsById(Integer blogsId) {
        return blogsRepo.findById(blogsId).orElse(null);
    }

    public List<BlogsEntity> getAllBlogs(){
        return blogsRepo.findAll();
    }

    public BlogsEntity updateBlogs(Integer blogsId, BlogsDTO blogsDTO){
        BlogsEntity existingBlogs = blogsRepo.findById(blogsId).orElse(null);

        if(existingBlogs != null){
            existingBlogs.setTitle(blogsDTO.getTitle());
            existingBlogs.setCategory(blogsDTO.getCategory());
            existingBlogs.setContent(blogsDTO.getContent());
            return blogsRepo.save(existingBlogs);
        }
        return null; //Blogs not found
    }

    public BlogsEntity removeBlogs(Integer blogsId, BlogsDTO blogsDTO){
        BlogsEntity existingBlogs = blogsRepo.findById(blogsId).orElse(null);

        if(existingBlogs != null) {
            existingBlogs.setStatus(blogsDTO.getStatus());
            return blogsRepo.save(existingBlogs);
        }
        return null;
    }

    public boolean deleteBlogs(Integer blogsId){
        BlogsEntity existingBlogs = blogsRepo.findById(blogsId).orElse(null);

        if(existingBlogs != null){
            blogsRepo.delete(existingBlogs);
            return true;
        }
        return false;
    }

    public BlogsEntity acceptBlog(Integer blogsId) {
        BlogsEntity existingBlog = blogsRepo.findById(blogsId).orElse(null);

        if (existingBlog != null) {
            existingBlog.setStatus(1); // Change the status to 1 to accept the blog
            return blogsRepo.save(existingBlog);
        }
        return null; // Blog not found
    }

    public BlogsEntity rejectBlog(Integer blogsId) {
        BlogsEntity existingBlog = blogsRepo.findById(blogsId).orElse(null);

        if (existingBlog != null) {
            existingBlog.setStatus(2); // Change the status to 2 to reject the blog
            return blogsRepo.save(existingBlog);
        }
        return null; // Blog not found
    }

    public String uploadBlogCoverImage(Integer blogId, MultipartFile coverImage) {

        // Find the client by user_id
        BlogsEntity existingBlog = blogsRepo.findById(blogId).orElse(null);


        if (existingBlog != null) {
            // Delete the existing cover image if it exists
            if (existingBlog.getCoverImagePath() != null) {
                Path existingImagePath = Paths.get(coverImageUploadPath, existingBlog.getCoverImagePath());
                try {
                    Files.deleteIfExists(existingImagePath);
                } catch (IOException e) {
                    e.printStackTrace(); // Handle the exception if necessary
                }
            }

            // Handle the new cover image
            if (coverImage != null && !coverImage.isEmpty()) {
                try {
                    // Save the new cover image to a local file
                    String fileName = System.currentTimeMillis() + "_" + coverImage.getOriginalFilename();
                    Path filePath = Paths.get(coverImageUploadPath, fileName);
                    Files.copy(coverImage.getInputStream(), filePath, StandardCopyOption.REPLACE_EXISTING);

                    // Set the new cover image path in the blog entity
                    existingBlog.setCoverImagePath(fileName);

                    // Save the updated blog to update the cover image path
                    blogsRepo.save(existingBlog);

                    return fileName; // Return the new cover image path
                } catch (IOException e) {
                    e.printStackTrace(); // Handle the exception
                }
            }
        }

        return null; // Blog not found or cover image not updated

    }


}
