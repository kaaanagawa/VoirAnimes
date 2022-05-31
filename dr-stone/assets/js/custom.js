localStorage.setItem("watchedDrStone", "enabled");

var path = window.location.pathname;
var page = path.split("/").pop();
pageNumber = page.slice(0, page.length - 5);

shortUrl = pageNumber + ".html";
length = shortUrl.length *= -1;
var url = window.location.pathname + window.location.search;
season = url.slice(15, length);

$(".epnumber")[0].innerHTML = "Ep. " + pageNumber;

animeName = "Dr. Stone";
$(".title")[0].innerHTML = animeName;
document.title = animeName + " - VoirAnimes";

$('a[href="/VoirAnimes/dr-stone/"]')[2].innerHTML = "<div class='object active'> Dr. Stone </div>";

$("#previous-ep")[0].href = Number(pageNumber) - 1 + ".html";
$("#next-ep")[0].href = Number(pageNumber) + 1 + ".html";

$("#en-sub")[0].src = "../../assets/sub/" + season + pageNumber + "-en.vtt";
$("#fr-sub")[0].src = "../../assets/sub/" + season + pageNumber + "-fr.vtt";

const episodesS1 = {
  1: "https://link.eu1.storjshare.io/jwdsbntabt2y65lqx2covajlhu2q/animes/dr-stone/stone-world/1.mp4",
  2: "https://link.eu1.storjshare.io/jup6dnqallzzqc5gotdvz2e5a7yq/animes/dr-stone/stone-world/2.mp4",
  3: "https://link.eu1.storjshare.io/jvg6c5tjzbbv6mridpsyura7zeia/animes/dr-stone/stone-world/3.mp4",
  4: "https://link.eu1.storjshare.io/jw3y5efxn7br7b5fu4gzxjssjuea/animes/dr-stone/stone-world/4.mp4",
  5: "https://link.eu1.storjshare.io/jwngrhwg74vhcru7b2kz5c4liowq/animes/dr-stone/stone-world/5.mp4",
  6: "https://link.eu1.storjshare.io/juemppcd4hj6vbhpb47tvlntvzeq/animes/dr-stone/stone-world/6.mp4",
  7: "https://link.eu1.storjshare.io/jv5q4y5fa4eqx7achu47z5wl5cla/animes/dr-stone/stone-world/7.mp4",
  8: "https://link.eu1.storjshare.io/jwc2i3dzg3w2ae4qcwt2ihojkteq/animes/dr-stone/stone-world/8.mp4",
  9: "https://link.eu1.storjshare.io/ju4kq7gkczrlbkxwac6awkjfywdq/animes/dr-stone/stone-world/9.mp4",
  10: "https://link.eu1.storjshare.io/jxo7hha4t4wdzzcpk5plvacxqepa/animes/dr-stone/stone-world/10.mp4",
  11: "https://link.eu1.storjshare.io/jxuol4yqn7frrb7lbfw2nqrc44ya/animes/dr-stone/stone-world/11.mp4",
  12: "https://link.eu1.storjshare.io/jxbregpfjb3qrfky2wdhjt63umtq/animes/dr-stone/stone-world/12.mp4",
  13: "https://link.eu1.storjshare.io/ju3q4girxa7ep25x2ocl7xl6k5yq/animes/dr-stone/stone-world/13.mp4",
  14: "https://link.eu1.storjshare.io/juc4cle2hxxrjaxhu7yhpewrfk6q/animes/dr-stone/stone-world/14.mp4",
  15: "https://link.eu1.storjshare.io/jw6gk3bjwnrwo5bxevyq4qea55zq/animes/dr-stone/stone-world/15.mp4",
  16: "https://link.eu1.storjshare.io/jx3odpm5lgo7sm4ewfxn6xu3oemq/animes/dr-stone/stone-world/16.mp4",
  17: "https://link.eu1.storjshare.io/jxjztebcxohti76hii5f4k5qsrfa/animes/dr-stone/stone-world/17.mp4",
  18: "https://link.eu1.storjshare.io/jwkzwpjt5xehonekjfhsy4hk2l3a/animes/dr-stone/stone-world/18.mp4",
  19: "https://link.eu1.storjshare.io/jxuyvxyv76sebx2idzwf3tsxmm6a/animes/dr-stone/stone-world/19.mp4",
  20: "https://link.eu1.storjshare.io/jwmefbhck64b35dqhobsxx5urfvq/animes/dr-stone/stone-world/20.mp4",
  21: "https://link.eu1.storjshare.io/jx5sifdzb5646zzha6i2znchdvhq/animes/dr-stone/stone-world/21.mp4",
  22: "https://link.eu1.storjshare.io/jugpcerof3x3uh2tmlcgk5suqqqq/animes/dr-stone/stone-world/22.mp4",
  23: "https://link.eu1.storjshare.io/jvovei2p37asnjgdrjy24yvpo5ka/animes/dr-stone/stone-world/23.mp4",
  24: "https://link.eu1.storjshare.io/jwcpdapydg7zgeu2wxtrchriur6q/animes/dr-stone/stone-world/24.mp4",
};

