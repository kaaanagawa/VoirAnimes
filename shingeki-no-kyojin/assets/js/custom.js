localStorage.setItem("watchedSNK", "enabled");

var path = window.location.pathname;
var page = path.split("/").pop();
pageNumber = page.slice(0, page.length - 5);

shortUrl = pageNumber + ".html";
length = shortUrl.length *= -1;
var url = window.location.pathname + window.location.search;
season = url.slice(26, length);

animeName = "Shingeki No Kyojin";
$(".title")[0].innerHTML = animeName;
document.title = animeName + " - VoirAnimes";

$('a[href="/VoirAnimes/shingeki-no-kyojin/"]')[2].innerHTML = "<div class='object active'> Shingeki No Kyojin </div>";

$("#previous-ep")[0].href = Number(pageNumber) - 1 + ".html";
$("#next-ep")[0].href = Number(pageNumber) + 1 + ".html";

$("#en-sub")[0].src = "../../assets/sub/" + season + pageNumber + "-en.vtt";
$("#fr-sub")[0].src = "../../assets/sub/" + season + pageNumber + "-fr.vtt";

localStorage.setItem("watchSNK", pageNumber);
localStorage.setItem("PathWatchSNK", path);

const episodesS1 = {
  1: "https://link.eu1.storjshare.io/jwnastithqtjrfhod4jg6yqapgoa/animes/shingeki-no-kyojin/s1/1.mp4",
  2: "https://link.eu1.storjshare.io/juxerfvi34hjax2jbgrcc6nwxeya/animes%2Fshingeki-no-kyojin%2Fs1%2F2.mp4",
  3: "https://link.eu1.storjshare.io/jxc74t3nn3xrhcvd3cj6735v6aqa/animes%2Fshingeki-no-kyojin%2Fs1%2F3.mp4",
  4: "https://link.eu1.storjshare.io/juhgjcrfhjrxp5forpjh4fczi3wq/animes%2Fshingeki-no-kyojin%2Fs1%2F4.mp4",
  5: "https://link.eu1.storjshare.io/jwfgoqb7iuyara52te243m6u35ma/animes%2Fshingeki-no-kyojin%2Fs1%2F5.mp4",
  6: "https://link.eu1.storjshare.io/jvqh77gf77spgyzfhequowx7o2iq/animes%2Fshingeki-no-kyojin%2Fs1%2F6.mp4",
  7: "https://link.eu1.storjshare.io/juoyzyrxipiq7hbqrc6inaulqz2q/animes%2Fshingeki-no-kyojin%2Fs1%2F7.mp4",
  8: "https://link.eu1.storjshare.io/ju5rl3rakos6cfpjq7f325vkkdwq/animes%2Fshingeki-no-kyojin%2Fs1%2F8.mp4",
  9: "https://link.eu1.storjshare.io/jw2wcb7tsqnvotl5f2f4h6c7xttq/animes%2Fshingeki-no-kyojin%2Fs1%2F9.mp4",
  10: "https://link.eu1.storjshare.io/jvjsolizo3m3opywxrhyleyeania/animes%2Fshingeki-no-kyojin%2Fs1%2F10.mp4",
  11: "https://link.eu1.storjshare.io/jug4gbpmtocybgt33rr44p5ati7q/animes%2Fshingeki-no-kyojin%2Fs1%2F11.mp4",
  12: "https://link.eu1.storjshare.io/jxk66rxhfzump2i6e7n47dg2bb7a/animes%2Fshingeki-no-kyojin%2Fs1%2F12.mp4",
  13: "https://link.eu1.storjshare.io/jwihzureuwpcciji3dzzetv3yg3a/animes%2Fshingeki-no-kyojin%2Fs1%2F13.mp4",
  14: "https://link.eu1.storjshare.io/jvymxz4butt7it2uwrasjsdp3trq/animes%2Fshingeki-no-kyojin%2Fs1%2F14.mp4",
  15: "https://link.eu1.storjshare.io/jvtrxjloa275yaztvtdbtuayswga/animes%2Fshingeki-no-kyojin%2Fs1%2F15.mp4",
  16: "https://link.eu1.storjshare.io/jwbnztoj5w7mbdx2zvwrlinvnynq/animes%2Fshingeki-no-kyojin%2Fs1%2F16.mp4",
  17: "https://link.eu1.storjshare.io/jx4ciiadhjfhsgysmnxzi3ita6oa/animes%2Fshingeki-no-kyojin%2Fs1%2F17.mp4",
  18: "https://link.eu1.storjshare.io/jx6vzdhuiikqtacnkfw7dvnrdxrq/animes%2Fshingeki-no-kyojin%2Fs1%2F18.mp4",
  19: "https://link.eu1.storjshare.io/junqihavxcyyj7h26c24k3vyppwq/animes%2Fshingeki-no-kyojin%2Fs1%2F19.mp4",
  20: "https://link.eu1.storjshare.io/jw4c2brmtnqtmisvhsqdikl3geda/animes%2Fshingeki-no-kyojin%2Fs1%2F20.mp4",
  21: "https://link.eu1.storjshare.io/juv4gzhfrmkojp7zovbc2xxj25ma/animes%2Fshingeki-no-kyojin%2Fs1%2F21.mp4",
  22: "https://link.eu1.storjshare.io/jxzhu5znury3vwmzv63iesc4tfia/animes%2Fshingeki-no-kyojin%2Fs1%2F22.mp4",
  23: "https://link.eu1.storjshare.io/jvpivgd4to6rebvaewhoiowf6ogq/animes%2Fshingeki-no-kyojin%2Fs1%2F23.mp4",
  24: "https://link.eu1.storjshare.io/jwt2k3gcqb6kfogdgnv7o53oqtua/animes%2Fshingeki-no-kyojin%2Fs1%2F24.mp4",
  25: "https://link.eu1.storjshare.io/jvtscxpft6izwhaujdxz3qhcczaa/animes%2Fshingeki-no-kyojin%2Fs1%2F25.mp4",
};

