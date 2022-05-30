localStorage.setItem("watchedInitialD", "enabled");

var path = window.location.pathname;
var page = path.split("/").pop();
pageNumber = page.slice(0, page.length - 5);

shortUrl = pageNumber + ".html";
length = shortUrl.length *= -1;
var url = window.location.pathname + window.location.search;
season = url.slice(16, length);

animeName = "Initial D";
$(".title")[0].innerHTML = animeName;
document.title = animeName + " - VoirAnimes";

$('a[href="/initial-d/"]')[2].innerHTML = "<div class='object active'> Initial D </div>";

$("#previous-ep")[0].href = Number(pageNumber) - 1 + ".html";
$("#next-ep")[0].href = Number(pageNumber) + 1 + ".html";

// $("#en-sub")[0].src = "../../assets/sub/" + season + pageNumber + "-en.vtt";
// $("#fr-sub")[0].src = "../../assets/sub/" + season + pageNumber + "-fr.vtt";

try {
  $.ajax({
    url: "../../assets/sub/" + season + pageNumber + "-fr.vtt",
    type: "HEAD",
    error: function () {
      console.log("Les sous titres sont incrustes");
    },
    success: function () {
      $("#fr-sub")[0].src = "../../assets/sub/" + season + pageNumber + "-fr.vtt";
    },
  });
} catch (e) {}

try {
  $.ajax({
    url: "../../assets/sub/" + season + pageNumber + "-en.vtt",
    type: "HEAD",
    error: function () {
      console.log("Les sous titres sont incrustes");
    },
    success: function () {
      $("#en-sub")[0].src = "../../assets/sub/" + season + pageNumber + "-en.vtt";
    },
  });
} catch (e) {}

