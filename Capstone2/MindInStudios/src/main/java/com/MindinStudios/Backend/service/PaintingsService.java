package com.MindinStudios.Backend.service;

import com.MindinStudios.Backend.Model.PaintingsC;
import com.MindinStudios.Backend.common.PaintingsRepo;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class PaintingsService {

    private final PaintingsRepo paintingsRepo;

    public PaintingsService(PaintingsRepo paintingsRepo) {
        this.paintingsRepo = paintingsRepo;
    }

    public long count() {
        return paintingsRepo.count();
    }

    public void saveAll(List<PaintingsC> paintings) {
        paintingsRepo.saveAll(paintings);
    }

    public List<PaintingsC> findAll() {
        return paintingsRepo.findAll();
    }

    public PaintingsC create(PaintingsC painting) {
        return paintingsRepo.save(painting);
    }

    public PaintingsC update(PaintingsC painting, Integer id) {
        painting.setId(id);
        return paintingsRepo.save(painting);
    }

    public void deleteById(Integer id) {
        paintingsRepo.deleteById(id);
    }
}