const episodesS2 = {
  1: "https://link.eu1.storjshare.io/jwdwqjei334xtas7avk7wek77o4a/animes%2Fshingeki-no-kyojin%2Fs2%2F1.mp4",
  2: "https://link.eu1.storjshare.io/jxo3lxyuhmx4b7fvt56nmv3qn7vq/animes%2Fshingeki-no-kyojin%2Fs2%2F2.mp4",
  3: "https://link.eu1.storjshare.io/jwazrksi2t4szg63mlmcl3fgbgka/animes%2Fshingeki-no-kyojin%2Fs2%2F3.mp4",
  4: "https://link.eu1.storjshare.io/jwyxjvm2owomikshnzrr6cmx4g7a/animes%2Fshingeki-no-kyojin%2Fs2%2F4.mp4",
  5: "https://link.eu1.storjshare.io/jwefzdmlds7xt57pszbqtopgbgpq/animes%2Fshingeki-no-kyojin%2Fs2%2F5.mp4",
  6: "https://link.eu1.storjshare.io/jwt3xvixzorqj4q475wxpo2ut4pa/animes%2Fshingeki-no-kyojin%2Fs2%2F6.mp4",
  7: "https://link.eu1.storjshare.io/jwcgcev5resiy2wwiqeeexfvufoq/animes%2Fshingeki-no-kyojin%2Fs2%2F7.mp4",
  8: "https://link.eu1.storjshare.io/jxcva5znjyclcd7gfpvexqyxc6ra/animes%2Fshingeki-no-kyojin%2Fs2%2F8.mp4",
  9: "https://link.eu1.storjshare.io/jvea4gazuqckhleyu4alzkgppcna/animes%2Fshingeki-no-kyojin%2Fs2%2F9.mp4",
  10: "https://link.eu1.storjshare.io/jxdkmwed32lm7ob4v45ecicfvjnq/animes%2Fshingeki-no-kyojin%2Fs2%2F10.mp4",
  11: "https://link.eu1.storjshare.io/jwg65y7rf6txmbm36mpy6pd372aa/animes%2Fshingeki-no-kyojin%2Fs2%2F11.mp4",
  12: "https://link.eu1.storjshare.io/julpq3hhomtuez4raz4kmavdgulq/animes%2Fshingeki-no-kyojin%2Fs2%2F12.mp4",
};

