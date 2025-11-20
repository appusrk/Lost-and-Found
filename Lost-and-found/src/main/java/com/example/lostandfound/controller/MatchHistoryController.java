package com.example.lostandfound.controller;

import org.springframework.web.bind.annotation.*;
import com.example.lostandfound.model.Match_history;
import com.example.lostandfound.repository.MatchingHistoryRepository;
import java.util.List;

@RestController
@RequestMapping("/api/matches")
public class MatchHistoryController {

    private final MatchingHistoryRepository matchRepo;

    public MatchHistoryController(MatchingHistoryRepository matchRepo) {
        this.matchRepo = matchRepo;
    }

    @GetMapping("/user/{usn}")
    public List<Match_history> getMatchesByUser(@PathVariable String usn) {
        return matchRepo.findByUser_Usn(usn);
    }
}


