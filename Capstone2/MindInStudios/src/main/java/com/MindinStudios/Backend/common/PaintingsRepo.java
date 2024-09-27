package com.MindinStudios.Backend.common;

//import com.MindinStudios.Backend.Model.Paintings;
import com.MindinStudios.Backend.Model.PaintingsC;
import org.springframework.jdbc.core.simple.JdbcClient;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class PaintingsRepo {

    private final JdbcClient jdbcClient;

    public PaintingsRepo(JdbcClient jdbcClient) {
        this.jdbcClient = jdbcClient;
    }

    public static int count() {
        return 0;
    }

    public static void saveAll(List<PaintingsC> students) {
    }

    public List<Paintings> findAll(){
        return jdbcClient.sql("SELECT * FROM workdirectory").query(Paintings.class).list();
    }

    public void create(Paintings painting){

        jdbcClient.sql("INSERT INTO workdirectory (id, title, description, materials, image_url) VALUES (?, ?, ?, ?, ?)")
                .params(painting.id())
                .params(painting.title())
                .params(painting.materials())
                .params(painting.image_url())
                .update();
    }

    public void update(Paintings painting, Integer id){
        jdbcClient.sql("UPDATE workdirectory SET title = :title," +
                        " description = :description, materials = :materials, image_url " +
                        "= :image_url WHERE id = :id")
                .param("id", id)
                .param("title", painting.title())
                .param("materials", painting.materials())
                .param("image_url", painting.image_url())
                .update();
    }


    public void DeleteById(Integer id) {
   return ;


    }

    public PaintingsC save(PaintingsC entity) {
        return null;
    }}

