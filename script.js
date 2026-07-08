const playlist = [];

const audio = new Audio();

let currentTrack = 0;

const playButton = document.querySelector(".player button");
const trackName = document.querySelector(".track");

playButton.addEventListener("click",()=>{

if(playlist.length===0){

alert("No track available.");

return;

}

if(audio.paused){

audio.play();

playButton.innerHTML="❚❚";

}else{

audio.pause();

playButton.innerHTML="▶";

}

});

audio.addEventListener("ended",()=>{

playButton.innerHTML="▶";

});
const menuBtn = document.querySelector(".menu-btn");
const sidebar = document.getElementById("sidebar");

menuBtn.addEventListener("click", () => {
    sidebar.classList.toggle("active");
});
