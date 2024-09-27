package com.MindinStudios.Backend.controller;
import com.MindinStudios.Backend.Model.PhotosC;
import com.MindinStudios.Backend.common.Photos;
import com.MindinStudios.Backend.common.PhotosRepo;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.ResponseStatus;

import java.util.List;

@CrossOrigin
@RestController
public class PhotoController {

    private final PhotosRepo photosRepo;
    private List<com.MindinStudios.Backend.Model.PhotosC> PhotosC;

    public PhotoController(PhotosRepo photosRepo) {
        this.photosRepo = photosRepo;
    }

    @CrossOrigin
    @GetMapping("/test")
    public ResponseEntity<List<PhotosC>> test() {
        List<Photos> Photos = photosRepo.findAll();
        return ResponseEntity.ok(PhotosC);
    }
    // Delete a Timesheet
    @ResponseStatus(HttpStatus.NO_CONTENT)
    @DeleteMapping("/{id}")
    void deleteTimesheet(@PathVariable Integer id){

        photosRepo.DeleteById(id);
    }
}