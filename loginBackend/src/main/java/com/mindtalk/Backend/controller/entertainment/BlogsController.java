package com.mindtalk.Backend.controller.entertainment;

//import com.example.mage.dto.BlogsDTO;
//import com.example.mage.dto.MageDTO;
//import com.example.mage.dto.ResponseDTO;
//import com.example.mage.entity.BlogsEntity;
//import com.example.mage.service.BlogsService;
import com.mindtalk.Backend.dto.ResponseDTO;
import com.mindtalk.Backend.dto.entertainment.BlogsDTO;
import com.mindtalk.Backend.entity.entertainment.BlogsEntity;
import com.mindtalk.Backend.service.entertainment.BlogsService;
import com.mindtalk.Backend.util.VarList;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

//@CrossOrigin
@RestController
@RequestMapping(value = "api/blogs")
public class BlogsController {

    @Autowired
    private BlogsService blogsService;

    @Autowired
    private ResponseDTO responseDTO;

    @PostMapping(value = "/save")
    @CrossOrigin(origins = "http://localhost:5173", allowCredentials = "true")
    public ResponseEntity saveBlogs(@RequestBody BlogsDTO blogsDTO){
        try{
            String res = blogsService.saveBlogs(blogsDTO);
            if(res.equals("00")){
                responseDTO.setCode(VarList.RSP_SUCCESS);
                responseDTO.setMessage("Success");
                responseDTO.setContent(blogsDTO);
                return new ResponseEntity(responseDTO, HttpStatus.ACCEPTED);
            }else{
                responseDTO.setCode(VarList.RSP_FAIL);
                responseDTO.setMessage("Fail");
                responseDTO.setContent(null);
                return new ResponseEntity(responseDTO, HttpStatus.BAD_REQUEST);
            }
        }catch (Exception ex){
            responseDTO.setCode(VarList.RSP_ERROR);
            responseDTO.setMessage(ex.getMessage());
            responseDTO.setContent(null);
            return new ResponseEntity(responseDTO, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping(value = "/view")
    @CrossOrigin(origins = "http://localhost:5173", allowCredentials = "true")
    public ResponseEntity <List<BlogsEntity>> getAllBlogs(){
        try {
            List<BlogsEntity> allBlogs = blogsService.getAllBlogs();
            responseDTO.setCode(VarList.RSP_SUCCESS);
            responseDTO.setMessage("Success");
            responseDTO.setContent(allBlogs);
            return  ResponseEntity.ok(allBlogs);

        }catch (Exception ex){
            responseDTO.setCode(VarList.RSP_ERROR);
            responseDTO.setMessage(ex.getMessage());
            responseDTO.setContent(null);
            return new ResponseEntity(responseDTO, HttpStatus.INTERNAL_SERVER_ERROR);

        }
    }

//    @PutMapping(value = "/update")
//    @CrossOrigin(origins = "http://localhost:5173", allowCredentials = "true")
//    public ResponseEntity updateBlogs(@RequestBody BlogsDTO blogsDTO){
//        try {
//            String res=blogsService.updateBlogs(blogsDTO);
//            if (res.equals("00")){
//                responseDTO.setCode(VarList.RSP_SUCCESS);
//                responseDTO.setMessage("Success");
//                responseDTO.setContent(blogsDTO);
//                return new ResponseEntity(responseDTO, HttpStatus.ACCEPTED);
//
//            }else if(res.equals("01")) {
//                responseDTO.setCode(VarList.RSP_DUPLICATED);
//                responseDTO.setMessage("Not A Registered Employee");
//                responseDTO.setContent(blogsDTO);
//                return new ResponseEntity(responseDTO, HttpStatus.BAD_REQUEST);
//            }else {
//                responseDTO.setCode(VarList.RSP_FAIL);
//                responseDTO.setMessage("Error");
//                responseDTO.setContent(null);
//                return new ResponseEntity(responseDTO, HttpStatus.BAD_REQUEST);
//            }
//
//        }catch (Exception ex){
//            responseDTO.setCode(VarList.RSP_ERROR);
//            responseDTO.setMessage(ex.getMessage());
//            responseDTO.setContent(null);
//            return new ResponseEntity(responseDTO, HttpStatus.INTERNAL_SERVER_ERROR);
//
//        }
//
//    }

    @DeleteMapping("/delete/{Id}")
    @CrossOrigin(origins = "http://localhost:5173", allowCredentials = "true")
    public ResponseEntity deleteBlogs(@PathVariable Long Id){
        try {
            String res = blogsService.deleteBlogs(Id);
            if (res !=null) {
                responseDTO.setCode(VarList.RSP_SUCCESS);
                responseDTO.setMessage("Success");
                responseDTO.setContent(null);
                return new ResponseEntity(responseDTO, HttpStatus.ACCEPTED);
            } else {
                responseDTO.setCode(VarList.RSP_NO_DATA_FOUND);
                responseDTO.setMessage("No Blogs to Delete!");
                responseDTO.setContent(null);
                return new ResponseEntity(responseDTO, HttpStatus.BAD_REQUEST);
            }
        } catch (Exception e) {
            responseDTO.setCode(VarList.RSP_ERROR);
            responseDTO.setMessage(e.getMessage());
            responseDTO.setContent(e);
            return new ResponseEntity(responseDTO, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
