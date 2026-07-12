console.log("music.js loaded");
const songs = [

{
title: "ریمیکس جدید بنام شوم از راشد",
artist: "RAASHED",
file: "music/music/beat_2.mp3 (Remix).mp3",
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


<div class="music-card">


<div class="music-cover">

<img src="${song.cover}" alt="${song.title}">

</div>



<div class="music-info">

<h3>${song.title}</h3>

<p>${song.artist}</p>

</div>



<div class="music-progress">


<span class="current-time">
0:00
</span>


<input
type="range"
min="0"
max="100"
value="0"
class="seek-bar"
id="seek-${index}"
>


<span class="duration">
0:00
</span>


</div>




<div class="music-controls">


<button onclick="playSong(${index})">

Play

</button>



<button onclick="downloadSong(${index})">

Download

</button>



<button onclick="shareSong(${index})">

Share

</button>



</div>




<div class="equalizer">

<span></span>

<span></span>

<span></span>

<span></span>

<span></span>

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



console.log("MUSIC JS OK");
showSongs();


console.log("before showSongs");
showSongs();
console.log("after showSongs");
