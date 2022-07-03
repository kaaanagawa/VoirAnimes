var path = window.location.pathname;
var page = path.split("/").pop();
pageNumber = page.slice(0, page.length - 5);

shortUrl = pageNumber + ".html";
length = shortUrl.length *= -1;
var url = window.location.pathname + window.location.search;
season = url.slice(20, length);

animeName = "Demon Slayer";
$(".title")[0].innerHTML = animeName;
document.title = animeName + " - VoirAnimes";

$('a[href="/VoirAnimes/demon-slayer/"]')[2].innerHTML = "<div class='object active'> Demon Slayer </div>";

$("#previous-ep")[0].href = Number(pageNumber) - 1 + ".html";
$("#next-ep")[0].href = Number(pageNumber) + 1 + ".html";

$("#en-sub")[0].src = "../../assets/sub/" + season + pageNumber + "-en.vtt";
$("#fr-sub")[0].src = "../../assets/sub/" + season + pageNumber + "-fr.vtt";

localStorage.setItem("watchDem", pageNumber);
localStorage.setItem("PathWatchDem", path);

const episodesS1 = {
  1: "https://link.eu1.storjshare.io/jxyq6ztx2s2vtc6j7fyywv7qz3qa/animes-others/demon-slayer/s1/1.mp4",
  2: "https://link.eu1.storjshare.io/ju5u7recaaadwk7r2a3zm4ecf2xq/animes-others/demon-slayer/s1/2.mp4",
  3: "https://link.eu1.storjshare.io/jwjoyj4ekx2oc2soo7vjqmhah5la/animes-others/demon-slayer/s1/3.mp4",
  4: "https://link.eu1.storjshare.io/jxso2wf5tfxujyqmi2xchevyulna/animes-others/demon-slayer/s1/4.mp4",
  5: "https://link.eu1.storjshare.io/jus6zvnvqs3cbk3x6a55aaegw7pq/animes-others/demon-slayer/s1/5.mp4",
  6: "https://link.eu1.storjshare.io/jxvq6vszhf2l2txkuhkxiw2aba5q/animes-others/demon-slayer/s1/6.mp4",
  7: "https://link.eu1.storjshare.io/jwsuxczynwqm7lajlpformzvugrq/animes-others/demon-slayer/s1/7.mp4",
  8: "https://link.eu1.storjshare.io/jwnagjplpcxerh2b5oybqwpg5prq/animes-others/demon-slayer/s1/8.mp4",
  9: "https://link.eu1.storjshare.io/jwv5vceho43fod4pid4hkhv2xsza/animes-others/demon-slayer/s1/9.mp4",
  10: "https://link.eu1.storjshare.io/jxccxtmu4znrybecrmt5qs4ilhgq/animes-others/demon-slayer/s1/10.mp4",
  11: "https://link.eu1.storjshare.io/jwkor4dojds2vx36ympmij6fk2xa/animes-others/demon-slayer/s1/11.mp4",
  12: "https://link.eu1.storjshare.io/juvwtq3lp2i5alm7kkeoznek24ga/animes-others/demon-slayer/s1/12.mp4",
  13: "https://link.eu1.storjshare.io/juv5mnltj5hz4rdt6s3anxybteaq/animes-others/demon-slayer/s1/13.mp4",
  14: "https://link.eu1.storjshare.io/jw6iq6mggnxxvrwuy7nhoqxha5ga/animes-others/demon-slayer/s1/14.mp4",
  15: "https://link.eu1.storjshare.io/ju5azlzyabjepxnpcsq42djfqx4q/animes-others/demon-slayer/s1/15.mp4",
  16: "https://link.eu1.storjshare.io/jx4mufazxu2azowbf3vhzcsz27ya/animes-others/demon-slayer/s1/16.mp4",
  17: "https://link.eu1.storjshare.io/jvlafi67hnjo674baxsrc7gafuiq/animes-others/demon-slayer/s1/17.mp4",
  18: "https://link.eu1.storjshare.io/jxgd6lxusxxqrpj7cltbyfizqe4q/animes-others/demon-slayer/s1/18.mp4",
  19: "https://link.eu1.storjshare.io/jxc65xlkqapzs6s3zlphjdbsvc5a/animes-others/demon-slayer/s1/19.mp4",
  20: "https://link.eu1.storjshare.io/jxmjkoinpqjszwp3o7tc2omhyiya/animes-others/demon-slayer/s1/20.mp4",
  21: "https://link.eu1.storjshare.io/jxqdcxwuvaapj3bauq77hgvxuo6q/animes-others/demon-slayer/s1/21.mp4",
  22: "https://link.eu1.storjshare.io/juuoiltjj6emeyluz2gvz2yqfliq/animes-others/demon-slayer/s1/22.mp4",
  23: "https://link.eu1.storjshare.io/jxcofpjobf2t6su272fojojqr7ta/animes-others/demon-slayer/s1/23.mp4",
  24: "https://link.eu1.storjshare.io/jwo57j2jvbgz2fbafrr7bwhcfb2q/animes-others/demon-slayer/s1/24.mp4",
  25: "https://link.eu1.storjshare.io/jv2jvsbgp6d3ztmtvuz4w2vwzouq/animes-others/demon-slayer/s1/25.mp4",
  26: "https://link.eu1.storjshare.io/jwppc6gcmctvwjdrcz3azz2xvxga/animes-others/demon-slayer/s1/26.mp4",
};

