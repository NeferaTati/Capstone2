package com.MindinStudios.Backend.common;

public record Photos(
        Integer id,
        String title,
        String areaDescription,
        String image_url) {
    public Object getImage_url() {
        return null;
    }

    public Object getTitle() {
        return null;
    }

    public Object getAreaDescription() {
        return null;
    }
}