const episodesS1 = {
  1: "https://link.eu1.storjshare.io/jxjgcssjwjgpzsphac24i5qanyxa/animes/initial-d/first-stage/1.mp4",
  2: "https://link.eu1.storjshare.io/jxuqngem6rijxpntr7ww42cqvmfa/animes%2Finitial-d%2Ffirst-stage%2F2.mp4",
  3: "https://link.eu1.storjshare.io/jvr74wjhfxp77f42b7l2rdym6mqa/animes%2Finitial-d%2Ffirst-stage%2F3.mp4",
  4: "https://link.eu1.storjshare.io/jupamlfv3hfisvjthcpi2hrql5lq/animes%2Finitial-d%2Ffirst-stage%2F4.mp4",
  5: "https://link.eu1.storjshare.io/jvdwzzv4ycr3favsz4lgdish7b3a/animes%2Finitial-d%2Ffirst-stage%2F5.mp4",
  6: "https://link.eu1.storjshare.io/jvz24hjulqd2qjjru6ttu7dvcr4q/animes%2Finitial-d%2Ffirst-stage%2F6.mp4",
  7: "https://link.eu1.storjshare.io/jxjclg3hg4ulzgfxycgvsox4jtkq/animes%2Finitial-d%2Ffirst-stage%2F7.mp4",
  8: "https://link.eu1.storjshare.io/jxdy6hi3m6yhel6s5tyksitdgowa/animes%2Finitial-d%2Ffirst-stage%2F8.mp4",
  9: "https://link.eu1.storjshare.io/jwzz2eekfr3ddhmijgyitmpgkaga/animes%2Finitial-d%2Ffirst-stage%2F9.mp4",
  10: "https://link.eu1.storjshare.io/jvhpmzcvwd6qjy7nbewev3ea2f3q/animes%2Finitial-d%2Ffirst-stage%2F10.mp4",
  11: "https://link.eu1.storjshare.io/jxlx3v65jwkdkt2uvukipav3tzwq/animes%2Finitial-d%2Ffirst-stage%2F11.mp4",
  12: "https://link.eu1.storjshare.io/juywa2fqgkc2hq4lnrfg3v5ggvwa/animes%2Finitial-d%2Ffirst-stage%2F12.mp4",
  13: "https://link.eu1.storjshare.io/jxflrva3o77pgvziuuf3lleyplaq/animes%2Finitial-d%2Ffirst-stage%2F13.mp4",
  14: "https://link.eu1.storjshare.io/jxnvctuhewm33duibjdjcdfgd7na/animes%2Finitial-d%2Ffirst-stage%2F14.mp4",
  15: "https://link.eu1.storjshare.io/jwowk2swzjty7lbbns72dvnugq5a/animes%2Finitial-d%2Ffirst-stage%2F15.mp4",
  16: "https://link.eu1.storjshare.io/jwjvlsihyvljgwuu2dtpdetg6wua/animes%2Finitial-d%2Ffirst-stage%2F16.mp4",
  17: "https://link.eu1.storjshare.io/jw5hhjs6kza2b63p7p4sdtoutayq/animes%2Finitial-d%2Ffirst-stage%2F17.mp4",
  18: "https://link.eu1.storjshare.io/jwj532qn7rxu5fw6mc44dolfak7a/animes%2Finitial-d%2Ffirst-stage%2F18.mp4",
  19: "https://link.eu1.storjshare.io/judcvrxersqeibct2a3ubt37igcq/animes%2Finitial-d%2Ffirst-stage%2F19.mp4",
  20: "https://link.eu1.storjshare.io/juiercztac53qwwi2u67jzurcmaq/animes%2Finitial-d%2Ffirst-stage%2F20.mp4",
  21: "https://link.eu1.storjshare.io/jx7lqoyxokms6zqpnxite5ulrayq/animes%2Finitial-d%2Ffirst-stage%2F21.mp4",
  22: "https://link.eu1.storjshare.io/jwuwaqvqo4s4fwkjygra66f4hyaq/animes%2Finitial-d%2Ffirst-stage%2F22.mp4",
  23: "https://link.eu1.storjshare.io/jv7xp5giaghq4mlwkzk36ye2hraa/animes%2Finitial-d%2Ffirst-stage%2F23.mp4",
  24: "https://link.eu1.storjshare.io/jxurdfyjtrbdakd5j4aobcbrrgwa/animes%2Finitial-d%2Ffirst-stage%2F24.mp4",
  25: "https://link.eu1.storjshare.io/jusl6hixqwhhjqxngc4qzjvmrp4q/animes%2Finitial-d%2Ffirst-stage%2F25.mp4",
  26: "https://link.eu1.storjshare.io/jun5pirldjowx5wsltfbtvuu3k7q/animes%2Finitial-d%2Ffirst-stage%2F26.mp4",
};

const episodesS2 = {
  1: "https://link.eu1.storjshare.io/jxnzno4zeccnuw7xaq6l27owfx4a/animes%2Finitial-d%2Fsecond-stage%2F1.mp4",
  2: "https://link.eu1.storjshare.io/jvevrqqzm7oizcw7rrqvmb7nqwwa/animes%2Finitial-d%2Fsecond-stage%2F2.mp4",
  3: "https://link.eu1.storjshare.io/jvbxe2znuuy66mbi4cced3oirhua/animes%2Finitial-d%2Fsecond-stage%2F3.mp4",
  4: "https://link.eu1.storjshare.io/ju7j5nw2q46qshsr4eno4jnor53a/animes%2Finitial-d%2Fsecond-stage%2F4.mp4",
  5: "https://link.eu1.storjshare.io/jvgt4qml4str3pzndanbr4wpm3da/animes%2Finitial-d%2Fsecond-stage%2F5.mp4",
  6: "https://link.eu1.storjshare.io/jxy76ltz6ekyw5fifz4wurczvajq/animes%2Finitial-d%2Fsecond-stage%2F6.mp4",
  7: "https://link.eu1.storjshare.io/jvqjzc3kbaymgc25pcmse3s4tcda/animes%2Finitial-d%2Fsecond-stage%2F7.mp4",
  8: "https://link.eu1.storjshare.io/jxwy3rsur2ccbohepe6romof4i2q/animes%2Finitial-d%2Fsecond-stage%2F8.mp4",
  9: "https://link.eu1.storjshare.io/juityzoogins5ku4wtrz44sojzcq/animes%2Finitial-d%2Fsecond-stage%2F9.mp4",
  10: "https://link.eu1.storjshare.io/jwwawmitqn537xiirma4us2vgkxa/animes%2Finitial-d%2Fsecond-stage%2F10.mp4",
  11: "https://link.eu1.storjshare.io/jvfqkvhntgthrf45j6nvnncoteyq/animes%2Finitial-d%2Fsecond-stage%2F11.mp4",
  12: "https://link.eu1.storjshare.io/jxkk75whjg436noj326hsb6oo4fq/animes%2Finitial-d%2Fsecond-stage%2F12.mp4",
  13: "https://link.eu1.storjshare.io/jwhu344s6ca5kce4dcut3elhn7ha/animes%2Finitial-d%2Fsecond-stage%2F13.mp4",
};

