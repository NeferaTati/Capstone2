package com.MindinStudios.Backend.common;

public record DigitalMedia_videos(
        Integer id,
        Boolean IsAVideo,
        String title,
        String description,
        String materials,
        String image_url
) {
}
