package com.mindtalk.Backend.service.entertainment;

import com.mindtalk.Backend.dto.entertainment.BlogsDTO;
import com.mindtalk.Backend.entity.entertainment.BlogsEntity;
import com.mindtalk.Backend.repo.entertainment.BlogsRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class BlogsService {

    @Autowired
    private BlogsRepo blogsRepo;


    public BlogsEntity createBlogs(BlogsDTO blogsDTO){
        BlogsEntity blogsEntity = new BlogsEntity();
        blogsEntity.setTitle(blogsDTO.getCategory());
        blogsEntity.setCategory(blogsDTO.getCategory());
        blogsEntity.setContent(blogsDTO.getContent());

        return blogsRepo.save(blogsEntity);
    }


}
