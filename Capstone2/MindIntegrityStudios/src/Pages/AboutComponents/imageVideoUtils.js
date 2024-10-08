// ... existing code ...

/**
 * Preloads a video from the provided source.
 * @function
 * @param {string} videoSrc - URL of the video file to preload.
 * @returns {Promise} - Resolves with the video element when the video is fully loaded.
 */
export const preloadVideo = (videoSrc) => {
    return new Promise((resolve, reject) => {
        const video = document.createElement('video');
        video.src = videoSrc;

        // Resolve when the video is ready to play
        video.addEventListener('canplaythrough', () => {
            resolve(video);
        });

        // You may want to handle additional events such as 'onerror'
        video.addEventListener('loadeddata', () => {
            // Optionally handle loadeddata if needed
        });

        video.load(); // Start loading the video

        // If the video fails to load, reject the promise
        video.onerror = () => {
            reject(new Error('Failed to load video'));
        };
    });
};

/**
 * @function
 * @param {string} imageSrc - URL of the image file to preload.
 * @returns {Promise} - Resolves with the image element when the image is fully loaded.
 */
export const preloadImage = (imageSrc) => {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = imageSrc;

        // Resolve when the image is fully loaded
        img.onload = () => {
            resolve(img);
        };

        // Reject if the image fails to load
        img.onerror = () => {
            reject(new Error('Failed to load image'));
        };
    });
};

// ... existing code ...