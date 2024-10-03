package com.MindinStudios.Backend.service;

import com.MindinStudios.Backend.Model.PhotosC; // JPA entity
import com.MindinStudios.Backend.common.Photos;
import com.MindinStudios.Backend.common.PhotosRepo; // Repository
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PhotosService {

    private final PhotosRepo photosRepo;

    public PhotosService(PhotosRepo photosRepo) {
        this.photosRepo = photosRepo;
    }

    // Count the number of photos
    public long count() {
        return photosRepo.count();
    }

    // Save all photos
    public void saveAll(List<PhotosC> photos) {
        photosRepo.saveAll(photos);
    }

    // Find all photos
    public List<Photos> findAll() {
        return photosRepo.findAll();
    }

    // Create a new photo
    public PhotosC create(PhotosC photo) {
        return photosRepo.save(photo);
    }

    // Update an existing photo
    public PhotosC update(PhotosC photo, Integer id) {
        // Check if the photo exists before updating
        if (!photosRepo.existsById(id)) {
            throw new IllegalArgumentException("Photo with ID " + id + " does not exist.");
        }
        photo.setId(id); // Set the ID for the update
        return photosRepo.save(photo);
    }

    // Delete a photo by ID
    public void deleteById(Integer id) {
        if (!photosRepo.existsById(id)) {
            throw new IllegalArgumentException("Photo with ID " + id + " does not exist.");
        }
        photosRepo.DeleteById(id);
    }
}