const episodesS2 = {
  1: "https://link.eu1.storjshare.io/jwzio432lqp4zelle6xu2fadolja/voiranimes%2Fdemon%20slayer%2Fs2%20p1%2F01.mp4",
  2: "https://link.eu1.storjshare.io/jux4qnl5ftt5pjs5q7gn4eiicxdq/voiranimes%2Fdemon%20slayer%2Fs2%20p1%2F02.mp4",
  3: "https://link.eu1.storjshare.io/ju6jgfhdulazli7g3fmdbcc4orqq/voiranimes%2Fdemon%20slayer%2Fs2%20p1%2F03.mp4",
  4: "https://link.eu1.storjshare.io/jugykuwfyc7virmw2cd3vot7uoxq/voiranimes%2Fdemon%20slayer%2Fs2%20p1%2F04.mp4",
  5: "https://link.eu1.storjshare.io/jv56fcg3cpvufrurzgcp7gzh7dla/voiranimes%2Fdemon%20slayer%2Fs2%20p1%2F05.mp4",
  6: "https://link.eu1.storjshare.io/jucfdiws7ltrlym7xbfjjk3odk2a/voiranimes%2Fdemon%20slayer%2Fs2%20p1%2F06.mp4",
  7: "https://link.eu1.storjshare.io/jxwtpkccd3sjqdonvbqnmbd5npea/voiranimes%2Fdemon%20slayer%2Fs2%20p1%2F07.mp4",
  8: "",
  9: "",
  10: "",
  11: "",
  12: "",
  13: "",
  14: "",
  15: "",
  16: "",
  17: "",
  18: "",
};

seasonLessSlash = season.slice(0, -1);

if (seasonLessSlash === "s1") {
  $(".epnumber")[0].innerHTML = "Saison 1 - Ep. " + pageNumber;
  document.title = "Saison 1 - " + animeName + " - VoirAnimes";
  $("video")[0].src = episodesS1[window["pageNumber"]] + "?wrap=0";
  if (pageNumber === "1") {
    $("#previous-ep")[0].href = "javascript:void(0)";
  }

  if (pageNumber === "26") {
    $("#next-ep")[0].innerHTML = "<button>Saison Suivante <ion-icon name='chevron-forward-outline'></ion-icon></button>";
    $("#next-ep")[0].href = "../s2/";
  }
}

if (seasonLessSlash === "s2") {
  $(".epnumber")[0].innerHTML = "Saison 2 - Ep. " + pageNumber;
  document.title = "Saison 2 - " + animeName + " - VoirAnimes";
  $("video")[0].src = episodesS2[window["pageNumber"]] + "?wrap=0";
  if (pageNumber === "1") {
    $("#previous-ep")[0].innerHTML = "<button><ion-icon name='chevron-back-outline'></ion-icon> Saison Précédente</button>";
    $("#previous-ep")[0].href = "../s1/26.html";
  }

  if (pageNumber === "11") {
    $("#next-ep")[0].innerHTML = "<button>Saison Suivante <ion-icon name='chevron-forward-outline'></ion-icon></button>";
    $("#next-ep")[0].href = "javascript:void(0)";
  }
}
