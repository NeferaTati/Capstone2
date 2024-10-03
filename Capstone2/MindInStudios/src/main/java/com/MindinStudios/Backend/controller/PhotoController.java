package com.MindinStudios.Backend.controller;

import com.MindinStudios.Backend.Model.PhotosC;
import com.MindinStudios.Backend.common.Photos;
import com.MindinStudios.Backend.common.PhotosRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/api/photos")
@RequiredArgsConstructor
public class PhotoController {

    private final PhotosRepo photosRepo;

    @GetMapping
    public ResponseEntity<List<Photos>> getAllPhotos() {
        List<Photos> photos = photosRepo.findAll();
        return ResponseEntity.ok(photos);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Object> getPhotoById(@PathVariable Integer id) {
        return photosRepo.findById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<PhotosC> createPhoto(@RequestBody Photos photo) {
        PhotosC savedPhoto = photosRepo.save(photo);
        return ResponseEntity.status(HttpStatus.CREATED).body(savedPhoto);
    }

    @PutMapping("/{id}")
    public ResponseEntity<PhotosC> updatePhoto(@PathVariable Integer id, @RequestBody Photos photoDetails) {
        return photosRepo.findById(id)
                .map(existingPhoto -> {
                    existingPhoto.equals(photoDetails.getTitle());
                    existingPhoto.getClass();
                    existingPhoto.getClass();
                    PhotosC updatedPhoto = photosRepo.save(existingPhoto);
                    return ResponseEntity.ok(updatedPhoto);
                })
                .orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletePhoto(@PathVariable Integer id) {
        return photosRepo.findById(id)
                .map(photo -> {
                    photosRepo.delete(photo);
                    return ResponseEntity.noContent().<Void>build();
                })
                .orElse(ResponseEntity.notFound().build());
    }

    // Keep the test endpoint if you still need it
    @GetMapping("/test")
    public ResponseEntity<List<Photos>> test() {
        List<Photos> photos = photosRepo.findAll();
        return ResponseEntity.ok(photos);
    }
}