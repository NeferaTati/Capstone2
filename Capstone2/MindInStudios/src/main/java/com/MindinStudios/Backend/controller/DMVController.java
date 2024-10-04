package com.MindinStudios.Backend.controller;

import com.MindinStudios.Backend.Model.DMVideos;
import com.MindinStudios.Backend.common.DMVideosRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/dmvideos")
public class DMVController {

    private final DMVideosRepo dmVideosRepo;

    @Autowired
    public DMVController(DMVideosRepo dmVideosRepo) {
        this.dmVideosRepo = dmVideosRepo;
    }

    @GetMapping
    public ResponseEntity<List<DMVideos>> getAllVideos() {
        List<DMVideos> videos = dmVideosRepo.findAll();
        return ResponseEntity.ok(videos);
    }

    @GetMapping("/{id}")
    public ResponseEntity<DMVideos> getVideoById(@PathVariable Integer id) {
        return dmVideosRepo.findById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<DMVideos> createVideo(@RequestBody DMVideos video) {
        DMVideos savedVideo = dmVideosRepo.save(video);
        return ResponseEntity.ok(savedVideo);
    }

    @PutMapping("/{id}")
    public ResponseEntity<DMVideos> updateVideo(@PathVariable Integer id, @RequestBody DMVideos videoDetails) {
        return dmVideosRepo.findById(id)
                .map(existingVideo -> {
                    existingVideo.setTitle(videoDetails.getTitle());
                    existingVideo.setDescription(videoDetails.getDescription());
                    existingVideo.setIsAVideo(videoDetails.getIsAVideo());
                    existingVideo.setImageUrl(videoDetails.getImageUrl());
                    DMVideos updatedVideo = dmVideosRepo.save(existingVideo);
                    return ResponseEntity.ok(updatedVideo);
                })
                .orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteVideo(@PathVariable Integer id) {
        return dmVideosRepo.findById(id)
                .map(video -> {
                    dmVideosRepo.delete(video);
                    return ResponseEntity.ok().<Void>build();
                })
                .orElse(ResponseEntity.notFound().build());
    }
}