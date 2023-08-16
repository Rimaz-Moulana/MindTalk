package com.mindtalk.Backend.service;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class EmailService {

    @Value("${elasticemail.api.key}")
    private String elasticEmailApiKey;

    private static final String ELASTIC_EMAIL_API_BASE_URL = "https://api.elasticemail.com/v2/";

    public void sendEmail(String to, String subject, String content) {
        String endpoint = "email/send";

        String requestBody = String.format(
                "apikey=%s&subject=%s&from=mindtalk756@gmail.com&to=%s&bodyHtml=%s",
                elasticEmailApiKey, subject, to, content
        );

        String apiUrl = ELASTIC_EMAIL_API_BASE_URL + endpoint;

        RestTemplate restTemplate = new RestTemplate();
        String response = restTemplate.postForObject(apiUrl, requestBody, String.class);

        // You can handle the API response here if needed
    }
}
