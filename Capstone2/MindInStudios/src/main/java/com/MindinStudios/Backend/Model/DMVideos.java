package com.MindinStudios.Backend.Model;
import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@Data
@NoArgsConstructor
@Entity
@Table(name = "digital_media_and_videos")
public class DMVideos {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;  // Changed to Integer
    private Boolean isAVideo;

    private String title;
    private String description;

    private String imageUrl;

    private  String materials;

}