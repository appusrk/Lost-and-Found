CREATE DATABASE IF NOT EXISTS `lost_and_found`
  DEFAULT CHARACTER SET utf8mb4
  COLLATE utf8mb4_general_ci;

USE `lost_and_found`;

DROP TABLE IF EXISTS `found_items`;
CREATE TABLE `found_items` (
  `id` int NOT NULL AUTO_INCREMENT,
  `item_name` varchar(100) NOT NULL,
  `description` text,
  `location` varchar(255) NOT NULL,
  `image_url` varchar(255) DEFAULT NULL,
  `image_hash` varchar(255) DEFAULT NULL,
  `contact` varchar(15) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;


DROP TABLE IF EXISTS `lost_items`;
CREATE TABLE `lost_items` (
`id` int NOT NULL AUTO_INCREMENT,
  `item_name` varchar(100) NOT NULL,
  `description` text,
  `location` varchar(255) NOT NULL,
  `image_url` varchar(255) DEFAULT NULL,
  `image_hash` varchar(255) DEFAULT NULL,
  `contact` varchar(15) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
  
DROP TABLE IF EXISTS `match_history`;
CREATE TABLE `match_history` (
  `id` int NOT NULL AUTO_INCREMENT,
  `lost_item_id` int DEFAULT NULL,
  `found_item_id` int DEFAULT NULL,
  `lost_contact` varchar(15) DEFAULT NULL,
  `found_contact` varchar(15) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `lost_item_id` (`lost_item_id`),
  KEY `found_item_id` (`found_item_id`),
  CONSTRAINT `match_history_ibfk_1` FOREIGN KEY (`lost_item_id`) REFERENCES `lost_items` (`id`) ON DELETE CASCADE,
  CONSTRAINT `match_history_ibfk_2` FOREIGN KEY (`found_item_id`) REFERENCES `found_items` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

select * from lost_items;

CREATE TABLE `issues` (
  `id` int NOT NULL AUTO_INCREMENT,
  `issue_name` varchar(100) NOT NULL,
  `location` varchar(255) NOT NULL,
  `image_url` varchar(255) DEFAULT NULL,
  `image_hash` varchar(255) DEFAULT NULL,
  `reported_contact` varchar(15) NOT NULL,
  `assigned_to` varchar(15) DEFAULT NULL,
  `reported_on` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
);










