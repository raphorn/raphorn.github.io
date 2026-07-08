const songs = [

{
title:"ریمیکس اول",
artist:"RAPHORN",
file:"music/song1.mp3",
cover:"images/cover1.jpg"
},

{
title:"ریمیکس دوم",
artist:"RAPHORN",
file:"music/song2.mp3",
cover:"images/cover2.jpg"
},

{
title:"ریمیکس سوم",
artist:"RAPHORN",
file:"music/song3.mp3",
cover:"images/cover3.jpg"
}

];
const list = document.getElementById("music-list");


songs.forEach(song=>{


list.innerHTML += `

<div class="release-card">


<div class="release-cover">

<img src="${song.cover}">

</div>


<div class="release-content">

<h3>${song.title}</h3>

<p>${song.artist}</p>


<button onclick="playSong('${song.file}')">

▶ پخش

</button>


</div>


</div>

`;


});


function playSong(file){

let audio = document.getElementById("audio");

audio.src=file;

audio.play();

}
