function showSongs(){

list.innerHTML = "";

songs.forEach((song,index)=>{

list.innerHTML += `

<div class="music-card">

<div class="music-cover">

<img src="${song.cover}" alt="${song.title}">

<div class="vinyl"></div>

</div>

<div class="music-info">

<h3>${song.title}</h3>

<p>${song.artist}</p>

</div>

<div class="music-progress">

<span class="current-time">0:00</span>

<input
type="range"
min="0"
max="100"
value="0"
class="seek-bar"
id="seek-${index}"
>

<span class="duration">0:00</span>

</div>

<div class="music-controls">

<button class="play-btn-card"
onclick="playSong(${index})">

Play

</button>

<button>

Download

</button>

<button>

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
