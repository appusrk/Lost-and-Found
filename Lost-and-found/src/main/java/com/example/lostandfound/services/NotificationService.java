package com.example.lostandfound.services;

import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import org.springframework.http.*;

import java.util.HashMap;
import java.util.Map;

@Service
public class NotificationService {

    private final RestTemplate restTemplate = new RestTemplate();
    private final String flaskUrl = "http://127.0.0.1:5000/notify";

    public void sendWhatsAppNotification(String to, String message) {
        try {
            // Create headers and set Content-Type to application/json
            HttpHeaders headers = new HttpHeaders();
            headers.setContentType(MediaType.APPLICATION_JSON);

            // Create payload
            Map<String, String> payload = new HashMap<>();
            payload.put("to", to);
            payload.put("message", message);

            // Wrap payload and headers into an HttpEntity
            HttpEntity<Map<String, String>> request = new HttpEntity<>(payload, headers);

            // Send POST request
            ResponseEntity<String> response =
                    restTemplate.postForEntity(flaskUrl, request, String.class);

            System.out.println("📩 Flask response: " + response.getBody());
        } catch (Exception e) {
            System.err.println("❌ Failed to notify Flask: " + e.getMessage());
            e.printStackTrace();
        }
    }
}
