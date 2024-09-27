package com.MindinStudios.Backend.controller;
import com.MindinStudios.Backend.Model.PaintingsC;
import com.MindinStudios.Backend.common.Paintings;
import com.MindinStudios.Backend.common.PaintingsRepo;
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
public class TestController {

    private final PaintingsRepo paintingRepo;
    private List<com.MindinStudios.Backend.Model.PaintingsC> PaintingsC;

    public TestController(PaintingsRepo paintingRepo) {
        this.paintingRepo = paintingRepo;
    }

    @CrossOrigin
    @GetMapping("/test")
    public ResponseEntity<List<PaintingsC>> test() {
        List<Paintings> Paintings = paintingRepo.findAll();
        return ResponseEntity.ok(PaintingsC);
    }
    // Delete a Timesheet
    @ResponseStatus(HttpStatus.NO_CONTENT)
    @DeleteMapping("/{id}")
    void deleteTimesheet(@PathVariable Integer id){

        paintingRepo.DeleteById(id);
    }
}