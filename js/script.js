const menuBtn = document.getElementById("menu-btn");
const sidebar = document.getElementById("sidebar");

menuBtn.addEventListener("click", () => {
    sidebar.classList.toggle("active");
});

const playBtn = document.getElementById("play-btn");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");

playBtn.addEventListener("click", () => {
    if(audio.src !== ""){
        if(audio.paused){
            audio.play();
            playBtn.innerHTML = "⏸";
        }else{
            audio.pause();
            playBtn.innerHTML = "▶";
        }
    }
});

nextBtn.addEventListener("click", () => {

    currentSong++;

    if(currentSong >= songs.length){
        currentSong = 0;
    }

    playSong(currentSong);

    playBtn.innerHTML = "⏸";

});

prevBtn.addEventListener("click", () => {

    currentSong--;

    if(currentSong < 0){
        currentSong = songs.length - 1;
    }

    playSong(currentSong);

    playBtn.innerHTML = "⏸";

});

audio.addEventListener("ended", () => {

    currentSong++;

    if(currentSong >= songs.length){
        currentSong = 0;
    }

    playSong(currentSong);

});
