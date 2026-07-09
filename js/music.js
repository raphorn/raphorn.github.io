const songs = [

{
title: "ریمیکس جديد بنام شوم از راشد",
artist: "RAASHED",
file: "music/music/song1.mp3",
cover: "images/file_000000008164722faab306d6308856f4.png"
},

{
title: "ریمیکس دوم",
artist: "RAPHORN",
file: "music/song2.mp3",
cover: "images/cover2.jpg"
},

{
title: "ریمیکس سوم",
artist: "RAPHORN",
file: "music/song3.mp3",
cover: "images/cover3.jpg"
}

];

const list = document.getElementById("music-list");
const audio = document.getElementById("audio");

const playerTitle = document.getElementById("player-title");
const playerArtist = document.getElementById("player-artist");
const playerCover = document.getElementById("player-cover");

let currentSong = 0;

function showSongs(){

list.innerHTML = "";

songs.forEach((song,index)=>{

list.innerHTML += `

<div class="release-card">

<div class="release-cover">

<img src="${song.cover}" alt="${song.title}">

</div>

<div class="release-content">

<h3>${song.title}</h3>

<p>${song.artist}</p>

<div class="release-buttons">

<button onclick="playSong(${index})">

▶ پخش

</button>

<a href="${song.file}" download>

⬇ دانلود

</a>

</div>

</div>

</div>

`;

});

}

function playSong(index){

currentSong = index;

audio.src = songs[index].file;

audio.play();

playerTitle.innerText = songs[index].title;

playerArtist.innerText = songs[index].artist;

playerCover.src = songs[index].cover;

}

showSongs();
