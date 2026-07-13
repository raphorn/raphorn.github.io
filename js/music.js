console.log("music.js loaded");

const songs = [

{
title: "ریمیکس شوم از راشد",
artist: "RAASHED",
file: "music/music/beat_2.mp3",
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

const playBtn = document.getElementById("play-btn");
const nextBtn = document.getElementById("next-btn");
const prevBtn = document.getElementById("prev-btn");

const mainProgress = document.getElementById("main-progress");
const currentTimeText = document.getElementById("current-time");
const totalTimeText = document.getElementById("total-time");

let currentSong = 0;

function showSongs(){

list.innerHTML="";

songs.forEach((song,index)=>{

list.innerHTML+=`

<div class="music-card">

<div class="music-cover">
<img src="${song.cover}" alt="${song.title}">
</div>

<div class="music-info">
<h3>${song.title}</h3>
<p>${song.artist}</p>
</div>

<div class="music-progress">

<span class="current-time">0:00</span>

<input
type="range"
class="seek-bar"
min="0"
max="100"
value="0"
id="seek-${index}">

<span class="duration">0:00</span>

</div>

<div class="music-controls">

<button class="card-play" onclick="togglePlay(${index})">
Play
</button>

<button onclick="downloadSong(${index})">
Download
</button>

<button onclick="shareSong(${index})">
Share
</button>

</div>

</div>

`;

});

bindSeekBars();

}

function playSong(index){

currentSong=index;

document.querySelectorAll(".music-card").forEach(card=>{
card.classList.remove("playing");
});

document.querySelectorAll(".music-card")[index].classList.add("playing");

audio.src=songs[index].file;

playerTitle.innerText=songs[index].title;
playerArtist.innerText=songs[index].artist;
playerCover.src=songs[index].cover;

audio.load();

audio.play();

document.querySelectorAll(".card-play").forEach(btn=>{
btn.innerText="Play";
});

document.querySelectorAll(".card-play")[index].innerText="Pause";

playBtn.innerText="⏸";

}

function togglePlay(index){

if(currentSong!==index){

playSong(index);

return;

}

if(audio.paused){

audio.play();

playBtn.innerText="⏸";

document.querySelectorAll(".card-play")[index].innerText="Pause";

}else{

audio.pause();

playBtn.innerText="▶";

document.querySelectorAll(".card-play")[index].innerText="Play";

}

}

function downloadSong(index){

const link=document.createElement("a");

link.href=songs[index].file;
link.download=songs[index].title;

document.body.appendChild(link);
link.click();
document.body.removeChild(link);

}

function shareSong(index){

if(navigator.share){

navigator.share({

title:songs[index].title,
text:songs[index].artist,
url:window.location.href

});

}else{

alert("مرورگر شما از اشتراک‌گذاری پشتیبانی نمی‌کند.");

}

}

audio.addEventListener("loadedmetadata",()=>{

const duration=audio.duration;

const minutes=Math.floor(duration/60);
const seconds=Math.floor(duration%60);

const time=
minutes+":"+(seconds<10?"0"+seconds:seconds);

document.querySelectorAll(".duration")[currentSong].innerText=time;

totalTimeText.innerText=time;

});

audio.addEventListener("timeupdate",()=>{

if(!audio.duration)return;

const current=audio.currentTime;

const minutes=Math.floor(current/60);
const seconds=Math.floor(current%60);

const currentText=
minutes+":"+(seconds<10?"0"+seconds:seconds);

document.querySelectorAll(".current-time")[currentSong].innerText=currentText;

currentTimeText.innerText=currentText;

const percent=(audio.currentTime/audio.duration)*100;

mainProgress.value=percent;

document.querySelectorAll(".seek-bar")[currentSong].value=percent;

});

audio.addEventListener("ended",()=>{

currentSong++;

if(currentSong>=songs.length){

currentSong=0;

}

playSong(currentSong);

});

function bindSeekBars(){

document.querySelectorAll(".seek-bar").forEach((bar)=>{

bar.addEventListener("input",()=>{

if(audio.duration){

audio.currentTime=
(bar.value/100)*audio.duration;

}

});

});

}

mainProgress.addEventListener("input",()=>{

if(audio.duration){

audio.currentTime=
(mainProgress.value/100)*audio.duration;

}

});

playBtn.onclick=()=>{

togglePlay(currentSong);

};

nextBtn.onclick=()=>{

currentSong++;

if(currentSong>=songs.length){

currentSong=0;

}

playSong(currentSong);

};

prevBtn.onclick=()=>{

currentSong--;

if(currentSong<0){

currentSong=songs.length-1;

}

playSong(currentSong);

};

showSongs();

console.log("RAPHORN PLAYER READY");
