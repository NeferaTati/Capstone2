package com.MindinStudios.Backend;
import com.MindinStudios.Backend.Model.PhotosC;
import com.MindinStudios.Backend.common.PhotosRepo;
import com.MindinStudios.Backend.controller.PhotoController;
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

class PhotoControllerTest {

    @Mock
    private PhotosRepo photosRepo;

    @InjectMocks
    private PhotoController photoController;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    void testGetAllPhotos() {
        List<PhotosC> mockPhotos = Arrays.asList(new PhotosC(), new PhotosC());
        when(photosRepo.findAll()).thenReturn(mockPhotos);

        ResponseEntity<List<PhotosC>> response = photoController.getAllPhotos();

        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals(mockPhotos, response.getBody());
    }

    @Test
    void testGetPhotoById() {
        PhotosC mockPhoto = new PhotosC();
        when(photosRepo.findById(1)).thenReturn(Optional.of(mockPhoto));

        PhotosC result = photoController.getPhotoById(1);

        assertEquals(mockPhoto, result);
    }

    @Test
    void testCreatePhoto() {
        PhotosC newPhoto = new PhotosC();
        when(photosRepo.save(any(PhotosC.class))).thenReturn(newPhoto);

        ResponseEntity<PhotosC> response = photoController.createPhoto(newPhoto);

        assertEquals(HttpStatus.CREATED, response.getStatusCode());
        assertEquals(newPhoto, response.getBody());
    }

    @Test
    void testUpdatePhoto() {
        PhotosC existingPhoto = new PhotosC();
        PhotosC updatedPhoto = new PhotosC();
        when(photosRepo.findById(1)).thenReturn(Optional.of(existingPhoto));
        when(photosRepo.save(any(PhotosC.class))).thenReturn(updatedPhoto);

        ResponseEntity<PhotosC> response = photoController.updatePhoto(1, updatedPhoto);

        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals(updatedPhoto, response.getBody());
    }

    @Test
    void testUpdatePhotoNotFound() {
        when(photosRepo.findById(1)).thenReturn(Optional.empty());

        ResponseEntity<PhotosC> response = photoController.updatePhoto(1, new PhotosC());

        assertEquals(HttpStatus.NOT_FOUND, response.getStatusCode());
    }

    @Test
    void testDeletePhoto() {
        when(photosRepo.findById(1)).thenReturn(Optional.of(new PhotosC()));

        ResponseEntity<Void> response = photoController.deletePhoto(1);

        assertEquals(HttpStatus.NO_CONTENT, response.getStatusCode());
        verify(photosRepo).delete(any(PhotosC.class));
    }

    @Test
    void testDeletePhotoNotFound() {
        when(photosRepo.findById(1)).thenReturn(Optional.empty());

        ResponseEntity<Void> response = photoController.deletePhoto(1);

        assertEquals(HttpStatus.NOT_FOUND, response.getStatusCode());
    }

    @Test
    void testTest() {
        List<PhotosC> mockPhotos = Arrays.asList(new PhotosC(), new PhotosC());
        when(photosRepo.findAll()).thenReturn(mockPhotos);

        ResponseEntity<List<PhotosC>> response = photoController.test();

        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals(mockPhotos, response.getBody());
    }
}