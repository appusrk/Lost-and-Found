package com.example.lostandfound.services;

import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import com.example.lostandfound.model.*;
import com.example.lostandfound.repository.*;

@Component
public class MatchAllExistingItemsRunner implements CommandLineRunner {

    private final MatchingServices matchingServices;
    private final LostItemRepository lostRepo;
    private final FoundItemRepository foundRepo;

    public MatchAllExistingItemsRunner(MatchingServices matchingServices,
                                      LostItemRepository lostRepo,
                                      FoundItemRepository foundRepo) {
        this.matchingServices = matchingServices;
        this.lostRepo = lostRepo;
        this.foundRepo = foundRepo;
    }

    @Override
    public void run(String... args) throws Exception {
        System.out.println("🔄 Running one-time matching for all existing items...");

        // Match all lost items with found items
        for (Lost_items lost : lostRepo.findAll()) {
            matchingServices.findMatchesForLost(lost);
        }

        // Match all found items with lost items
        for (Found_items found : foundRepo.findAll()) {
            matchingServices.findMatchesForFound(found);
        }

        System.out.println("✅ Done processing existing items for matches!");
    }
}

