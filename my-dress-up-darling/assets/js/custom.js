var path = window.location.pathname;
var page = path.split("/").pop();
var pageNumber = page.slice(0, page.length - 5);

$(".epnumber")[0].innerHTML = "Ep. " + pageNumber;
$(".title")[0].innerHTML = "My Dress-Up Darling";

animeName = "My Dress-Up Darling";
$(".title")[0].innerHTML = animeName;
document.title = "Ep." + pageNumber + " - " + animeName + " - VoirAnimes";

$('a[href="/VoirAnimes/my-dress-up-darling/"]')[2].innerHTML =
  "<div class='object active'> My Dress-Up Darling </div>";

$("#previous-ep")[0].href = Number(pageNumber) - 1 + ".html";
$("#next-ep")[0].href = Number(pageNumber) + 1 + ".html";

if (pageNumber === "1") {
  $("#previous-ep")[0].href = "javascript:void(0)";
}

if (pageNumber === "13") {
  $("#next-ep")[0].href = "javascript:void(0)";
}

$("#en-sub")[0].src = "../assets/sub/" + pageNumber + "-en.vtt";
$("#fr-sub")[0].src = "../assets/sub/" + pageNumber + "-fr.vtt";

localStorage.setItem("watchMDD", pageNumber);
localStorage.setItem("PathWatchMDD", path);

const episodes = {
  1: "https://link.storjshare.io/jwmvbpxyjs7e77ia7pdimj3pcvra/animes-others%2Fmy-dress-up-darling%2F1.mp4",
  2: "https://link.storjshare.io/jvikxza43trqbsamribrbyqpvnmq/animes-others%2Fmy-dress-up-darling%2F2.mp4",
  3: "https://link.storjshare.io/jun3lxe7n4dzbocdl4o5yvlg6oya/animes-others%2Fmy-dress-up-darling%2F3.mp4",
  4: "https://link.storjshare.io/jwlktdsm76racee7xcincl7sfnbq/animes-others%2Fmy-dress-up-darling%2F4.mp4",
  5: "https://link.storjshare.io/jx25nhfc2k2kc7gaay2xhqb243oq/animes-others%2Fmy-dress-up-darling%2F5.mp4",
  6: "https://link.storjshare.io/jwjqqzyimux7faw463xrf3zsyw4q/animes-others%2Fmy-dress-up-darling%2F6.mp4",
  7: "https://link.storjshare.io/juj2e22iytwn4o5lyugtu5w6yytq/animes-others%2Fmy-dress-up-darling%2F7.mp4",
  8: "https://link.storjshare.io/jwjpom5vao3ehyz6yrk5y73ps32q/animes-others%2Fmy-dress-up-darling%2F8.mp4",
  9: "https://link.storjshare.io/jvsewgxxk6miphkyoaytz6gkrfiq/animes-others%2Fmy-dress-up-darling%2F9.mp4",
  10: "https://link.storjshare.io/ju6kvn42deqsgxwsautfq2tt2p2q/animes-others%2Fmy-dress-up-darling%2F10.mp4",
  11: "https://link.storjshare.io/jvgll2su2nnvhbkfki7rd5uz27ra/animes-others%2Fmy-dress-up-darling%2F11.mp4",
  12: "https://link.storjshare.io/jvqjrpungaskbcjwzlxg4ahrt7vq/animes-others%2Fmy-dress-up-darling%2F12.mp4",
};

$("video")[0].src = episodes[window["pageNumber"]] + "?wrap=0";
