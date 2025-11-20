package com.example.lostandfound.model;

import jakarta.persistence.*;
import java.time.LocalDate;
import java.time.LocalDateTime;

@Entity
@Table(name = "found_items")
public class Found_items {
	

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "item_name", nullable = false)
    private String itemName;

    private String description;

    private String location;

    @Column(name = "image_url")
    private String imageUrl;

    @Column(name = "image_embedding", columnDefinition = "JSON")
    private String imageEmbedding;

    @Column(name = "email")
    private String email;
    
    @Column(name = "image_hash")
    private String imageHash;    

    @ManyToOne
    @JoinColumn(name = "USN", referencedColumnName = "USN", nullable = false)
    private Users user;


	public Users getUser() {
		return user;
	}

	public void setUser(Users user) {
		this.user = user;
	}

	public String getImageEmbedding() {
		return imageEmbedding;
	}

	public void setImageEmbedding(String imageEmbedding) {
		this.imageEmbedding = imageEmbedding;
	}

	public String getImageHash() {
		return imageHash;
	}

	public void setImageHash(String imageHash) {
		this.imageHash = imageHash;
	}


	public String getEmail() {
		return email;
	}


	public void setEmail(String contact) {
		this.email = contact;
	}


	public Found_items() {
		
	}


	public int getId() {
		return id;
	}


	public void setId(int id) {
		this.id = id;
	}


	public String getItemName() {
		return itemName;
	}


	public void setItemName(String itemName) {
		this.itemName = itemName;
	}


	public String getDescription() {
		return description;
	}


	public void setDescription(String description) {
		this.description = description;
	}


	public String getLocation() {
		return location;
	}


	public void setLocation(String location) {
		this.location = location;
	}


	public String getImageUrl() {
		return imageUrl;
	}
	public void setImageUrl(String imageUrl) {
		this.imageUrl = imageUrl;
	}
}
	