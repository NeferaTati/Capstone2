package com.MindinStudios.Backend.common;

//import com.MindinStudios.Backend.Model.Photos;
import com.MindinStudios.Backend.Model.PhotosC;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.jdbc.core.simple.JdbcClient;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface PhotosRepo extends JpaRepository<PhotosC, Integer> {

    List<PhotosC> findByTitle(String title);

//    private final JdbcClient jdbcClient;
//
//    public PhotosRepo(JdbcClient jdbcClient) {
//        this.jdbcClient = jdbcClient;
//    }
//
//    public List<Photos> findAll(){
//        return jdbcClient.sql("SELECT * FROM photos").query(Photos.class).list();
//    }
//
//    public void create(Photos photos){
//
//        jdbcClient.sql("INSERT INTO photos (id, title, description, materials, image_url) VALUES (?, ?, ?, ?, ?)")
//                .params(photos.id())
//                .params(photos.title())
//                .params(photos.areaDescription())
//                .params(photos.image_url())
//                .update();
//    }
//
//    public void update(Photos photos, Integer id){
//        jdbcClient.sql("UPDATE photos SET title = :title," +
//                        " description = :description, materials = :materials, image_url " +
//                        "= :image_url WHERE id = :id")
//                .param("id", id)
//                .param("title", photos.title())
//                .param("description", photos.areaDescription())
//                .param("image_url", photos.image_url())
//                .update();
//    }
//
//    public void DeleteById(Integer id) {
//    }
//
//    public Integer count() {
//        return 0;// change later
//    }
//
//    public void saveAll(List<PhotosC> photos) {
//        // Implement saveAll() method
//
//    }
//
//    public PhotosC save(Object photo) {
//
//        return null;
//    }
//
//    public boolean existsById(Integer id) {
//            return true;
//    }
//
//    public void deleteById(Integer id) {
//        int rowsAffected = jdbcClient.sql("DELETE FROM digital_media_and_videos WHERE id = ?")
//                .param(id)
//                .update();
//        if (rowsAffected == 0) {
//            throw new RuntimeException("No video found with id: " + id);
//        }
//}
//
//    public Optional<Object> findById(Integer id) {
//        return null;
//    }
//
//    public void delete(Object photo) {
//
//    }
}

