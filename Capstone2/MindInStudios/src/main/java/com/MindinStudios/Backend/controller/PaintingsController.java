package com.MindinStudios.Backend.controller;

import com.MindinStudios.Backend.Model.PaintingsC;
import com.MindinStudios.Backend.common.PaintingsRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/api/paintings")
public class PaintingsController {

    private final PaintingsRepo paintingRepo;

    @Autowired
    public PaintingsController(PaintingsRepo paintingRepo) {
        this.paintingRepo = paintingRepo;
    }

    @GetMapping
    public ResponseEntity<List<PaintingsC>> getAllPaintings() {
        List<PaintingsC> paintings = paintingRepo.findAll();
        return ResponseEntity.ok(paintings);
    }

    @GetMapping("/{id}")
    public ResponseEntity<PaintingsC> getPaintingById(@PathVariable Integer id) {
        return paintingRepo.findById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<PaintingsC> createPainting(@RequestBody PaintingsC painting) {
        PaintingsC savedPainting = paintingRepo.save(painting);
        return ResponseEntity.status(HttpStatus.CREATED).body(savedPainting);
    }

    @PutMapping("/{id}")
    public ResponseEntity<PaintingsC> updatePainting(@PathVariable Integer id, @RequestBody PaintingsC paintingDetails) {
        return paintingRepo.findById(id)
                .map(existingPainting -> {
                    existingPainting.equals(paintingDetails.getTitle());
                    existingPainting.getClass();
                    existingPainting.getClass();
                    // Update other fields as necessary
                    PaintingsC updatedPainting = paintingRepo.save((PaintingsC) existingPainting);
                    return ResponseEntity.ok(updatedPainting);
                })
                .orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletePainting(@PathVariable Integer id) {
        return paintingRepo.findById(id)
                .map(painting -> {
                    paintingRepo.deleteById(id);
                    return ResponseEntity.noContent().<Void>build();
                })
                .orElse(ResponseEntity.notFound().build());
    }

    // Keep the test endpoint if you still need it
    @GetMapping("/test")
    public ResponseEntity<List<PaintingsC>> test() {
        List<PaintingsC> paintings = paintingRepo.findAll();
        return ResponseEntity.ok(paintings);
    }
}