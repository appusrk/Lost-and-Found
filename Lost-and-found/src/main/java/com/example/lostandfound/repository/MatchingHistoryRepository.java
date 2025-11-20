package com.example.lostandfound.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.lostandfound.model.Found_items;
import com.example.lostandfound.model.Lost_items;
import com.example.lostandfound.model.Match_history;

public interface MatchingHistoryRepository extends JpaRepository<Match_history, Integer> {
	
	 List<Match_history> findByUser_Usn(String usn);
	 Optional<Match_history> findByLostItemAndFoundItem(Lost_items lost, Found_items found);
}
