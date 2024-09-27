package com.MindinStudios.Backend.common;

import com.MindinStudios.Backend.Model.DMVideos;
import org.springframework.jdbc.core.simple.JdbcClient;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class DMVideosRepo {

    private final JdbcClient jdbcClient;

    public DMVideosRepo(JdbcClient jdbcClient) {
        this.jdbcClient = jdbcClient;
    }

    public List<DMVideos> findAll() {
        return jdbcClient.sql("SELECT * FROM \"Digital Media and Videos\"").query(DMVideos.class).list();
    }

    public void create(DMVideos video) {
        jdbcClient.sql("INSERT INTO \"Digital Media and Videos\" (IsAVideo, title, description, image_url) VALUES (?, ?, ?, ?)")
                .params(video.getIsAVideo())
                .params(video.getTitle())
                .params(video.getDescription())
                .params(video.getImage_url())
                .update();
    }

    public void update(DMVideos video, Integer id) {
        jdbcClient.sql("UPDATE \"Digital Media and Videos\" SET IsAVideo = :IsAVideo, title = :title, description = :description, image_url = :image_url WHERE id = :id")
                .param("id", id)
                .param("IsAVideo", video.getIsAVideo())
                .param("title", video.getTitle())
                .param("description", video.getDescription())
                .param("image_url", video.getImage_url())
                .update();
    }

    public void deleteById(Integer id) {

    }

    public DMVideos save(DMVideos video) {
        return null;

    }

    public boolean existsById(Integer id) {
        return false;
    }

    public void saveAll(List<DMVideos> videos) {
    }

    public long count() {
        return 0;
    }
}
