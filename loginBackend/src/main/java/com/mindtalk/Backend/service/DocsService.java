package com.mindtalk.Backend.service;

import com.mindtalk.Backend.entity.Docs;
import com.mindtalk.Backend.repo.ClientRepo;
import com.mindtalk.Backend.repo.DocsRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

@Service
public class DocsService {

    @Autowired
    private DocsRepo docsRepo;

    @Autowired
    private ClientRepo clientRepo;

    public void saveDocs(Integer userId, String docPath) {
        Docs docs = new Docs();
        docs.setUserId(userId);
        docs.setDocPath(docPath);
        docs.setTimestamp(new Date());

        docsRepo.save(docs);

    }

    public List<Docs> getDocsByUserId(Integer user_id){
        // Use the userId to retrieve all records with the given userId
        List<Docs> docsList = docsRepo.findAllByUserId(user_id);

        //sort the docs by timestamp in descending order
        docsList.sort((doc1, doc2) -> doc2.getTimestamp().compareTo(doc1.getTimestamp()));

        return docsList;
    }

    public boolean deleteDoc(Integer id) {
        Docs existingDoc = docsRepo.findById(id).orElse(null);

        if (existingDoc != null){
            docsRepo.delete(existingDoc);
            return true; //doc deleted
        }
        return false; //doc not deleted
    }
}
