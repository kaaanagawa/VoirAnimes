function openOverlay() {
  $("#epselect-overlay")[0].style.opacity = "100";
  $("#epselect-overlay")[0].style.zIndex = "12";
  setTimeout(() => {
    document.body.classList.add("no-overflow");
  }, 333);
}

function closeOverlay() {
  $("#epselect-overlay")[0].style.opacity = "0";
  $("#epselect-overlay")[0].style.zIndex = "-1";
  setTimeout(() => {
    document.body.classList.remove("no-overflow");
  }, 333);
}

$("#epselect-overlay-close")[0].addEventListener("click", () => {
  closeOverlay();
});

if (window.location.pathname === "/VoirAnimes/assassination-classroom/") {
  $(".lastSessionSeek")[0].setAttribute("href", localStorage.getItem("PathWatchAss"));
}

if (window.location.pathname === "/VoirAnimes/black-clover/") {
  $(".lastSessionSeek")[0].setAttribute("href", localStorage.getItem("PathWatchBla"));
}

if (window.location.pathname === "/VoirAnimes/blend-s/") {
  $(".lastSessionSeek")[0].setAttribute("href", localStorage.getItem("PathWatchBle"));
}

if (window.location.pathname === "/VoirAnimes/demon-slayer/") {
  $(".lastSessionSeek")[0].setAttribute("href", localStorage.getItem("PathWatchDem"));
}

if (window.location.pathname === "/VoirAnimes/dr-stone/") {
  $(".lastSessionSeek")[0].setAttribute("href", localStorage.getItem("PathWatchDrS"));
}

if (window.location.pathname === "/VoirAnimes/haikyu/") {
  $(".lastSessionSeek")[0].setAttribute("href", localStorage.getItem("PathWatchHai"));
}

if (window.location.pathname === "/VoirAnimes/horimiya/") {
  $(".lastSessionSeek")[0].setAttribute("href", localStorage.getItem("PathWatchHor"));
}

if (window.location.pathname === "/VoirAnimes/hunter-x-hunter/") {
  $(".lastSessionSeek")[0].setAttribute("href", localStorage.getItem("PathWatchHxH"));
}

if (window.location.pathname === "/VoirAnimes/initial-d/") {
  $(".lastSessionSeek")[0].setAttribute("href", localStorage.getItem("PathWatchIni"));
}

if (window.location.pathname === "/VoirAnimes/jojos-bizarre-adventure/") {
  $(".lastSessionSeek")[0].setAttribute("href", localStorage.getItem("PathWatchJBA"));
}

if (window.location.pathname === "/VoirAnimes/jujutsu-kaisen/") {
  $(".lastSessionSeek")[0].setAttribute("href", localStorage.getItem("PathWatchJJK"));
}

if (window.location.pathname === "/VoirAnimes/my-hero-academia/") {
  $(".lastSessionSeek")[0].setAttribute("href", localStorage.getItem("PathWatchMHA"));
}

if (window.location.pathname === "/VoirAnimes/naruto/") {
  $(".lastSessionSeek")[0].setAttribute("href", localStorage.getItem("PathWatchNar"));
}

if (window.location.pathname === "/VoirAnimes/one-piece/") {
  $(".lastSessionSeek")[0].setAttribute("href", localStorage.getItem("PathWatchOP"));
}

if (window.location.pathname === "/VoirAnimes/shingeki-no-kyojin/") {
  $(".lastSessionSeek")[0].setAttribute("href", localStorage.getItem("PathWatchSNK"));
}

if (window.location.pathname === "/VoirAnimes/spy-x-family/") {
  $(".lastSessionSeek")[0].setAttribute("href", localStorage.getItem("PathWatchSxF"));
}

if (window.location.pathname === "/VoirAnimes/vinland-saga/") {
  $(".lastSessionSeek")[0].setAttribute("href", localStorage.getItem("PathWatchVin"));
}
