console.log("music.js loaded");
const songs = [

{
title: "ریمیکس شوم از راشد",
artist: "RAASHED",
file: "music/music/beat_2.mp3 (Remix).mp3",
cover: "images/file_000000008164722faab306d6308856f4.png"
},

{
title: "بیت",
artist: "RAPHORN",
file: "music/music/song1.mp3",
cover: "images/cover2.png"
}

];

const list = document.getElementById("music-list");

const audio = document.getElementById("audio");

const playerTitle = document.getElementById("player-title");

const playerArtist = document.getElementById("player-artist");

const playerCover = document.getElementById("player-cover");

let currentSong = 0;

let isSeeking = false;

function showSongs(){

list.innerHTML = "";

songs.forEach((song,index)=>{

list.innerHTML += `

<div class="music-card" id="song-${index}">  <div class="music-cover">  <img src="${song.cover}" alt="${song.title}">  </div>  <div class="music-info">  <h3>${song.title}</h3>  <p>${song.artist}</p>  </div>  <div class="music-progress">  <span class="current-time">  
0:00  
</span>  <input
type="range"
min="0"
max="100"
value="0"
class="seek-bar"
id="seek-${index}"

> 

<span class="duration">  
0:00  
</span>  </div>  <div class="sound-wave">  <span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>

</div>  <div class="music-controls">  <button class="card-play" onclick="togglePlay(${index})">  Play

</button>  <button onclick="downloadSong(${index})">  Download

</button>  <button onclick="shareSong(${index})">  Share

</button>  </div>  <div class="equalizer">  <span></span>

<span></span>

<span></span>

<span></span>

<span></span>

</div>  </div>  `;

});

}

function playSong(index){

currentSong = index;

document.querySelectorAll(".music-card").forEach(card=>{  
card.classList.remove("playing");

});

document.querySelectorAll(".music-card")[index].classList.add("playing");

audio.src = songs[index].file;

audio.load();

audio.play();

playerTitle.innerText = songs[index].title;
playerArtist.innerText = songs[index].artist;
playerCover.src = songs[index].cover;

}

function togglePlay(index){

let buttons = document.querySelectorAll(".card-play");  

if(currentSong === index){  

    if(audio.paused){  

        audio.play();  

        buttons[index].innerText = "⏸";
buttons[index].classList.add("active");  

        document.querySelectorAll(".music-card")[index].classList.add("playing");  

    }else{  

        audio.pause();  

        buttons[index].innerText = "▶";
buttons[index].classList.remove("active");  

        document.querySelectorAll(".music-card")[index].classList.remove("playing");  

    }  

}else{  

    buttons.forEach(btn=>{  
        btn.innerText = "Play";  
    });  

    playSong(index);

buttons[index].innerText = "⏸";
buttons[index].classList.add("active");  

}

}

function downloadSong(index){

const link = document.createElement("a");

link.href = songs[index].file;

link.download = songs[index].title;

link.click();

}

function shareSong(index){

if(navigator.share){

navigator.share({

title:songs[index].title,

url:window.location.href

});

}else{

alert("لینک صفحه را کپی کنید");

}

}

audio.addEventListener("ended",()=>{

currentSong++;

if(currentSong >= songs.length){

currentSong = 0;

}

playSong(currentSong);

});
audio.addEventListener("loadedmetadata",()=>{

let duration = audio.duration;

let minutes = Math.floor(duration / 60);

let seconds = Math.floor(duration % 60);

document.querySelectorAll(".duration")[currentSong].innerText =
minutes + ":" +
(seconds < 10 ? "0" + seconds : seconds);

});

audio.addEventListener("timeupdate",()=>{

let current = audio.currentTime;

let minutes = Math.floor(current / 60);

let seconds = Math.floor(current % 60);

document.querySelectorAll(".current-time")[currentSong].innerText =
minutes + ":" +
(seconds < 10 ? "0" + seconds : seconds);

let percent =
(audio.currentTime / audio.duration) * 100 || 0;

if(!isSeeking){

document.querySelectorAll(".seek-bar")[currentSong].value = percent;

}
document.querySelectorAll(".seek-bar")[currentSong].style.background =
`linear-gradient(
90deg,
rgba(220,120,50,0) 0%,
rgba(220,120,50,.9) 8%,
rgba(220,120,50,.9) ${percent}%,
rgba(220,120,50,.18) ${percent + 8}%,
rgba(220,120,50,0) 100%
)`;

    
});

console.log("MUSIC JS OK");

showSongs();


document.querySelectorAll(".seek-bar").forEach((bar)=>{

bar.addEventListener("touchstart",()=>{

isSeeking = true;

});


bar.addEventListener("change",()=>{

if(audio.duration){

audio.currentTime =
(bar.value / 100) * audio.duration;

}

isSeeking = false;

});


});
