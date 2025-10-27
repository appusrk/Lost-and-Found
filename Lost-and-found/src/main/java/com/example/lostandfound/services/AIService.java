package com.example.lostandfound.services;

import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import java.util.Map;

@Service
public class AIService {

    private final RestTemplate restTemplate;

    public AIService() {
        this.restTemplate = new RestTemplate();
    }

    // Call the Flask service to get embeddings
    public float[] getImageEmbedding(String imageUrl) {
        try {
            String flaskUrl = "http://127.0.0.1:5000/embed"; // Flask endpoint
            Map<String, String> request = Map.of("image_url", imageUrl);

            // Flask returns a JSON like {"embedding": [0.123, 0.456, ...]}
            Map<String, Object> response = restTemplate.postForObject(flaskUrl, request, Map.class);
            if (response != null && response.get("embedding") != null) {
                var list = (java.util.List<Double>) response.get("embedding");
                float[] embedding = new float[list.size()];
                for (int i = 0; i < list.size(); i++) embedding[i] = list.get(i).floatValue();
                return embedding;
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        return null;
    }

    // Cosine similarity
    public double cosineSimilarity(float[] vec1, float[] vec2) {
        if (vec1 == null || vec2 == null || vec1.length != vec2.length) return 0.0;

        double dot = 0.0, normA = 0.0, normB = 0.0;
        for (int i = 0; i < vec1.length; i++) {
            dot += vec1[i] * vec2[i];
            normA += vec1[i] * vec1[i];
            normB += vec2[i] * vec2[i];
        }

        double denom = Math.sqrt(normA) * Math.sqrt(normB);
        if (denom == 0.0) return 0.0;

        return dot / denom;
    }

}