const episodesS2 = {
  1: "https://link.eu1.storjshare.io/juxnk43upzhy6px3znhj5se3euka/animes/dr-stone/stone-wars/1.mp4",
  2: "https://link.eu1.storjshare.io/jvypivli7jm27oy2n6ycarf3nm2a/animes/dr-stone/stone-wars/2.mp4",
  3: "https://link.eu1.storjshare.io/jvu6cgdmdchhd7wpuhgs4si5d46q/animes/dr-stone/stone-wars/3.mp4",
  4: "https://link.eu1.storjshare.io/jwr6vp6jajsdbn2gdu3owppv4tba/animes/dr-stone/stone-wars/4.mp4",
  5: "https://link.eu1.storjshare.io/jxkdlbkcevh2u3o6jekmoyitntpa/animes/dr-stone/stone-wars/5.mp4",
  6: "https://link.eu1.storjshare.io/jvnp5jqqredvkqte32gonvlyi75a/animes/dr-stone/stone-wars/6.mp4",
  7: "https://link.eu1.storjshare.io/jub3f2dl6oa6jzzgiwqrpshyi4xq/animes/dr-stone/stone-wars/7.mp4",
  8: "https://link.eu1.storjshare.io/juvvdx2lbvxqhotje4upxiqrrgaq/animes/dr-stone/stone-wars/8.mp4",
  9: "https://link.eu1.storjshare.io/jvwl6lncrs4fcpzbizouxporblvq/animes/dr-stone/stone-wars/9.mp4",
  10: "https://link.eu1.storjshare.io/jujqgwblxqcirviwybrl4h3eacaa/animes/dr-stone/stone-wars/10.mp4",
  11: "https://link.eu1.storjshare.io/juhxmrjncjigiaotp33sx3h6qmvq/animes/dr-stone/stone-wars/11.mp4",
};

seasonLessSlash = season.slice(1, -1);

if (seasonLessSlash === "stone-world") {
  $(".epnumber")[0].innerHTML = "Stone World - Ep. " + pageNumber;
  document.title = "Stone World - " + animeName + " - VoirAnimes";
  $("video")[0].src = episodesS1[window["pageNumber"]] + "?wrap=0";
  if (pageNumber === "1") {
    $("#previous-ep")[0].href = "javascript:void(0)";
  }

  if (pageNumber === "26") {
    $("#next-ep")[0].innerHTML = "<button>Saison Suivante <ion-icon name='chevron-forward-outline'></ion-icon></button>";
    $("#next-ep")[0].href = "../stone-wars/";
  }
}

if (seasonLessSlash === "stone-wars") {
  $(".epnumber")[0].innerHTML = "Stone Wars - Ep. " + pageNumber;
  document.title = "Stone World - " + animeName + " - VoirAnimes";
  $("video")[0].src = episodesS2[window["pageNumber"]] + "?wrap=0";
  if (pageNumber === "1") {
    $("#previous-ep")[0].innerHTML = "<button><ion-icon name='chevron-back-outline'></ion-icon> Saison Précédente</button>";
    $("#previous-ep")[0].href = "../stone-world/24.html";
  }

  if (pageNumber === "48") {
    $("#next-ep")[0].innerHTML = "<button>Saison Suivante <ion-icon name='chevron-forward-outline'></ion-icon></button>";
    $("#next-ep")[0].href = "javascript:void(0)";
  }
}
