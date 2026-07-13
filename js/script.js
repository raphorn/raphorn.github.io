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
            playBtn.classList.add("active");
        }else{
            audio.pause();
            playBtn.innerHTML = "▶";
            playBtn.classList.remove("active");
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

// بستن منو با کلیک روی بیرون
document.addEventListener("click", (e) => {

    if (
        !sidebar.contains(e.target) &&
        !menuBtn.contains(e.target)
    ) {
        sidebar.classList.remove("active");
    }

});


// بستن منو بعد از انتخاب گزینه
const menuLinks = document.querySelectorAll("#sidebar a");

menuLinks.forEach(link => {

    link.addEventListener("click", () => {
        sidebar.classList.remove("active");
    });

});