const episodesS3 = {
  1: "https://link.eu1.storjshare.io/jwlapflogicavynhe5uyee5l7g5a/animes%2Finitial-d%2Fextra-stage%2F1.mp4",
};

const episodesS4 = {
  1: "https://link.eu1.storjshare.io/jxf4duhmdhvxbv6bgm2ujb4u36hq/animes%2Finitial-d%2Fthird-stage%2F1.mp4",
};

const episodesS5 = {
  1: "https://link.eu1.storjshare.io/jv2jiwv2lvika6odql2fjmmv5hyq/animes%2Finitial-d%2Fbattle-stage%2F1.mp4",
};

const episodesS6 = {
  1: "https://link.eu1.storjshare.io/jvfkhhq2npgsas3v6ujtk6blu3nq/animes%2Finitial-d%2Ffourth-stage%2F1.mp4",
  2: "https://link.eu1.storjshare.io/jvnn3uhjre5ocomybn7jk6dfrbtq/animes%2Finitial-d%2Ffourth-stage%2F2.mp4",
  3: "https://link.eu1.storjshare.io/jvvghvuzxn7gpx6jt3qf55r32tba/animes%2Finitial-d%2Ffourth-stage%2F3.mp4",
  4: "https://link.eu1.storjshare.io/jxkhs6onrhscxdqgl6fdd22kwuna/animes%2Finitial-d%2Ffourth-stage%2F4.mp4",
  5: "https://link.eu1.storjshare.io/jw3ywjxfvowaa5hm6yzpgyqenczq/animes%2Finitial-d%2Ffourth-stage%2F5.mp4",
  6: "https://link.eu1.storjshare.io/jvk3jtlbpkbem4aqiyqezwrlrl5q/animes%2Finitial-d%2Ffourth-stage%2F6.mp4",
  7: "https://link.eu1.storjshare.io/juu6pcq5eondkby6l6i5x2wypfea/animes%2Finitial-d%2Ffourth-stage%2F7.mp4",
  8: "https://link.eu1.storjshare.io/jxj3ytel6icgiziehizqjmigknnq/animes%2Finitial-d%2Ffourth-stage%2F8.mp4",
  9: "https://link.eu1.storjshare.io/jwgs2ygxtta22mj4lpcnyah5owpa/animes%2Finitial-d%2Ffourth-stage%2F9.mp4",
  10: "https://link.eu1.storjshare.io/jwzgyefv6ryalnxt6bpkl6o5ajsa/animes%2Finitial-d%2Ffourth-stage%2F10.mp4",
  11: "https://link.eu1.storjshare.io/jxmjavonops3luyk63hpdy2tv5wq/animes%2Finitial-d%2Ffourth-stage%2F11.mp4",
  12: "https://link.eu1.storjshare.io/jwbbzf3wv2v2nymdkzfnipnpwbjq/animes%2Finitial-d%2Ffourth-stage%2F12.mp4",
  13: "https://link.eu1.storjshare.io/jv73wgnzadc62zwgf5btk4sobpqa/animes%2Finitial-d%2Ffourth-stage%2F13.mp4",
  14: "https://link.eu1.storjshare.io/jxe42bgutebhywwtqcto3irojuha/animes%2Finitial-d%2Ffourth-stage%2F14.mp4",
  15: "https://link.eu1.storjshare.io/jwfcgkeuap2xjf2gto7jtq6gpg3q/animes%2Finitial-d%2Ffourth-stage%2F15.mp4",
  16: "https://link.eu1.storjshare.io/jwknsnb6ac6wu4tpnq4ejcwv6dna/animes%2Finitial-d%2Ffourth-stage%2F16.mp4",
  17: "https://link.eu1.storjshare.io/jud6ctelykvi2jmfbnfplmgilwta/animes%2Finitial-d%2Ffourth-stage%2F17.mp4",
  18: "https://link.eu1.storjshare.io/jwrepndhlefoo5osko2fpm3qtrrq/animes%2Finitial-d%2Ffourth-stage%2F18.mp4",
  19: "https://link.eu1.storjshare.io/jxnnn5m7di2d4dvqo6uzmuvcpnha/animes%2Finitial-d%2Ffourth-stage%2F19.mp4",
  20: "https://link.eu1.storjshare.io/jvouwer2fd6btbn55p4e2bdmwohq/animes%2Finitial-d%2Ffourth-stage%2F20.mp4",
  21: "https://link.eu1.storjshare.io/jvlf6hn6h75jhdotqjizlkkoceqq/animes%2Finitial-d%2Ffourth-stage%2F21.mp4",
  22: "https://link.eu1.storjshare.io/jvtckmocftj3jsdurhnq4eviqtwa/animes%2Finitial-d%2Ffourth-stage%2F22.mp4",
  23: "https://link.eu1.storjshare.io/ju4ll6siyo4n5zv4evi2pzkzpfsq/animes%2Finitial-d%2Ffourth-stage%2F23.mp4",
  24: "https://link.eu1.storjshare.io/jwu5u2gort4nyptx35rehs3x72hq/animes%2Finitial-d%2Ffourth-stage%2F24.mp4",
};

