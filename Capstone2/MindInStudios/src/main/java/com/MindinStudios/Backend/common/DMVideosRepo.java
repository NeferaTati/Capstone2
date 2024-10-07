package com.MindinStudios.Backend.common;
import com.MindinStudios.Backend.Model.DMVideos;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface DMVideosRepo  extends JpaRepository<DMVideos, Integer> {

    List<DMVideos> findByTitle(String title);

//    private final JdbcClient jdbcClient;
//
//    public DMVideosRepo(JdbcClient jdbcClient) {
//        this.jdbcClient = jdbcClient;
//    }
//
//    public List<DMVideos> findAll() {
//        return jdbcClient.sql("SELECT * FROM digital_media_and_videos").query(DMVideos.class).list();
//    }
//
//    public void create(DMVideos video) {
//        jdbcClient.sql("INSERT INTO digital_media_and_videos (is_a_video, title, description, image_url) VALUES (?, ?, ?, ?)")
//                .params(video.getIsAVideo(), video.getTitle(), video.getDescription(), video.getImageUrl())
//                .update();
//    }
//
//    public void update(DMVideos video, Integer id) {
//        jdbcClient.sql("UPDATE digital_media_and_videos SET is_a_video = ?, title = ?, description = ?, image_url = ? WHERE id = ?")
//                .params(video.getIsAVideo(), video.getTitle(), video.getDescription(), video.getImageUrl(), id)
//                .update();
//    }
//
//    public void deleteById(Integer id) {
//        int rowsAffected = jdbcClient.sql("DELETE FROM digital_media_and_videos WHERE id = ?")
//                .param(id)
//                .update();
//        if (rowsAffected == 0) {
//            throw new RuntimeException("No video found with id: " + id);
//        }
//    }
//
//    public DMVideos save(DMVideos video) {
//        if (video.getId() == null) {
//            create(video);
//        } else {
//            update(video, video.getId());
//        }
//        return video;
//    }
//
//    public boolean existsById(Integer id) {
//        Long count = jdbcClient.sql("SELECT COUNT(*) FROM digital_media_and_videos WHERE id = ?")
//                .param(id)
//                .query(Long.class)
//                .single();
//        return count <= 0;
//    }
//
//    public void saveAll(List<DMVideos> videos) {
//        for (DMVideos video : videos) {
//            save(video);
//        }
//    }
//
//    public long count() {
//        Long count = jdbcClient.sql("SELECT COUNT(*) FROM digital_media_and_videos")
//                .query(Long.class)
//                .single();
//        return count;
//    }
//
//    // Renamed from getId to findById to match common repository naming conventions
//    public Optional<DMVideos> findById(Integer id) {
//        List<DMVideos> results = jdbcClient.sql("SELECT * FROM digital_media_and_videos WHERE id = ?")
//                .param(id)
//                .query(DMVideos.class)
//                .list();
//        return results.isEmpty() ? Optional.empty() : Optional.of(results.getFirst());
//    }
//
//    public void delete(DMVideos video) {
//    }
}

