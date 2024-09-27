package service;

import com.MindinStudios.Backend.Model.DMVideos; // JPA entity
import com.MindinStudios.Backend.common.DMVideosRepo; // Repository
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DMVideosService {

    private final DMVideosRepo dmVideosRepo;

    public DMVideosService(DMVideosRepo dmVideosRepo) {
        this.dmVideosRepo = dmVideosRepo;
    }

    // Count the number of videos
    public long count() {
        return dmVideosRepo.count();
    }

    // Save all videos
    public void saveAll(List<DMVideos> videos) {
        dmVideosRepo.saveAll(videos);
    }

    // Find all videos
    public List<DMVideos> findAll() {
        return dmVideosRepo.findAll();
    }

    // Create a new video
    public DMVideos create(DMVideos video) {
        return dmVideosRepo.save(video);
    }

    // Update an existing video
    public DMVideos update(DMVideos video, Integer id) {
        // Check if the video exists before updating
        if (!dmVideosRepo.existsById(id)) {
            throw new IllegalArgumentException("Video with ID " + id + " does not exist.");
        }
        video.setId(id); // Set the ID for the update
        return dmVideosRepo.save(video);
    }

    // Delete a video by ID
    public void deleteById(Integer id) {
        if (!dmVideosRepo.existsById(id)) {
            throw new IllegalArgumentException("Video with ID " + id + " does not exist.");
        }
        dmVideosRepo.deleteById(id);
    }
}
