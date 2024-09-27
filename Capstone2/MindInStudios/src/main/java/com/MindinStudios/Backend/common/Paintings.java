package com.MindinStudios.Backend.common;

public record Paintings(
    Integer id,
    String title,
    String materials,
    String image_url
){
    public Integer getId() {
        return 0;
    }

    public String getTitle() {
        return "";
    }

    public String getMaterials() {
        return "";
    }

    public String getImage_url() {
        return "";
    }
}
