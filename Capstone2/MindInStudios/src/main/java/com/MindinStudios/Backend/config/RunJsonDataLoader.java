package com.MindinStudios.Backend.config;

import com.MindinStudios.Backend.Model.PaintingsC;
import com.MindinStudios.Backend.Model.PhotosC;
import com.MindinStudios.Backend.Model.DMVideos;
import com.MindinStudios.Backend.common.PaintingsRepo;
import com.MindinStudios.Backend.common.PhotosRepo;
import com.MindinStudios.Backend.common.DMVideosRepo;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Configuration;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.io.InputStream;
import java.util.List;

@Configuration
public class RunJsonDataLoader implements CommandLineRunner {

    private static final Logger logger = LoggerFactory.getLogger(RunJsonDataLoader.class);
    private final PaintingsRepo paintingsRepo;
    private final PhotosRepo photosRepo;
    private final DMVideosRepo dmVideosRepo;
    private final ObjectMapper objectMapper;

    public RunJsonDataLoader(PaintingsRepo paintingsRepo,
                      PhotosRepo photosRepo,
                      DMVideosRepo dmVideosRepo,
                      ObjectMapper objectMapper) {
        this.paintingsRepo = paintingsRepo;
        this.photosRepo = photosRepo;
        this.dmVideosRepo = dmVideosRepo;
        this.objectMapper = objectMapper;
    }

    @Override
    public void run(String... args) {
        new PhotosLoader().loadPhotos();
        new PaintingsLoader().loadPaintings();
        new DMVideosLoader().loadVideos();
    }

    private class PhotosLoader {
        void loadPhotos() {
            if (photosRepo.count() == 0) {
                try {
                    InputStream inputStream = getClass().getResourceAsStream("/data/photodata.json");
                    if (inputStream == null) {
                        throw new RuntimeException("File not found: /data/photodata.json");
                    }
                    List<PhotosC> photosList = objectMapper.readValue(inputStream, new TypeReference<List<PhotosC>>() {});
                    logger.info("Parsed Photos JSON content: {}", objectMapper.writeValueAsString(photosList));
                    photosRepo.saveAll(photosList);
                    logger.info("Photos loaded successfully. Count: {}", photosList.size());
                } catch (Exception e) {
                    logger.error("Error loading photos data from JSON file", e);
                    throw new RuntimeException("Unable to load photos data from JSON file", e);
                }
            } else {
                logger.info("Photos already loaded. Count: {}", photosRepo.count());
            }
        }
    }

    private class PaintingsLoader {
        void loadPaintings() {
            if (paintingsRepo.count() == 0) {
                try {
                    InputStream inputStream = getClass().getResourceAsStream("/data/paintdata.json");
                    if (inputStream == null) {
                        throw new RuntimeException("File not found: /data/paintdata.json");
                    }
                    List<PaintingsC> paintingsList = objectMapper.readValue(inputStream, new TypeReference<List<PaintingsC>>() {});
                    logger.info("Parsed Paintings JSON content: {}", objectMapper.writeValueAsString(paintingsList));
                    paintingsRepo.saveAll(paintingsList);
                    logger.info("Paintings loaded successfully. Count: {}", paintingsList.size());
                } catch (Exception e) {
                    logger.error("Error loading paintings data from JSON file", e);
                    throw new RuntimeException("Unable to load paintings data from JSON file", e);
                }
            } else {
                logger.info("Paintings already loaded. Count: {}", paintingsRepo.count());
            }
        }
    }

    private class DMVideosLoader {
        void loadVideos() {
            if (dmVideosRepo.count() == 0) {
                try {
                    InputStream inputStream = getClass().getResourceAsStream("/data/videodata.json");
                    if (inputStream == null) {
                        throw new RuntimeException("File not found: /data/videodata.json");
                    }
                    List<DMVideos> videoCList = objectMapper.readValue(inputStream, new TypeReference<List<DMVideos>>() {});
                    logger.info("Parsed Videos JSON content: {}", objectMapper.writeValueAsString(videoCList));
                    dmVideosRepo.saveAll(videoCList);
                    logger.info("Videos loaded successfully. Count: {}", videoCList.size());
                } catch (Exception e) {
                    logger.error("Error loading videos data from JSON file", e);
                    throw new RuntimeException("Unable to load videos data from JSON file", e);
                }
            } else {
                logger.info("Videos already loaded. Count: {}", dmVideosRepo.count());
            }
        }
    }
}