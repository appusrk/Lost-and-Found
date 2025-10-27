package com.example.lostandfound.controller;

import com.example.lostandfound.model.Found_items;
import com.example.lostandfound.model.Lost_items;
import com.example.lostandfound.services.*;
import com.example.lostandfound.repository.FoundItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/found")
public class FoundItemController {

	
	    private final FoundItemRepository foundItemRepository;
	    private final MatchingServices matchingServices; 

	    public FoundItemController(FoundItemRepository foundItemRepository,
	                              MatchingServices matchingServices) {
	        this.foundItemRepository = foundItemRepository;
	        this.matchingServices = matchingServices;
	    }

    // Get all found items
    @GetMapping
    public List<Found_items> getAllFoundItems() {
        return foundItemRepository.findAll();
    }

    // Get found item by ID
    @GetMapping("/{id}")
    public Optional<Found_items> getFoundItemById(@PathVariable int id) {
        return foundItemRepository.findById(id);
    }

    // Add a found item
    @PostMapping
    public Found_items addFoundItem(@RequestBody Found_items foundItem) {
    	Found_items saved= foundItemRepository.save(foundItem);
    	List<Lost_items> matches = matchingServices.findMatchesForFound(saved);

        if (!matches.isEmpty()) {
            System.out.println("Possible matches for found item " + saved.getItemName() + ":");
            matches.forEach(l -> 
                System.out.println("Lost ID: " + l.getId() + 
                                   ", Location: " + l.getLocation() +
                                   ", Description: " + l.getDescription()));
        }

        return saved;
    }

    // Delete found item
    @DeleteMapping("/{id}")
    public void deleteFoundItem(@PathVariable int id) {
        foundItemRepository.deleteById(id);
    }
}
