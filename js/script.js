console.log("Welcome to Spotify");
let songIndex = 0;
let audioElement = new Audio('skyfull.mp3');
let masterPlay = document.getElementById('masterPlay');
let songs = [
    {songName: "ASkyFullOfStars", filePath: "./music/skyfull.mp3", coversPath: "./img/skyfull"}
]

//audioElement.play();

document.addEventListener('time');