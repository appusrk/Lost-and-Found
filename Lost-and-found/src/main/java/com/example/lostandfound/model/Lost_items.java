
	package com.example.lostandfound.model;

	import jakarta.persistence.*;
	import java.time.LocalDate;
	import java.time.LocalDateTime;

	@Entity
	@Table(name = "lost_items")
	public class Lost_items {
		public Lost_items() {}
		@Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
	    private int id;

	    @Column(name = "item_name", nullable = false)
	    private String itemName;

	    private String description;

	    private String location;

	    @Column(name = "image_url")
	    private String imageUrl;

	    @Column(name = "contact")
	    private String contact;
	    
	    @Column(name = "image_hash")
	    private String imageHash; 
	    
	    @Column(name = "image_embedding", columnDefinition = "JSON")
	    private String imageEmbedding;  

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


		public String getContact() {
			return contact;
		}

		public void setContact(String contact) {
			this.contact = contact;
		}	}