package com.MindinStudios.Backend;

import com.MindinStudios.Backend.Model.DMVideos;
import com.MindinStudios.Backend.common.DMVideosRepo;
import com.MindinStudios.Backend.controller.DMVController;
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

class DMVControllerTest {

    @Mock
    private DMVideosRepo dmVideosRepo;

    @InjectMocks
    private DMVController dmvController;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    void testGetAllDMVideos() {
        List<DMVideos> mockVideos = Arrays.asList(new DMVideos(), new DMVideos());
        when(dmVideosRepo.findAll()).thenReturn(mockVideos);

        ResponseEntity<List<DMVideos>> response = dmvController.test();

        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals(mockVideos, response.getBody());
    }

    @Test
    void testGetImageById() {
        DMVideos mockVideo = new DMVideos();
        when(dmVideosRepo.findById(1)).thenReturn(Optional.of(mockVideo));

        DMVideos result = dmvController.getImages(1);

        assertEquals(mockVideo, result);
    }

    @Test
    void testCreateImage() {
        DMVideos newVideo = new DMVideos();
        when(dmVideosRepo.save(any(DMVideos.class))).thenReturn(newVideo);

        DMVideos result = dmvController.createImages(newVideo);

        assertEquals(newVideo, result);
    }

    @Test
    void testDeleteImage() {
        ResponseEntity<?> response = dmvController.deleteImages(1);

        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals("Item has been deleted", response.getBody());
        verify(dmVideosRepo).deleteById(1);
    }

    @Test
    void testEditImage() {
        DMVideos existingVideo = new DMVideos();
        DMVideos updatedVideo = new DMVideos();
        when(dmVideosRepo.findById(1)).thenReturn(Optional.of(existingVideo));
        when(dmVideosRepo.save(any(DMVideos.class))).thenReturn(updatedVideo);

        ResponseEntity<?> response = dmvController.editImages(1, updatedVideo);

        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals(updatedVideo, response.getBody());
    }

    @Test
    void testEditImageNotFound() {
        when(dmVideosRepo.findById(1)).thenReturn(Optional.empty());

        ResponseEntity<?> response = dmvController.editImages(1, new DMVideos());

        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals("Image with the id given is not found in database", response.getBody());
    }
}