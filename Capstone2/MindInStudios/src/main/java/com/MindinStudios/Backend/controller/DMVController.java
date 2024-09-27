package com.MindinStudios.Backend.controller;
import com.MindinStudios.Backend.Model.DMVideos;
import com.MindinStudios.Backend.common.DMVideosRepo;
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
public class DMVController {

    private final DMVideosRepo dmRepo;

    public DMVController(DMVideosRepo dmRepo) {
        this.dmRepo = dmRepo;
    }

    @GetMapping("/test")
    public ResponseEntity<List<DMVideos>> test() {
        List<DMVideos> videos = dmRepo.findAll();
        return ResponseEntity.ok(videos);
    }

    // Delete a video by ID
    @ResponseStatus(HttpStatus.NO_CONTENT)
    @DeleteMapping ("/{id}")
    public void deleteVideo(@PathVariable Integer id) {
        dmRepo.deleteById(id); // Ensure the method name matches your repository
    }
}
