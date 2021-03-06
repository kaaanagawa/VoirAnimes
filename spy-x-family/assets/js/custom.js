var path = window.location.pathname;
var page = path.split("/").pop();
var pageNumber = page.slice(0, page.length - 5);

$(".epnumber")[0].innerHTML = "Ep. " + pageNumber;
$(".title")[0].innerHTML = "Spy × Family";

animeName = "Spy × Family";
$(".title")[0].innerHTML = animeName;
document.title = "Ep." + pageNumber + " - " + animeName + " - VoirAnimes";

$('a[href="/VoirAnimes/spy-x-family/"]')[1].innerHTML = "<div class='object active'> Spy × Family </div>";

$("#previous-ep")[0].href = Number(pageNumber) - 1 + ".html";
$("#next-ep")[0].href = Number(pageNumber) + 1 + ".html";

if (pageNumber === "1") {
  $("#previous-ep")[0].href = "javascript:void(0)";
}

if (pageNumber === "25") {
  $("#next-ep")[0].href = "javascript:void(0)";
}

$("#en-sub")[0].src = "../assets/sub/" + pageNumber + "-en.vtt";
$("#fr-sub")[0].src = "../assets/sub/" + pageNumber + "-fr.vtt";

localStorage.setItem("watchSxF", pageNumber);
localStorage.setItem("PathWatchSxF", path);

const episodes = {
  1: "https://link.eu1.storjshare.io/jxlm6na6ahag7fx2ktluvs3oqu4q/animes-others%2Fspy-x-family%2F1.mp4",
  2: "https://link.eu1.storjshare.io/jx3zwpv5rep6g3wmkj2kmcly4siq/animes-others%2Fspy-x-family%2F2.mp4",
  3: "https://link.eu1.storjshare.io/jvw4j6n5hmxg57fk7b74tt3pyzwq/animes-others%2Fspy-x-family%2F3.mp4",
  4: "https://link.eu1.storjshare.io/jx76ofmqqw3tx5hzedkateodwgga/animes-others%2Fspy-x-family%2F4.mp4",
  5: "https://link.eu1.storjshare.io/jvvtgepiti6c3cg2ejacywnlxn4q/animes-others%2Fspy-x-family%2F5.mp4",
  6: "https://link.eu1.storjshare.io/jvbesslfr5raeqv6yfjeufgvqnhq/animes-others%2Fspy-x-family%2F6.mp4",
  7: "https://link.eu1.storjshare.io/jxudbryb3bfb63ngvtm5bpat3u6a/animes-others%2Fspy-x-family%2F7.mp4",
  8: "https://link.eu1.storjshare.io/jvlkdhbkw4vzb2m6z4arzr7dgpzq/animes-others%2Fspy-x-family%2F8.mp4",
  9: "https://link.eu1.storjshare.io/jux6orlgo6osedqa5yxctqd4yzca/animes-others%2Fspy-x-family%2F9.mp4",
  10: "https://link.eu1.storjshare.io/jwmfc54vs7dwt7gy6x5ssyjcshwq/animes-others%2Fspy-x-family%2F10.mp4",
  11: "https://link.storjshare.io/jwwlesbw5tgmxtvvfahisrwbsesa/animes-others%2Fspy-x-family%2F11.mp4",
  12: "https://link.storjshare.io/jxlusoudzsdxhmwphk3ugzvrvfsq/animes-others%2Fspy-x-family%2F12.mp4",
  13: "",
  14: "",
  15: "",
  16: "",
  17: "",
  18: "",
  19: "",
  20: "",
  21: "",
  22: "",
  23: "",
  24: "",
  25: "",
};

$("video")[0].src = episodes[window["pageNumber"]] + "?wrap=0";
