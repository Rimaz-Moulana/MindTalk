package com.mindtalk.Backend.service.entertainment;

//import com.example.mage.dto.BlogsDTO;
//import com.example.mage.dto.MageDTO;
//import com.example.mage.entity.BlogsEntity;
//import com.example.mage.entity.MageEntity;
//import com.example.mage.repo.BlogsRepo;
//import com.example.mage.util.VarList;
import com.mindtalk.Backend.dto.entertainment.BlogsDTO;
import com.mindtalk.Backend.entity.entertainment.BlogsEntity;
import com.mindtalk.Backend.repo.entertainment.BlogsRepo;
import com.mindtalk.Backend.util.VarList;
import jakarta.transaction.Transactional;
import org.modelmapper.ModelMapper;
//import org.modelmapper.TypeToken;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@Transactional
public class BlogsService {

    @Autowired
    private BlogsRepo blogsRepo;

    @Autowired
    private ModelMapper modelMapper;

    public String saveBlogs(BlogsDTO blogsDTO){
        if(blogsRepo.existsById(blogsDTO.getId())){
            return VarList.RSP_DUPLICATED;
        }else{
            blogsRepo.save(modelMapper.map(blogsDTO, BlogsEntity.class));
            return VarList.RSP_SUCCESS;
        }
    }

    public List<BlogsDTO> getAllBlogs(){
        List<BlogsEntity> blogsList = blogsRepo.findAll();
        return modelMapper.map(blogsList, new TypeToken<ArrayList<BlogsDTO>>(){}.getType());
    }

    public String updateBlogs(BlogsDTO blogsDTO){
        if(blogsRepo.existsById((blogsDTO.getId()))){
            blogsRepo.save(modelMapper.map(blogsDTO,BlogsEntity.class));
            return VarList.RSP_SUCCESS;
        }else{
            return VarList.RSP_NO_DATA_FOUND;
        }
    }

    public String deleteBlogs(Long Id) {
        if (blogsRepo.existsById(Id)) {
            blogsRepo.deleteById(Id);
            return VarList.RSP_SUCCESS;
        } else {
            return VarList.RSP_NO_DATA_FOUND;
        }
    }
}