const episodesS7 = {
  1: "https://link.eu1.storjshare.io/jxocecp2kyj3eqwi2zbuefog6a2q/animes%2Finitial-d%2Fbattle-stage-2%2F1.mp4",
};

const episodesS8 = {
  1: "https://link.eu1.storjshare.io/jvzs4r452xwo2tts55cmf42cnzva/animes%2Finitial-d%2Fextra-stage-2%2F1.mp4",
};

const episodesS9 = {
  1: "https://link.eu1.storjshare.io/jvgotg4dwm4ixmxrii3lhht32gja/animes%2Finitial-d%2Ffifth-stage%2F1.mp4",
  2: "https://link.eu1.storjshare.io/jwwd6qfvgrddoq5cjf4x3bcpnhua/animes%2Finitial-d%2Ffifth-stage%2F2.mp4",
  3: "https://link.eu1.storjshare.io/jx66ilmjil2mxce5u7d2rsovhkoq/animes%2Finitial-d%2Ffifth-stage%2F3.mp4",
  4: "https://link.eu1.storjshare.io/jujlrntyojt2qwkmmf5alpphu7wq/animes%2Finitial-d%2Ffifth-stage%2F4.mp4",
  5: "https://link.eu1.storjshare.io/jww5dil7n5ep4nqu5eg6vgn6pxfq/animes%2Finitial-d%2Ffifth-stage%2F5.mp4",
  6: "https://link.eu1.storjshare.io/juxlzvehagf72vzvstq6mmqecuda/animes%2Finitial-d%2Ffifth-stage%2F6.mp4",
  7: "https://link.eu1.storjshare.io/ju35cwgatxlxtc5egftlytgvggrq/animes%2Finitial-d%2Ffifth-stage%2F7.mp4",
  8: "https://link.eu1.storjshare.io/jxwjjrdblbf5dipzh2inauk53arq/animes%2Finitial-d%2Ffifth-stage%2F8.mp4",
  9: "https://link.eu1.storjshare.io/jv2uveiiy4clkh5fcfgdonpncv3q/animes%2Finitial-d%2Ffifth-stage%2F9.mp4",
  10: "https://link.eu1.storjshare.io/jueckfqcd2l4p5a5nj633bqhfjsq/animes%2Finitial-d%2Ffifth-stage%2F10.mp4",
  11: "https://link.eu1.storjshare.io/jvpffipudcg7x3b7dywsnaor7s5q/animes%2Finitial-d%2Ffifth-stage%2F11.mp4",
  12: "https://link.eu1.storjshare.io/ju42ix35wkautiejdxsnif4qh2dq/animes%2Finitial-d%2Ffifth-stage%2F12.mp4",
  13: "https://link.eu1.storjshare.io/jxjnjq5dvggef5jvdopniqsjqpcq/animes%2Finitial-d%2Ffifth-stage%2F13.mp4",
  14: "https://link.eu1.storjshare.io/jxuscfmylfpp32euync5pi6libxq/animes%2Finitial-d%2Ffifth-stage%2F14.mp4",
};