const episodesS3 = {
  1: "https://link.eu1.storjshare.io/ju26pupdkzzwvj6h2k4ar3tkgbga/animes%2Fshingeki-no-kyojin%2Fs3%2F1.mp4",
  2: "https://link.eu1.storjshare.io/jwem5vrhtdz52qfx422dpxermggq/animes%2Fshingeki-no-kyojin%2Fs3%2F2.mp4",
  3: "https://link.eu1.storjshare.io/jusz27tzwaaexre3n7dzi6guesaa/animes%2Fshingeki-no-kyojin%2Fs3%2F3.mp4",
  4: "https://link.eu1.storjshare.io/jvarj257mwn57ws5zre4egwis7hq/animes%2Fshingeki-no-kyojin%2Fs3%2F4.mp4",
  5: "https://link.eu1.storjshare.io/jusilulluun3wjehyecei74rzqaa/animes%2Fshingeki-no-kyojin%2Fs3%2F5.mp4",
  6: "https://link.eu1.storjshare.io/jujqooyna4lhjnfxepryj2e2b32a/animes%2Fshingeki-no-kyojin%2Fs3%2F6.mp4",
  7: "https://link.eu1.storjshare.io/jwc3tcq3jt5wden2l5qg65eu3xpa/animes%2Fshingeki-no-kyojin%2Fs3%2F7.mp4",
  8: "https://link.eu1.storjshare.io/jvqogsetqmvc623md6budpxmyzva/animes%2Fshingeki-no-kyojin%2Fs3%2F8.mp4",
  9: "https://link.eu1.storjshare.io/jx2vob5pv4k55fjneaxmn5odeguq/animes%2Fshingeki-no-kyojin%2Fs3%2F9.mp4",
  10: "https://link.eu1.storjshare.io/jvp7pejte6htttl7fgtbbpifbdhq/animes%2Fshingeki-no-kyojin%2Fs3%2F10.mp4",
  11: "https://link.eu1.storjshare.io/jv5fddoa5vfwuc4dx5nrxiucd34a/animes%2Fshingeki-no-kyojin%2Fs3%2F11.mp4",
  12: "https://link.eu1.storjshare.io/jx6hioukg44g5xcnuc5wlyndg35q/animes%2Fshingeki-no-kyojin%2Fs3%2F12.mp4",
  13: "https://link.eu1.storjshare.io/jxejk6j6vglh4hgt65xx54dzaidq/animes%2Fshingeki-no-kyojin%2Fs3%2F13.mp4",
  14: "https://link.eu1.storjshare.io/jvgqvqsqp3q45e5srb4fd4bnca7q/animes%2Fshingeki-no-kyojin%2Fs3%2F14.mp4",
  15: "https://link.eu1.storjshare.io/juzrgw3qgxpg2wxoodlwnzjxwnra/animes%2Fshingeki-no-kyojin%2Fs3%2F15.mp4",
  16: "https://link.eu1.storjshare.io/jvdyjv6nb6pgf7v43qjgtun2cgxa/animes%2Fshingeki-no-kyojin%2Fs3%2F16.mp4",
  17: "https://link.eu1.storjshare.io/jwxqy3wataakzxwym2a4hjn3yhea/animes%2Fshingeki-no-kyojin%2Fs3%2F17.mp4",
  18: "https://link.eu1.storjshare.io/jummtm3v44hn5ndccrhtsuc23zba/animes%2Fshingeki-no-kyojin%2Fs3%2F18.mp4",
  19: "https://link.eu1.storjshare.io/ju3dqcbgmothevxdkdzyueobqsmq/animes%2Fshingeki-no-kyojin%2Fs3%2F19.mp4",
  20: "https://link.eu1.storjshare.io/jugke5ytwllp57fl2t2r53skud3a/animes%2Fshingeki-no-kyojin%2Fs3%2F20.mp4",
  21: "https://link.eu1.storjshare.io/jvlgpl6tnxkzbecxo2lsdh6lthha/animes%2Fshingeki-no-kyojin%2Fs3%2F21.mp4",
  22: "https://link.eu1.storjshare.io/ju7rd66bymbm7r4aeq7falbs63za/animes%2Fshingeki-no-kyojin%2Fs3%2F22.mp4",
};

