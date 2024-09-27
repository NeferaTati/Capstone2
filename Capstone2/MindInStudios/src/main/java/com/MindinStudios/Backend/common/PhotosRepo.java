package com.MindinStudios.Backend.common;

//import com.MindinStudios.Backend.Model.Photos;
import com.MindinStudios.Backend.Model.PhotosC;
import org.springframework.jdbc.core.simple.JdbcClient;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class PhotosRepo {

    private final JdbcClient jdbcClient;

    public PhotosRepo(JdbcClient jdbcClient) {
        this.jdbcClient = jdbcClient;
    }

    public List<Photos> findAll(){
        return jdbcClient.sql("SELECT * FROM workdirectory").query(Photos.class).list();
    }

    public void create(Photos photos){

        jdbcClient.sql("INSERT INTO workdirectory (id, title, description, materials, image_url) VALUES (?, ?, ?, ?, ?)")
                .params(photos.id())
                .params(photos.title())
                .params(photos.areaDescription())
                .params(photos.image_url())
                .update();
    }

    public void update(Photos photos, Integer id){
        jdbcClient.sql("UPDATE workdirectory SET title = :title," +
                        " description = :description, materials = :materials, image_url " +
                        "= :image_url WHERE id = :id")
                .param("id", id)
                .param("title", photos.title())
                .param("description", photos.areaDescription())
                .param("image_url", photos.image_url())
                .update();
    }

    public void DeleteById(Integer id) {
    }

    public long count() {
        return;
    }

    public void saveAll(List<PhotosC> photos) {
        // Implement saveAll() method

    }

    public PhotosC save(PhotosC photo) {

        return null;
    }

    public boolean existsById(Integer id) {
            return false;
    }
}