const episodesS10 = {
  1: "https://link.eu1.storjshare.io/jxa26qu2mefn5fxe5dmbn6b4rh6q/animes%2Finitial-d%2Ffinal-stage%2F1.mp4",
  2: "https://link.eu1.storjshare.io/jvptmwmf6zxjsxy4p7aesi7wxlua/animes%2Finitial-d%2Ffinal-stage%2F2.mp4",
  3: "https://link.eu1.storjshare.io/jua4g5igpzomulwhq6rpleqhj4bq/animes%2Finitial-d%2Ffinal-stage%2F3.mp4",
  4: "https://link.eu1.storjshare.io/jwkkeevsmwhaar5hixkk5sdinmdq/animes%2Finitial-d%2Ffinal-stage%2F4.mp4",
};

const episodesS11 = {
  1: "https://link.eu1.storjshare.io/jvyl77imh5zpkonaizojkawkabja/animes%2Finitial-d%2Flegend%2F1.mp4",
  2: "https://link.eu1.storjshare.io/jwtd4enxuxvfevo7dxm67mv7c5aq/animes%2Finitial-d%2Flegend%2F2.mp4",
  3: "https://link.eu1.storjshare.io/jvlkzypmoh5pbgr2kstu37hbhyoq/animes%2Finitial-d%2Flegend%2F3.mp4",
};

const episodesS12 = {
  1: "https://link.eu1.storjshare.io/jvmgsrisj7gdtogqjzn5z2wfs2bq/animes%2Finitial-d%2Fbattle-stage-3%2F1.mp4",
};

seasonLessSlash = season.slice(1, -1);

if (seasonLessSlash === "1-first-stage") {
  $(".epnumber")[0].innerHTML = "First Stage - Ep. " + pageNumber;
  document.title = "First Stage - " + animeName + " - VoirAnimes";
  $("video")[0].src = episodesS1[window["pageNumber"]] + "?wrap=0";
  if (pageNumber === "1") {
    $("#previous-ep")[0].innerHTML = "<button class='locked'><ion-icon name='chevron-back-outline'></ion-icon> Saison Précédente</button>";
    $("#previous-ep")[0].href = "javascript:void(0)";
  }

  if (pageNumber === "26") {
    $("#next-ep")[0].innerHTML = "<button>Saison Suivante <ion-icon name='chevron-forward-outline'></ion-icon></button>";
    $("#next-ep")[0].href = "../2-second-stage/";
  }
}

if (seasonLessSlash === "2-second-stage") {
  $(".epnumber")[0].innerHTML = "Second Stage - Ep. " + pageNumber;
  document.title = "Second Stage - " + animeName + " - VoirAnimes";
  $("video")[0].src = episodesS2[window["pageNumber"]] + "?wrap=0";
  if (pageNumber === "1") {
    $("#previous-ep")[0].innerHTML = "<button><ion-icon name='chevron-back-outline'></ion-icon> Saison Précédente</button>";
    $("#previous-ep")[0].href = "../1-first-stage/26.html";
  }

  if (pageNumber === "48") {
    $("#next-ep")[0].innerHTML = "<button>Saison Suivante <ion-icon name='chevron-forward-outline'></ion-icon></button>";
    $("#next-ep")[0].href = "../3-extra-stage/";
  }
}

