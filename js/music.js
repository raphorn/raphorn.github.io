const audio = new Audio();

const playerButton = document.querySelector(".player button");
const trackName = document.querySelector(".track");

let currentButton = null;

document.querySelectorAll(".play-btn").forEach(button => {

    button.addEventListener("click", () => {

        const file = button.dataset.track;

        if (audio.src.includes(file) && !audio.paused) {

            audio.pause();
            playerButton.innerHTML = "▶";
            button.innerHTML = "▶ پخش";
            return;

        }

        audio.src = file;
        audio.play();

        if (currentButton) {
            currentButton.innerHTML = "▶ پخش";
        }

        currentButton = button;

        button.innerHTML = "❚❚ توقف";

        playerButton.innerHTML = "❚❚";

        trackName.innerHTML = button.closest(".release-content").querySelector("h3").innerText;

    });

});

playerButton.addEventListener("click", () => {

    if (!audio.src) return;

    if (audio.paused) {

        audio.play();
        playerButton.innerHTML = "❚❚";

        if(currentButton){
            currentButton.innerHTML = "❚❚ توقف";
        }

    } else {

        audio.pause();
        playerButton.innerHTML = "▶";

        if(currentButton){
            currentButton.innerHTML = "▶ پخش";
        }

    }

});

audio.addEventListener("ended", () => {

    playerButton.innerHTML = "▶";

    if(currentButton){
        currentButton.innerHTML = "▶ پخش";
    }

});
