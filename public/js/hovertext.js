const videoContainer = document.getElementById('videoContainer');
const video = document.getElementById('video');

// Pause the video on hover
videoContainer.addEventListener('mouseover', () => {
    video.pause();
});

// Resume the video when the mouse leaves
videoContainer.addEventListener('mouseout', () => {
    video.play();
});