if (seasonLessSlash === "3-extra-stage") {
  $(".epnumber")[0].innerHTML = "Extra Stage - Ep. " + pageNumber;
  document.title = "Extra Stage - " + animeName + " - VoirAnimes";
  $("video")[0].src = episodesS3[window["pageNumber"]] + "?wrap=0";
  if (pageNumber === "1") {
    $("#previous-ep")[0].innerHTML = "<button><ion-icon name='chevron-back-outline'></ion-icon> Saison Précédente</button>";
    $("#previous-ep")[0].href = "../2-second-stage/13.html";
    $("#next-ep")[0].innerHTML = "<button>Saison Suivante <ion-icon name='chevron-forward-outline'></ion-icon></button>";
    $("#next-ep")[0].href = "../4-third-stage/";
  }
}

if (seasonLessSlash === "4-third-stage") {
  $(".epnumber")[0].innerHTML = "Third Stage - Ep. " + pageNumber;
  document.title = "Third Stage - " + animeName + " - VoirAnimes";
  $("video")[0].src = episodesS4[window["pageNumber"]] + "?wrap=0";
  if (pageNumber === "1") {
    $("#previous-ep")[0].innerHTML = "<button><ion-icon name='chevron-back-outline'></ion-icon> Saison Précédente</button>";
    $("#previous-ep")[0].href = "../3-extra-stage/1.html";
    $("#next-ep")[0].innerHTML = "<button>Saison Suivante <ion-icon name='chevron-forward-outline'></ion-icon></button>";
    $("#next-ep")[0].href = "../5-battle-stage/";
  }
}

if (seasonLessSlash === "5-battle-stage") {
  $(".epnumber")[0].innerHTML = "Battle Stage - Ep. " + pageNumber;
  document.title = "Battle Stage - " + animeName + " - VoirAnimes";
  $("video")[0].src = episodesS5[window["pageNumber"]] + "?wrap=0";
  if (pageNumber === "1") {
    $("#previous-ep")[0].innerHTML = "<button><ion-icon name='chevron-back-outline'></ion-icon> Saison Précédente</button>";
    $("#previous-ep")[0].href = "../4-third-stage/1.html";
    $("#next-ep")[0].innerHTML = "<button>Saison Suivante <ion-icon name='chevron-forward-outline'></ion-icon></button>";
    $("#next-ep")[0].href = "../6-fourth-stage/";
  }
}

if (seasonLessSlash === "6-fourth-stage") {
  $(".epnumber")[0].innerHTML = "Fourth Stage - Ep. " + pageNumber;
  document.title = "Fourth Stage - " + animeName + " - VoirAnimes";
  $("video")[0].src = episodesS6[window["pageNumber"]] + "?wrap=0";
  if (pageNumber === "1") {
    $("#previous-ep")[0].innerHTML = "<button><ion-icon name='chevron-back-outline'></ion-icon> Saison Précédente</button>";
    $("#previous-ep")[0].href = "../5-battle-stage/1.html";
  }

  if (pageNumber === "24") {
    $("#next-ep")[0].innerHTML = "<button>Saison Suivante <ion-icon name='chevron-forward-outline'></ion-icon></button>";
    $("#next-ep")[0].href = "../7-battle-stage-2/";
  }
}

if (seasonLessSlash === "7-battle-stage-2") {
  $(".epnumber")[0].innerHTML = "Battle Stage 2 - Ep. " + pageNumber;
  document.title = "Battle Stage 2 - " + animeName + " - VoirAnimes";
  $("video")[0].src = episodesS7[window["pageNumber"]] + "?wrap=0";
  if (pageNumber === "1") {
    $("#previous-ep")[0].innerHTML = "<button><ion-icon name='chevron-back-outline'></ion-icon> Saison Précédente</button>";
    $("#previous-ep")[0].href = "../6-fourth-stage/24.html";
    $("#next-ep")[0].innerHTML = "<button>Saison Suivante <ion-icon name='chevron-forward-outline'></ion-icon></button>";
    $("#next-ep")[0].href = "../8-extra-stage-2/";
  }
}

