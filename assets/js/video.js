$("#video-box")[0].innerHTML = "<video type='video/mp4' playsinline controls autoplay> <source type='video/mp4' size='1080'> <track label='English' kind='subtitles' srclang='en' id='en-sub'> <track label='Francais' kind='subtitles' srclang='fr' id='fr-sub' default> </video>";

// Time at loading
// const loadTimeCookie = localStorage.getItem("currentTimeCookie");
// let currentTimeStatus = false;

const player = new Plyr("video", {
  captions: {
    active: true,
    update: true,
  },
});

// player.on("playing", () => {
//   if (!currentTimeStatus) {
//     player.currentTime = parseInt(loadTimeCookie);
//     currentTimeStatus = true;
//   }
// });

let video = $("video")[0];

const supported = Plyr.supported("video", "html5", true);

function toggleFullScreen() {
  if (!document.fullscreenElement) {
    player.fullscreen.enter();
  } else {
    if (document.exitFullscreen) {
      player.fullscreen.exit();
    }
  }
}

function togglePlay() {
  if (video.currentTime > 0 || !video.paused || !video.ended || video.readyState > 2) {
    player.play();
  } else {
    player.pause();
  }
}

document.addEventListener("keydown", function (e) {
  if (e.key === "f") {
    toggleFullScreen();
  }

  if (e.key === "k") {
    togglePlay();
  }
});

// Fullscreen

player.on("enterfullscreen", (event) => {
  screen.orientation.lock("landscape");
});

player.on("exitfullscreen", (event) => {
  screen.orientation.lock("portrait");
});

// Resume from last time

// video.addEventListener("timeupdate", () => {
//   localStorage.setItem("currentTimeCookie", player.currentTime);
// });

// Activer options en plus :

// const player = new Plyr("video", { controls: ["play-large", "play", "progress", "current-time", "mute", "volume", "captions", "settings", "download", "pip", "airplay", "fullscreen"], captions: { active: true }});

video.addEventListener("webkitbeginfullscreen webkitendfullscreen", (event) => {
  if (event.type === "webkitbeginfullscreen") {
    document.documentElement.style.setProperty("--webkit-text-track-display", "block");
  } else {
    document.documentElement.style.setProperty("--webkit-text-track-display", "none");
  }
});
