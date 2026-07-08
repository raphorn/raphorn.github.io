const songs = [
{
title: "ریمیکس اول",
artist: "RAPHORN",
file: "music/song1.mp3",
cover: "images/cover1.jpg"
}
];

const list = document.getElementById("music-list");

songs.forEach(song => {

list.innerHTML += `
<div class="release-card">

<div class="release-cover">
<img src="${song.cover}" alt="${song.title}">
</div>

<div class="release-content">

<h3>${song.title}</h3>

<p>${song.artist}</p>

<div class="release-buttons">

<button onclick="playSong('${song.file}')">
پخش
</button>

<a href="${song.file}" download class="download-btn">
دانلود
</a>

</div>

</div>

</div>
`;

});

function playSong(file){

const audio = document.getElementById("audio");

audio.src = file;

audio.play();

}