const episodesS4 = {
  1: "https://link.eu1.storjshare.io/jwa5ibgi2zibpao5hitijmdtslcq/animes%2Fshingeki-no-kyojin%2Fs4%2F1.mp4",
  2: "https://link.eu1.storjshare.io/juksq7bfoatgo4zqvvi7fte6fwyq/animes%2Fshingeki-no-kyojin%2Fs4%2F2.mp4",
  3: "https://link.eu1.storjshare.io/jxmkmwjfwrgtibpp54nn3sq7qfoq/animes%2Fshingeki-no-kyojin%2Fs4%2F3.mp4",
  4: "https://link.eu1.storjshare.io/jxo3pt3sbap2kkok7absi4z4imdq/animes%2Fshingeki-no-kyojin%2Fs4%2F4.mp4",
  5: "https://link.eu1.storjshare.io/jxnsqju57adaffpdrrbwuxwjvyvq/animes%2Fshingeki-no-kyojin%2Fs4%2F5.mp4",
  6: "https://link.eu1.storjshare.io/juroqhwfa2vbzv2fw42yibfp43pa/animes%2Fshingeki-no-kyojin%2Fs4%2F6.mp4",
  7: "https://link.eu1.storjshare.io/jvztgh7qslwzexzbn7an42c6y7oa/animes%2Fshingeki-no-kyojin%2Fs4%2F7.mp4",
  8: "https://link.eu1.storjshare.io/jwvfg3phddhos4iiwcy3m423ohsq/animes%2Fshingeki-no-kyojin%2Fs4%2F8.mp4",
  9: "https://link.eu1.storjshare.io/jxblgucrpu5lh5cvqup7nbfvhxfq/animes%2Fshingeki-no-kyojin%2Fs4%2F9.mp4",
  10: "https://link.eu1.storjshare.io/ju5bw5ynmk5tkhvlz2pgrnnfc5ma/animes%2Fshingeki-no-kyojin%2Fs4%2F10.mp4",
  11: "https://link.eu1.storjshare.io/jxpuxdcdhyccgthjn7zx5r2tj62q/animes%2Fshingeki-no-kyojin%2Fs4%2F11.mp4",
  12: "https://link.eu1.storjshare.io/jxusz5ku4zth5sdgtjlvdusoowwa/animes%2Fshingeki-no-kyojin%2Fs4%2F12.mp4",
  13: "https://link.eu1.storjshare.io/jxnlm5qs5bnna2i5fqkkz4ag3zka/animes%2Fshingeki-no-kyojin%2Fs4%2F13.mp4",
  14: "https://link.eu1.storjshare.io/jx76epkvqgnjzk5crdowtdrekaba/animes%2Fshingeki-no-kyojin%2Fs4%2F14.mp4",
  15: "https://link.eu1.storjshare.io/ju6pn5f6vhvqnzw2ylxk7t2g2iiq/animes%2Fshingeki-no-kyojin%2Fs4%2F15.mp4",
  16: "https://link.eu1.storjshare.io/jwbafkd4mhawpyhbw3kzkomrbziq/animes%2Fshingeki-no-kyojin%2Fs4%2F16.mp4",
  17: "https://link.eu1.storjshare.io/jv357h6ljmqwwdd54khkeedtgk3a/animes%2Fshingeki-no-kyojin%2Fs4%2F17.mp4",
  18: "https://link.eu1.storjshare.io/jv7th6qmqrgpvvlt4qv42oddlfaq/animes%2Fshingeki-no-kyojin%2Fs4%2F18.mp4",
  19: "https://link.eu1.storjshare.io/julspopuerikozkwirwwmnwoiipa/animes%2Fshingeki-no-kyojin%2Fs4%2F19.mp4",
  20: "https://link.eu1.storjshare.io/ju3llwkfbftyv22b7axspqya4csa/animes%2Fshingeki-no-kyojin%2Fs4%2F20.mp4",
  21: "https://link.eu1.storjshare.io/juooyky4qeo6uaw7ocqxecaqs72q/animes%2Fshingeki-no-kyojin%2Fs4%2F21.mp4",
  22: "https://link.eu1.storjshare.io/ju7a3j7kcjlil4lppyqtnjppvazq/animes%2Fshingeki-no-kyojin%2Fs4%2F22.mp4",
  23: "https://link.eu1.storjshare.io/jx3mz4axl36pnpdbryktvk7xnywa/animes%2Fshingeki-no-kyojin%2Fs4%2F23.mp4",
  24: "https://link.eu1.storjshare.io/jvsnn5cr5akdz2utpkqmyvlaf3ta/animes%2Fshingeki-no-kyojin%2Fs4%2F24.mp4",
  25: "https://link.eu1.storjshare.io/jug73erezuf7b2foauzhqqzjqv6q/animes%2Fshingeki-no-kyojin%2Fs4%2F25.mp4",
  26: "https://link.eu1.storjshare.io/ju5ddjhpc2m2mmd5hei65l2rdsbq/animes%2Fshingeki-no-kyojin%2Fs4%2F26.mp4",
  27: "https://link.eu1.storjshare.io/jud52jri2maj4zw242pkamr7x5ea/animes%2Fshingeki-no-kyojin%2Fs4%2F27.mp4",
  28: "https://link.eu1.storjshare.io/jwxftolfxqvyg7ku6hrpln6dzo2a/animes%2Fshingeki-no-kyojin%2Fs4%2F28.mp4",
};

