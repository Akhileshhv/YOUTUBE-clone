// Function to play selected video
function playVideo(videoSrc, videoTitle) {
    var videoPlayer = document.getElementById('mainVideo');
    var title = document.getElementById('videoTitle');
    
    videoPlayer.src = videoSrc;
    title.textContent = videoTitle;
    videoPlayer.play();
}

// Function to handle search (mock implementation)
function searchVideo() {
    var searchQuery = document.getElementById('search').value;
    alert("You searched for: " + searchQuery);
}
