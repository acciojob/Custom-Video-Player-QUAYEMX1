// Select elements
const video = document.querySelector('.player__video');
const playButton = document.querySelector('.player__button.toggle');
const skipBackButton = document.querySelector('.player__button.skip-back');
const skipForwardButton = document.querySelector('.player__button.skip-forward');
const volumeControl = document.querySelector('input[name="volume"]');
const playbackSpeedControl = document.querySelector('input[name="playbackSpeed"]');
const progressBar = document.querySelector('.player__progress');
const progressFilled = document.querySelector('.player__progress-filled');

// Play/Pause toggle
function togglePlayPause() {
    if (video.paused) {
        video.play();
        playButton.textContent = '❚ ❚'; // Change to pause symbol
    } else {
        video.pause();
        playButton.textContent = '►'; // Change to play symbol
    }
}

// Skip backward by 10 seconds
function skipBack() {
    video.currentTime -= 10;
}

// Skip forward by 25 seconds
function skipForward() {
    video.currentTime += 25;
}

// Update volume
function updateVolume() {
    video.volume = volumeControl.value;
}

// Update playback speed
function updatePlaybackSpeed() {
    video.playbackRate = playbackSpeedControl.value;
}

// Update progress bar
function updateProgressBar() {
    const percent = (video.currentTime / video.duration) * 100;
    progressFilled.style.width = `${percent}%`;
}

// Seek video
function seekVideo(event) {
    const rect = progressBar.getBoundingClientRect();
    const offsetX = event.clientX - rect.left;
    const percent = offsetX / rect.width;
    video.currentTime = percent * video.duration;
}

// Event listeners
playButton.addEventListener('click', togglePlayPause);
skipBackButton.addEventListener('click', skipBack);
skipForwardButton.addEventListener('click', skipForward);
volumeControl.addEventListener('input', updateVolume);
playbackSpeedControl.addEventListener('input', updatePlaybackSpeed);
video.addEventListener('timeupdate', updateProgressBar);
progressBar.addEventListener('click', seekVideo);
