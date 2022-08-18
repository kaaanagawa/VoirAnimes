var path = window.location.pathname;
var page = path.split("/").pop();
var pageNumber = page.slice(0, page.length - 5);

$(".epnumber")[0].innerHTML = "Ep. " + pageNumber;

animeName = "Berserk";
$(".title")[0].innerHTML = animeName;
document.title = "Ep." + pageNumber + " - " + animeName + " - VoirAnimes";

$('a[href="/VoirAnimes/berserk/"]')[2].innerHTML = "<div class='object active'> Berserk </div>";

$("#previous-ep")[0].href = Number(pageNumber) - 1 + ".html";
$("#next-ep")[0].href = Number(pageNumber) + 1 + ".html";

if (pageNumber === "1") {
  $("#previous-ep")[0].href = "javascript:void(0)";
}

if (pageNumber === "24") {
  $("#next-ep")[0].href = "javascript:void(0)";
}

$("#en-sub")[0].src = "../assets/sub/" + pageNumber + "-en.vtt";
$("#fr-sub")[0].src = "../assets/sub/" + pageNumber + "-fr.vtt";

localStorage.setItem("watchBer", pageNumber);
localStorage.setItem("PathWatchBer", path);

const episodes = {
  1: "https://link.storjshare.io/jwxnvinkwir75xqlednb5qwx5yfa/anime%2Fberserk%2F1.mp4",
  2: "https://link.storjshare.io/jvmnrxswdegvqrck5duyqs56umga/anime%2Fberserk%2F2.mp4",
  3: "https://link.storjshare.io/jx2uwsonxnvfb4wtxqqg2wku6uia/anime%2Fberserk%2F3.mp4",
  4: "https://link.storjshare.io/juaukjjcftufzl4z6ykkm5zn5v6q/anime%2Fberserk%2F4.mp4",
  5: "https://link.storjshare.io/jupjcwfbjlobzymygaqbtsjvvmja/anime%2Fberserk%2F5.mp4",
  6: "https://link.storjshare.io/jwfs5ss4oefvo2wurv2prqzowoaq/anime%2Fberserk%2F6.mp4",
  7: "https://link.storjshare.io/jvtdgxrelunsxjqivb235s3z4fzq/anime%2Fberserk%2F7.mp4",
  8: "https://link.storjshare.io/jxjvx3an764q3jqyneekj643uf7q/anime%2Fberserk%2F8.mp4",
  9: "https://link.storjshare.io/jvvo6h2p75qe243y7n2mml5dk5oa/anime%2Fberserk%2F9.mp4",
  10: "https://link.storjshare.io/jwi3mswlgsimcenkvcqnydjz5rrq/anime%2Fberserk%2F10.mp4",
  11: "https://link.storjshare.io/jvc2s6dfqsiv5u7wb4ibz3bkrwva/anime%2Fberserk%2F11.mp4",
  12: "https://link.storjshare.io/jvajff5wwthh5hooo3ebfkddsqgq/anime%2Fberserk%2F12.mp4",
  13: "https://link.storjshare.io/jvujv3cvmuekkkk4twf5hwir4qea/anime%2Fberserk%2F13.mp4",
  14: "https://link.storjshare.io/jvso5t7ssz73ho67e3hmddw7d3qa/anime%2Fberserk%2F14.mp4",
  15: "https://link.storjshare.io/jvzvxnltmdtvdewsoc3utqpanxcq/anime%2Fberserk%2F15.mp4",
  16: "https://link.storjshare.io/jwdfyxzw34b42e7vzwj3aylvl7ba/anime%2Fberserk%2F16.mp4",
  17: "https://link.storjshare.io/juq7hhtmwbogdlkbed3kbpasco4a/anime%2Fberserk%2F17.mp4",
  18: "https://link.storjshare.io/jvfrkocrmvsncqhvt2d6l5qoqzxq/anime%2Fberserk%2F18.mp4",
  19: "https://link.storjshare.io/jv4zxaqvbyrpgpcadiuv23gbxtvq/anime%2Fberserk%2F19.mp4",
  20: "https://link.storjshare.io/juvbyhrfdwzs34mm6ucwgqinf2pa/anime%2Fberserk%2F20.mp4",
  21: "https://link.storjshare.io/jug6d6jo2uvrwhlkwtxtvmztpcfa/anime%2Fberserk%2F21.mp4",
  22: "https://link.storjshare.io/jxayuvk76yadrbg2wlxy6tf6r3sq/anime%2Fberserk%2F22.mp4",
  23: "https://link.storjshare.io/ju3src34ke44ar4bfmn3cbjo5liq/anime%2Fberserk%2F23.mp4",
  24: "https://link.storjshare.io/jw23e4naaiqvhikqjhbe3uofw6fa/anime%2Fberserk%2F24.mp4",
};

$("video")[0].src = episodes[window["pageNumber"]] + "?wrap=0";
