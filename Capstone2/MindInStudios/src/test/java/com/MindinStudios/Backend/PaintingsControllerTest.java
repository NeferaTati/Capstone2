package com.MindinStudios.Backend;
import com.MindinStudios.Backend.controller.PaintingsController;
import com.MindinStudios.Backend.Model.PaintingsC;
import com.MindinStudios.Backend.common.PaintingsRepo;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

class PaintingsControllerTest {

    @Mock
    private PaintingsRepo paintingRepo;

    @InjectMocks
    private PaintingsController paintingsController;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    void testGetAllPaintings() {
        List<PaintingsC> mockPaintings = Arrays.asList(new PaintingsC(), new PaintingsC());
        when(paintingRepo.findAll()).thenReturn(mockPaintings);

        ResponseEntity<List<PaintingsC>> response = paintingsController.getAllPaintings();

        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals(mockPaintings, response.getBody());
    }

    @Test
    void testGetPaintingById() {
        PaintingsC mockPainting = new PaintingsC();
        when(paintingRepo.findById(1)).thenReturn(Optional.of(mockPainting));

        ResponseEntity<PaintingsC> response = paintingsController.getPaintingById(1);

        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals(mockPainting, response.getBody());
    }

    @Test
    void testGetPaintingByIdNotFound() {
        when(paintingRepo.findById(1)).thenReturn(Optional.empty());

        ResponseEntity<PaintingsC> response = paintingsController.getPaintingById(1);

        assertEquals(HttpStatus.NOT_FOUND, response.getStatusCode());
    }

    @Test
    void testCreatePainting() {
        PaintingsC newPainting = new PaintingsC();
        when(paintingRepo.save(any(PaintingsC.class))).thenReturn(newPainting);

        ResponseEntity<PaintingsC> response = paintingsController.createPainting(newPainting);

        assertEquals(HttpStatus.CREATED, response.getStatusCode());
        assertEquals(newPainting, response.getBody());
    }

    @Test
    void testUpdatePainting() {
        PaintingsC existingPainting = new PaintingsC();
        PaintingsC updatedPainting = new PaintingsC();
        when(paintingRepo.findById(1)).thenReturn(Optional.of(existingPainting));
        when(paintingRepo.save(any(PaintingsC.class))).thenReturn(updatedPainting);

        ResponseEntity<PaintingsC> response = paintingsController.updatePainting(1, updatedPainting);

        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals(updatedPainting, response.getBody());
    }

    @Test
    void testUpdatePaintingNotFound() {
        when(paintingRepo.findById(1)).thenReturn(Optional.empty());

        ResponseEntity<PaintingsC> response = paintingsController.updatePainting(1, new PaintingsC());

        assertEquals(HttpStatus.NOT_FOUND, response.getStatusCode());
    }

    @Test
    void testDeletePainting() {
        when(paintingRepo.findById(1)).thenReturn(Optional.of(new PaintingsC()));

        ResponseEntity<Void> response = paintingsController.deletePainting(1);

        assertEquals(HttpStatus.NO_CONTENT, response.getStatusCode());
        verify(paintingRepo).deleteById(1);
    }

    @Test
    void testDeletePaintingNotFound() {
        when(paintingRepo.findById(1)).thenReturn(Optional.empty());

        ResponseEntity<Void> response = paintingsController.deletePainting(1);

        assertEquals(HttpStatus.NOT_FOUND, response.getStatusCode());
    }

    @Test
    void testTest() {
        List<PaintingsC> mockPaintings = Arrays.asList(new PaintingsC(), new PaintingsC());
        when(paintingRepo.findAll()).thenReturn(mockPaintings);

        ResponseEntity<List<PaintingsC>> response = paintingsController.test();

        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals(mockPaintings, response.getBody());
    }
}