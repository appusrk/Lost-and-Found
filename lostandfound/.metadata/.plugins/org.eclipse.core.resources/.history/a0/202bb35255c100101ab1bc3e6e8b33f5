package com.example.lostandfound.controller;

import com.example.lostandfound.model.*;
import com.example.lostandfound.repository.FoundItemRepository;
import com.example.lostandfound.repository.LostItemRepository;
import com.example.lostandfound.services.MatchingServices;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/lost")
public class LostItemController {

	
    private final LostItemRepository lostItemRepository;
    private final MatchingServices matchingServices; 

    public LostItemController(LostItemRepository lostItemRepository,
                              MatchingServices matchingServices) {
        this.lostItemRepository = lostItemRepository;
        this.matchingServices = matchingServices;
    }

    // Get all lost items
    @GetMapping
    public List<Lost_items> getAllLostItems() {
        return lostItemRepository.findAll();
    }

    // Get lost item by ID
    @GetMapping("/{id}")
    public Optional<Lost_items> getLostItemById(@PathVariable int id) {
        return lostItemRepository.findById(id);
    }

    // Add a lost item
    @PostMapping
    public Lost_items addLostItem(@RequestBody Lost_items lostItem) {
      Lost_items save= lostItemRepository.save(lostItem);
        List<Found_items> matches = matchingServices.findMatchesForLost(save);

        if (!matches.isEmpty()) {
            System.out.println("Possible matches for lost item " + save.getItemName() + ":");
            matches.forEach(l -> 
                System.out.println("Found ID: " + l.getId() + 
                                   ", Location: " + l.getLocation() +
                                   ", Description: " + l.getDescription()));
        }

        return save;

    }
 // Get found items for a specific user (by USN)
    @GetMapping("/user/{usn}")
    public List<Lost_items> getLostItemsByUser(@PathVariable String usn) {
        return lostItemRepository.findByUser_Usn(usn);
    }

    // Delete lost item
    @DeleteMapping("/{id}")
    public void deleteLostItem(@PathVariable int id) {
        lostItemRepository.deleteById(id);
    }
}
