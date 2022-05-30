// Pop Up
let cookiePopUp = localStorage.getItem("cookiePopUp");

let popup = $("#pop-up")[0];
let popupButton = $("#pop-up-button")[0];

if (cookiePopUp === null) {
  displayPopUp();
}

function displayPopUp() {
  setTimeout(() => {
    popup.style.transform = "none";
  }, 1000);
  localStorage.setItem("cookiePopUp", "enabled");
}

popupButton.addEventListener("click", () => {
  popup.style.transform = "translateX(-120%)";
});

// Watching
// Cookies if it's being watched
let watchedBlackClover = localStorage.getItem("watchedBlackClover"),
  watchedBlendS = localStorage.getItem("watchedBlendS"),
  watchedDS = localStorage.getItem("watchedDS"),
  watchedDrStone = localStorage.getItem("watchedDrStone"),
  watchedHaikyu = localStorage.getItem("watchedHaikyu"),
  watchedHorimiya = localStorage.getItem("watchedHorimiya"),
  watchedHXH = localStorage.getItem("watchedHXH"),
  watchedInitialD = localStorage.getItem("watchedInitialD"),
  watchedJOJO = localStorage.getItem("watchedJOJO"),
  watchedJJK = localStorage.getItem("watchedJJK"),
  watchedMHA = localStorage.getItem("watchedMHA"),
  watchedNaruto = localStorage.getItem("watchedNaruto"),
  watchedOP = localStorage.getItem("watchedOP"),
  watchedSNK = localStorage.getItem("watchedSNK"),
  watchedSXF = localStorage.getItem("watchedSXF");
  watchedVinLandSaga = localStorage.getItem("watchedVinLandSaga");

function checkWatched() {
  if (watchedBlackClover === "enabled") {
    $(".cardtitle")[0].classList.add("watching");
  } else {
    $(".cardtitle")[0].classList.remove("watching");
  }

  if (watchedBlendS === "enabled") {
    $(".cardtitle")[1].classList.add("watching");
  } else {
    $(".cardtitle")[1].classList.remove("watching");
  }

  if (watchedDS === "enabled") {
    $(".cardtitle")[2].classList.add("watching");
  } else {
    $(".cardtitle")[2].classList.remove("watching");
  }

  if (watchedDrStone === "enabled") {
    $(".cardtitle")[3].classList.add("watching");
  } else {
    $(".cardtitle")[3].classList.remove("watching");
  }

  if (watchedHaikyu === "enabled") {
    $(".cardtitle")[4].classList.add("watching");
  } else {
    $(".cardtitle")[4].classList.remove("watching");
  }

  if (watchedHorimiya === "enabled") {
    $(".cardtitle")[5].classList.add("watching");
  } else {
    $(".cardtitle")[5].classList.remove("watching");
  }

  if (watchedHXH === "enabled") {
    $(".cardtitle")[6].classList.add("watching");
  } else {
    $(".cardtitle")[6].classList.remove("watching");
  }

  if (watchedInitialD === "enabled") {
    $(".cardtitle")[7].classList.add("watching");
  } else {
    $(".cardtitle")[7].classList.remove("watching");
  }

  if (watchedJJK === "enabled") {
    $(".cardtitle")[8].classList.add("watching");
  } else {
    $(".cardtitle")[8].classList.remove("watching");
  }

  if (watchedJOJO === "enabled") {
    $(".cardtitle")[9].classList.add("watching");
  } else {
    $(".cardtitle")[9].classList.remove("watching");
  }

  if (watchedMHA === "enabled") {
    $(".cardtitle")[10].classList.add("watching");
  } else {
    $(".cardtitle")[10].classList.remove("watching");
  }

  if (watchedNaruto === "enabled") {
    $(".cardtitle")[11].classList.add("watching");
  } else {
    $(".cardtitle")[11].classList.remove("watching");
  }

  if (watchedOP === "enabled") {
    $(".cardtitle")[12].classList.add("watching");
  } else {
    $(".cardtitle")[12].classList.remove("watching");
  }

  if (watchedSNK === "enabled") {
    $(".cardtitle")[13].classList.add("watching");
  } else {
    $(".cardtitle")[13].classList.remove("watching");
  }

  if (watchedSXF === "enabled") {
    $(".cardtitle")[14].classList.add("watching");
  } else {
    $(".cardtitle")[14].classList.remove("watching");
  }

  if (watchedVinLandSaga === "enabled") {
    $(".cardtitle")[15].classList.add("watching");
  } else {
    $(".cardtitle")[15].classList.remove("watching");
  }
}

checkWatched();

$("#reset-watched")[0].addEventListener("click", () => {
  localStorage.setItem("watchedBlackClover", "disabled");
  localStorage.setItem("watchedBlendS", "disabled");
  localStorage.setItem("watchedDS", "disabled");
  localStorage.setItem("watchedDrStone", "disabled");
  localStorage.setItem("watchedHaikyu", "disabled");
  localStorage.setItem("watchedHorimiya", "disabled");
  localStorage.setItem("watchedHXH", "disabled");
  localStorage.setItem("watchedInitialD", "disabled");
  localStorage.setItem("watchedJOJO", "disabled");
  localStorage.setItem("watchedJJK", "disabled");
  localStorage.setItem("watchedMHA", "disabled");
  localStorage.setItem("watchedNaruto", "disabled");
  localStorage.setItem("watchedOP", "disabled");
  localStorage.setItem("watchedSNK", "disabled");
  localStorage.setItem("watchedSXF", "disabled");
  localStorage.setItem("watchedVinLandSaga", "disabled");

  checkWatched();
  location.reload();
});
