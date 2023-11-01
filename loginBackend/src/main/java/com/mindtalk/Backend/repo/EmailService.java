package com.mindtalk.Backend.repo;

import com.mindtalk.Backend.entity.EmailDetails;

public interface EmailService {

// Java Program to Illustrate Creation Of
// Service Interface

// Interface


    // Method
    // To send a simple email
    String sendSimpleMail(EmailDetails details);

    // Method
    // To send an email with attachment
    String sendMailWithAttachment(EmailDetails details);
}
