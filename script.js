// Mobile nav toggle
document.getElementById("menu-toggle").addEventListener("click", function() {
  document.getElementById("navbar").classList.toggle("active");
});

// Mobile nav toggle
document.getElementById("menu-toggle").addEventListener("click", function() {
  document.getElementById("navbar").classList.toggle("active");
});

// Custom Music Player
const audioPlayer = document.getElementById("audio-player");
const playlist = document.getElementById("playlist");
const tracks = playlist.getElementsByTagName("li");

for (let track of tracks) {
  track.addEventListener("click", function() {
    // Remove "active" from all
    for (let t of tracks) t.classList.remove("active");
    
    // Mark current active
    this.classList.add("active");
    
    // Change track source
    audioPlayer.src = this.getAttribute("data-src");
    audioPlayer.play();
  });
}
