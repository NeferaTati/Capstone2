package com.MindinStudios.Backend.controller;

import com.MindinStudios.Backend.Model.DMVideos;
import com.MindinStudios.Backend.common.DMVideosRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/dmvideos")
@CrossOrigin
public class DMVController {

    private final DMVideosRepo dmVideosRepo;

    @Autowired
    public DMVController(DMVideosRepo dmVideosRepo) {
        this.dmVideosRepo = dmVideosRepo;
    }

    // GET ALL DATA
    @GetMapping
    public ResponseEntity<List<DMVideos>> test() {
        List<DMVideos> dmVideos = dmVideosRepo.findAll();
        return ResponseEntity.ok(dmVideos);
    }

    // GET by ID
    @GetMapping("/getImage/{id}")
    public DMVideos getImages(@PathVariable Integer id) {
        DMVideos dmVideos = dmVideosRepo.findById(id).get();
        return dmVideos;
    }

    @PostMapping("/addImage")
    public DMVideos createImages(@RequestBody DMVideos dmVideos) {
        return dmVideosRepo.save(dmVideos);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteImages(@PathVariable Integer id) {
        dmVideosRepo.deleteById(id);
        return ResponseEntity.ok().body("Item has been deleted");
    }


    @PutMapping("/edit/{id}")
    public ResponseEntity<?> editImages(@PathVariable Integer id, @RequestBody DMVideos dmVideos) {
        DMVideos findImage = dmVideosRepo.findById(id).orElse(null);


        if (findImage.equals(null)){
            return ResponseEntity.ok().body("Image with the id given is not found in database");
        }



        findImage.setIsAVideo(dmVideos.getIsAVideo());
        findImage.setTitle((dmVideos.getTitle()));
        findImage.setDescription((dmVideos.getDescription()));
        findImage.setImageUrl((dmVideos.getImageUrl()));
        findImage.setMaterials(dmVideos.getMaterials());


        DMVideos savedDmvideo  = dmVideosRepo.save(findImage);

        return ResponseEntity.ok().body(savedDmvideo);
    }
}