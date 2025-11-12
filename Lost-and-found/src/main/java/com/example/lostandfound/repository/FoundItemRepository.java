package com.example.lostandfound.repository;

import com.example.lostandfound.model.Found_items;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FoundItemRepository extends JpaRepository<Found_items, Integer> {
	List<Found_items> findByUser_Usn(String usn);

    
}
