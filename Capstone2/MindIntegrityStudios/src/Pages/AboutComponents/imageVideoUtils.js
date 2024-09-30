// ... existing code ...

/**
 * Preloads a video from the provided source.
 * @function
 * @param {string} videoSrc - URL of the video file to preload.
 * @returns {Promise} - Resolves with the video element when the video is fully loaded.
 */
const preloadVideo = (videoSrc) => {
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

// ... existing code ...