if (seasonLessSlash === "8-extra-stage-2") {
  $(".epnumber")[0].innerHTML = "Extra Stage 2 - Ep. " + pageNumber;
  document.title = "Extra Stage 2 - " + animeName + " - VoirAnimes";
  $("video")[0].src = episodesS8[window["pageNumber"]] + "?wrap=0";
  if (pageNumber === "1") {
    $("#previous-ep")[0].innerHTML = "<button><ion-icon name='chevron-back-outline'></ion-icon> Saison Précédente</button>";
    $("#previous-ep")[0].href = "../7-battle-stage-2/1.html";
    $("#next-ep")[0].innerHTML = "<button>Saison Suivante <ion-icon name='chevron-forward-outline'></ion-icon></button>";
    $("#next-ep")[0].href = "../9-fifth-stage/";
  }
}

if (seasonLessSlash === "9-fifth-stage") {
  $(".epnumber")[0].innerHTML = "Fifth Stage - Ep. " + pageNumber;
  document.title = "Fifth Stage - " + animeName + " - VoirAnimes";
  $("video")[0].src = episodesS9[window["pageNumber"]] + "?wrap=0";
  if (pageNumber === "1") {
    $("#previous-ep")[0].innerHTML = "<button><ion-icon name='chevron-back-outline'></ion-icon> Saison Précédente</button>";
    $("#previous-ep")[0].href = "../8-extra-stage-2/1.html";
  }

  if (pageNumber === "14") {
    $("#next-ep")[0].innerHTML = "<button>Saison Suivante <ion-icon name='chevron-forward-outline'></ion-icon></button>";
    $("#next-ep")[0].href = "../10-final-stage/";
  }
}

if (seasonLessSlash === "10-final-stage") {
  $(".epnumber")[0].innerHTML = "Final Stage - Ep. " + pageNumber;
  document.title = "Final Stage - " + animeName + " - VoirAnimes";
  $("video")[0].src = episodesS10[window["pageNumber"]] + "?wrap=0";
  if (pageNumber === "1") {
    $("#previous-ep")[0].innerHTML = "<button><ion-icon name='chevron-back-outline'></ion-icon> Saison Précédente</button>";
    $("#previous-ep")[0].href = "../9-fifth-stage/26.html";
  }

  if (pageNumber === "4") {
    $("#next-ep")[0].innerHTML = "<button>Saison Suivante <ion-icon name='chevron-forward-outline'></ion-icon></button>";
    $("#next-ep")[0].href = "../11-legend/";
  }
}

if (seasonLessSlash === "11-legend") {
  $(".epnumber")[0].innerHTML = "Legend - Ep. " + pageNumber;
  document.title = "Legend - " + animeName + " - VoirAnimes";
  $("video")[0].src = episodesS11[window["pageNumber"]] + "?wrap=0";
  if (pageNumber === "1") {
    $("#previous-ep")[0].innerHTML = "<button><ion-icon name='chevron-back-outline'></ion-icon> Saison Précédente</button>";
    $("#previous-ep")[0].href = "../10-final-stage/4.html";
  }

  if (pageNumber === "3") {
    $("#next-ep")[0].innerHTML = "<button>Saison Suivante <ion-icon name='chevron-forward-outline'></ion-icon></button>";
    $("#next-ep")[0].href = "../12-battle-stage-3/";
  }
}

if (seasonLessSlash === "12-battle-stage-3") {
  $(".epnumber")[0].innerHTML = "Battle Stage 3 - Ep. " + pageNumber;
  document.title = "Battle Stage 3 - " + animeName + " - VoirAnimes";
  $("video")[0].src = episodesS12[window["pageNumber"]] + "?wrap=0";
  if (pageNumber === "1") {
    $("#previous-ep")[0].innerHTML = "<button><ion-icon name='chevron-back-outline'></ion-icon> Saison Précédente</button>";
    $("#previous-ep")[0].href = "../11-legend/3.html";
    $("#next-ep")[0].innerHTML = "<button class='locked'>Saison Suivante <ion-icon name='chevron-forward-outline'></ion-icon></button>";
    $("#next-ep")[0].href = "javascript:void(0)";
  }
}
