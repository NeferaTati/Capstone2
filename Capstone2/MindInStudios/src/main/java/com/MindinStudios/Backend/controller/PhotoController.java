package com.MindinStudios.Backend.controller;

import com.MindinStudios.Backend.Model.PhotosC;
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
    public ResponseEntity<List<PhotosC>> getAllPhotos() {
        List<PhotosC> photos = photosRepo.findAll();
        return ResponseEntity.ok(photos);
    }

    @GetMapping("/{id}")
    public PhotosC getPhotoById(@PathVariable Integer id) {
        PhotosC photo = photosRepo.findById(id).get();
        return photo;
    }

    @PostMapping
    public ResponseEntity<PhotosC> createPhoto(@RequestBody PhotosC photo) {
        PhotosC savedPhoto = photosRepo.save(photo);
        return ResponseEntity.status(HttpStatus.CREATED).body(savedPhoto);
    }

    @PutMapping("/{id}")
    public ResponseEntity<PhotosC> updatePhoto(@PathVariable Integer id, @RequestBody PhotosC photoDetails) {
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
    public ResponseEntity<List<PhotosC>> test() {
        List<PhotosC> photos = photosRepo.findAll();
        return ResponseEntity.ok(photos);
    }
}