package com.mindtalk.Backend.controller;

import com.mindtalk.Backend.dto.DocsDTO;
import com.mindtalk.Backend.entity.Docs;
import com.mindtalk.Backend.service.DocsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/docs")
public class DocsController {

    @Autowired
    private DocsService docsService;

    private final List<String> allowedOrigins;

    @Autowired
    public DocsController(@Value("#{'${app.cors.allowed-origins}'.split(',')}") List<String> allowedOrigins) {
        this.allowedOrigins = allowedOrigins;
    }

    @PostMapping("/send-docs")
    @CrossOrigin(origins = "${app.cors.allowed-origins}", allowCredentials = "true")
    public ResponseEntity<String> sendDocs(@RequestBody DocsDTO docsDTO) {
        int userId = docsDTO.getUserId();
        String docPath = docsDTO.getDocPath();

        docsService.saveDocs(userId, docPath);

        return ResponseEntity.ok("Docs uploaded successfully");

    }

    @GetMapping("/all/{user_id}")
    @CrossOrigin(origins = "${app.cors.allowed-origins}", allowCredentials = "true")
    public ResponseEntity<List<Docs>> getDocsByUserId(@PathVariable Integer user_id) {
        List<Docs> allDocs = docsService.getDocsByUserId(user_id);

        if (!allDocs.isEmpty()){
            return ResponseEntity.ok(allDocs);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/delete/{id}")
    @CrossOrigin(origins = "${app.cors.allowed-origins}", allowCredentials = "true")
    public ResponseEntity<String> deleteDoc(@PathVariable Integer id){
        boolean isDeleted = docsService.deleteDoc(id);

        if(isDeleted){
            return ResponseEntity.ok("Document deleted successfully");
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
