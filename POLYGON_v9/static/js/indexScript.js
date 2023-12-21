/* file: indexScript.js */

window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;

    // Define the scroll position where you want to switch from video to image
    const switchPosition = windowHeight * 0.5;

    if (scrollPosition >= switchPosition) {
        // Switch to the image background
        document.querySelector('.video-container').style.background = 'url("images/nebula.jpg") no-repeat center center fixed';
        document.querySelector('.video-container').style.backgroundSize = 'cover';
    } else {
        // Switch back to the video background
        document.querySelector('.video-container').style.background = 'none';
    }
});