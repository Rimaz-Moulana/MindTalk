package com.mindtalk.Backend.service.entertainment;

import com.mindtalk.Backend.dto.entertainment.BlogsDTO;
import com.mindtalk.Backend.entity.entertainment.BlogsEntity;
import com.mindtalk.Backend.repo.entertainment.BlogsRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BlogsService {

    @Autowired
    private BlogsRepo blogsRepo;


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
}
