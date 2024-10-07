package com.MindinStudios.Backend.common;



import com.MindinStudios.Backend.Model.PaintingsC;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.jdbc.core.simple.JdbcClient;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface PaintingsRepo extends JpaRepository<PaintingsC, Integer> {

    List<PaintingsC> findByTitle(String title);
//    private final JdbcClient jdbcClient;
//
//    public PaintingsRepo(JdbcClient jdbcClient) {
//        this.jdbcClient = jdbcClient;
//    }
//
//    public int count() {
//        return jdbcClient.sql("SELECT COUNT(*) FROM paintings").query(Integer.class).single();
//    }
//
//    public List<PaintingsC> findAll() {
//        return jdbcClient.sql("SELECT * FROM paintings").query(PaintingsC.class).list();
//    }
//
//    public void create(PaintingsC painting) {
//        jdbcClient.sql("INSERT INTO paintings (id, title, materials, image_url) VALUES (?, ?, ?, ?)")
//                .params(painting.getId(), painting.getTitle(), painting.getMaterials(), painting.getImageUrl())
//                .update();
//    }
//
//    public void update(PaintingsC painting, Integer id) {
//        jdbcClient.sql("UPDATE paintings SET title = :title, materials = :materials, image_url = :image_url WHERE id = :id")
//                .param("id", id)
//                .param("title", painting.getTitle())
//                .param("materials", painting.getMaterials())
//                .param("image_url", painting.getImageUrl())
//                .update();
//    }
//
//    public void deleteById(Integer id) {
//        int rowsAffected = jdbcClient.sql("DELETE FROM paintings WHERE id = ?")
//                .param(id)
//                .update();
//        if (rowsAffected == 0) {
//            throw new RuntimeException("No painting found with id: " + id);
//        }
//    }
//
//    public Object saveAll(List<PaintingsC> paintingsList) {
//
//        return null;
//    }
//
//    public PaintingsC save(PaintingsC painting) {
//        if (painting.getId() == null) {
//            create(painting);
//        } else {
//            update(painting, painting.getId());
//        }
//        return painting;
//    }
//
//    public Optional<Object> findById(Integer id) {
//        return Optional.of(jdbcClient.sql("SELECT * FROM paintings WHERE id =?")
//                .param(id)
//                .query(PaintingsC.class));
//
//    }
}