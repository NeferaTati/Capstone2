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

    @JsonProperty("IsAVideo")
    @Column(name = "is_a_video")
    private Boolean isAVideo;

    private String title;
    private String description;

    @JsonProperty("image_url")
    @Column(name = "image_url")
    private String imageUrl;

    // Lombok's @Data annotation will generate getters and setters,
    // but we can explicitly define getId() if needed:
    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getImage_url() {
        return null;
    }

    public void setImage_url(String imageUrl) {
        this.imageUrl = imageUrl;
    }
}