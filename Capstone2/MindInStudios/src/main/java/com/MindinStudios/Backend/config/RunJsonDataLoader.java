package com.MindinStudios.Backend.config;

import aj.org.objectweb.asm.TypeReference;
import com.MindinStudios.Backend.Model.DMVideos;
import com.MindinStudios.Backend.Model.PaintingsC;
import com.MindinStudios.Backend.Model.PhotosC;
import com.MindinStudios.Backend.common.PaintingsRepo;
import com.fasterxml.jackson.databind.ObjectMapper;

import org.springframework.context.annotation.Configuration;
import org.springframework.boot.CommandLineRunner;
import org. slf4j.Logger;
import org.slf4j.LoggerFactory;
import java.io.InputStream;
import java.util.List;

@Configuration
public class RunJsonDataLoader implements CommandLineRunner {

    private static final Logger log = org. slf4j.LoggerFactory.getLogger(RunJsonDataLoader.class);
    private final PaintingsC paint;
    private final PhotosC photo;
    private final DMVideos DmVideos;
    private final ObjectMapper objectMapper;


    public RunJsonDataLoader(PaintingsC paint, PhotosC photo, DMVideos DmVideos, ObjectMapper objectMapper) {
        this.paint = paint;
        this.photo = photo;
        this.DmVideos = DmVideos;
        this.objectMapper = new ObjectMapper();

    }

    @Override
    public void run(String... args) throws Exception {

        if (PaintingsRepo.count() == 0) {
            try {
                InputStream inputStream = getClass().getResourceAsStream("/data/paint.json");
                if (inputStream == null) {
                    throw new RuntimeException("File not found: /data/paint.json");
                }

                List<PaintingsC> students = objectMapper.readValue(inputStream, new TypeReference<List<PaintingsC>>() {});
                logger.info("Paintings loaded from JSON file: {}", students);
                PaintingsRepo.saveAll(students);

            } catch (Exception e) {
                throw new RuntimeException("Unable to load data from JSON file", e);
            }
        } else {
            logger.info("Data already loaded");
        }

    }
}