seasonLessSlash = season.slice(0, -1);

if (seasonLessSlash === "s1") {
  $(".epnumber")[0].innerHTML = "Saison 1 - Ep. " + pageNumber;
  document.title = "Saison 1 - " + animeName + " - VoirAnimes";
  $("video")[0].src = episodesS1[window["pageNumber"]] + "?wrap=0";
  if (pageNumber === "1") {
    $("#previous-ep")[0].href = "javascript:void(0)";
  }

  if (pageNumber === "25") {
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
    $("#previous-ep")[0].href = "../1-phantom-blood-and-battle-tendency/26.html";
  }

  if (pageNumber === "12") {
    $("#next-ep")[0].innerHTML = "<button>Saison Suivante <ion-icon name='chevron-forward-outline'></ion-icon></button>";
    $("#next-ep")[0].href = "../s3/";
  }
}

if (seasonLessSlash === "s3") {
  $(".epnumber")[0].innerHTML = "Saison 3 - Ep. " + pageNumber;
  document.title = "Saison 3 - " + animeName + " - VoirAnimes";
  $("video")[0].src = episodesS3[window["pageNumber"]] + "?wrap=0";
  if (pageNumber === "1") {
    $("#previous-ep")[0].innerHTML = "<button><ion-icon name='chevron-back-outline'></ion-icon> Saison Précédente</button>";
    $("#previous-ep")[0].href = "../2-stardust-crusaders/48.html";
  }

  if (pageNumber === "22") {
    $("#next-ep")[0].innerHTML = "<button>Saison Suivante <ion-icon name='chevron-forward-outline'></ion-icon></button>";
    $("#next-ep")[0].href = "../s4/";
  }
}

if (seasonLessSlash === "s4") {
  $(".epnumber")[0].innerHTML = "Saison 4 - Ep. " + pageNumber;
  document.title = "Saison 4 - " + animeName + " - VoirAnimes";
  $("video")[0].src = episodesS4[window["pageNumber"]] + "?wrap=0";
  if (pageNumber === "1") {
    $("#previous-ep")[0].innerHTML = "<button><ion-icon name='chevron-back-outline'></ion-icon> Saison Précédente</button>";
    $("#previous-ep")[0].href = "../3-diamond-is-unbreakable/39.html";
  }

  if (pageNumber === "28") {
    $("#next-ep")[0].innerHTML = "<button>Saison Suivante <ion-icon name='chevron-forward-outline'></ion-icon></button>";
    $("#next-ep")[0].href = "javascrpit:void(0)";
  }
}
