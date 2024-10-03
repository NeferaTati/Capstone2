package com.MindinStudios.Backend.Model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@AllArgsConstructor
@Data
@NoArgsConstructor
@Table(name = "paintings")
@Entity
public class PaintingsC {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String title;
    private String description;
    private String materials;
    private String image_url;

    public PaintingsC(Integer id, String title, String materials, String s) {



    }
}
