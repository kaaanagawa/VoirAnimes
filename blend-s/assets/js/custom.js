localStorage.setItem("watchedBlendS", "enabled");

var path = window.location.pathname;
var page = path.split("/").pop();
var pageNumber = page.slice(0, page.length - 5);

$(".epnumber")[0].innerHTML = "Ep. " + pageNumber;
$(".title")[0].innerHTML = "Blend S";

animeName = "Blend S";
$(".title")[0].innerHTML = animeName;
document.title = "Ep." + pageNumber + " - " + animeName + " - VoirAnimes";

$('a[href="/blend-s/"]')[2].innerHTML = "<div class='object active'> Blend S </div>";

$("#previous-ep")[0].href = Number(pageNumber) - 1 + ".html";
$("#next-ep")[0].href = Number(pageNumber) + 1 + ".html";

if (pageNumber === "1") {
  $("#previous-ep")[0].href = "javascript:void(0)";
}

if (pageNumber === "12") {
  $("#next-ep")[0].href = "javascript:void(0)";
}

$("#en-sub")[0].src = "../assets/sub/" + pageNumber + "-en.vtt";
$("#fr-sub")[0].src = "../assets/sub/" + pageNumber + "-fr.vtt";

const episodes = {
  1: "https://link.eu1.storjshare.io/jub6j63myuu5nvkn3h6xlb5y5yza/animes/blend-s/1.mp4",
  2: "https://link.eu1.storjshare.io/juj3k4lq2ef3stmjvbsox6vrrqea/animes/blend-s/2.mp4",
  3: "https://link.eu1.storjshare.io/jxpwnkfv3uyssv6mrsbqhhfvw32q/animes/blend-s/3.mp4",
  4: "https://link.eu1.storjshare.io/jvccrffwhcaxpdo2h5jajmtqmqwa/animes/blend-s/4.mp4",
  5: "https://link.eu1.storjshare.io/jxs4jykx7j676iedblj6sibjhola/animes/blend-s/5.mp4",
  6: "https://link.eu1.storjshare.io/jv2kb3hkk4f27hxvb2hgrie6stga/animes/blend-s/6.mp4",
  7: "https://link.eu1.storjshare.io/jubnq3ajve3amlvnwpmw3mfp4uwq/animes/blend-s/7.mp4",
  8: "https://link.eu1.storjshare.io/jx5ihu3jau72baqkr2ez2hvdrmjq/animes/blend-s/8.mp4",
  9: "https://link.eu1.storjshare.io/jwb65kehajydi3srey2xhighyw5a/animes/blend-s/9.mp4",
  10: "https://link.eu1.storjshare.io/jubsflinkkjifmgpgpaic6rpjaka/animes/blend-s/10.mp4",
  11: "https://link.eu1.storjshare.io/jvonobx2oadkpw6xvbjauqykvrka/animes/blend-s/11.mp4",
  12: "https://link.eu1.storjshare.io/jwkrjxnaawn3irkyotlsg5thnlpq/animes/blend-s/12.mp4",
};

$("video")[0].src = episodes[window["pageNumber"]] + "?wrap=0";
