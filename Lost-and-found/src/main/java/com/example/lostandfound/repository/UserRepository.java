
package com.example.lostandfound.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.lostandfound.model.Lost_items;
import com.example.lostandfound.model.Users;

public interface UserRepository extends JpaRepository<Users, Integer>{
	Users findByUsn(String usn);

	Users findByEmail(String email);

}
