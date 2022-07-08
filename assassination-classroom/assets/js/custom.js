var path = window.location.pathname;
var page = path.split("/").pop();
pageNumber = page.slice(0, page.length - 5);

shortUrl = pageNumber + ".html";
length = shortUrl.length *= -1;
var url = window.location.pathname + window.location.search;
season = url.slice(42, length);

animeName = "Assassination Classroom";
$(".title")[0].innerHTML = animeName;
document.title = animeName + " - VoirAnimes";

$('a[href="/VoirAnimes/assassination-classroom/"]')[2].innerHTML = "<div class='object active'> Assassination Classroom </div>";

$("#previous-ep")[0].href = Number(pageNumber) - 1 + ".html";
$("#next-ep")[0].href = Number(pageNumber) + 1 + ".html";

$("#en-sub")[0].src = "../../assets/sub/" + season + pageNumber + "-en.vtt";
$("#fr-sub")[0].src = "../../assets/sub/" + season + pageNumber + "-fr.vtt";

localStorage.setItem("watchAss", pageNumber);
localStorage.setItem("PathWatchAss", path);

const episodesS1 = {
  1: "https://link.storjshare.io/juoof4tq4ji5cw4upbi6k3ip7pdq/anime%2Fassassination-classroom%2Fs1%2F1.mp4",
  2: "https://link.storjshare.io/jxfjkqxtssf45kz2mdentnxc7ikq/anime%2Fassassination-classroom%2Fs1%2F2.mp4",
  3: "https://link.storjshare.io/jw2jr7ptaskrx6com6pygriipufq/anime%2Fassassination-classroom%2Fs1%2F3.mp4",
  4: "https://link.storjshare.io/jvs2nxgqx6ju5hcn6dzazpts3jeq/anime%2Fassassination-classroom%2Fs1%2F4.mp4",
  5: "https://link.storjshare.io/ju57tsvw5ijs6s5xzvfdu5kkktlq/anime%2Fassassination-classroom%2Fs1%2F5.mp4",
  6: "https://link.storjshare.io/jwk4tag5admykyqavxzoaxt7sl5a/anime%2Fassassination-classroom%2Fs1%2F6.mp4",
  7: "https://link.storjshare.io/jvwpvghyrtjh3qw4audhimt54z5a/anime%2Fassassination-classroom%2Fs1%2F7.mp4",
  8: "https://link.storjshare.io/jufscu5qywiq2nlkszg5osupodga/anime%2Fassassination-classroom%2Fs1%2F8.mp4",
  9: "https://link.storjshare.io/jwi3aszxur4idq5vexmay5v5576q/anime%2Fassassination-classroom%2Fs1%2F9.mp4",
  10: "https://link.storjshare.io/jx4gjbrixky74d742jwypswg5vcq/anime%2Fassassination-classroom%2Fs1%2F10.mp4",
  11: "https://link.storjshare.io/juvvndegr7qeici5j5doig6yuu6a/anime%2Fassassination-classroom%2Fs1%2F11.mp4",
  12: "https://link.storjshare.io/juz7fcvki66hliqslwdmoetm4sla/anime%2Fassassination-classroom%2Fs1%2F12.mp4",
  13: "https://link.storjshare.io/jwu6vy4nkzb2o77uy6i33pjctndq/anime%2Fassassination-classroom%2Fs1%2F13.mp4",
  14: "https://link.storjshare.io/jw7neeyqsguratuumix3thbsknjq/anime%2Fassassination-classroom%2Fs1%2F14.mp4",
  15: "https://link.storjshare.io/jxnmtgmqimhhwi7tli3memfetycq/anime%2Fassassination-classroom%2Fs1%2F15.mp4",
  16: "https://link.storjshare.io/juep5zsocevzzetijqgtnway6dpq/anime%2Fassassination-classroom%2Fs1%2F16.mp4",
  17: "https://link.storjshare.io/juhesurh3jm3bycoto3pbnwvwlla/anime%2Fassassination-classroom%2Fs1%2F17.mp4",
  18: "https://link.storjshare.io/jvidmpiflkyye7esg3nypyuyuifa/anime%2Fassassination-classroom%2Fs1%2F18.mp4",
  19: "https://link.storjshare.io/jvemnb5nrp6rtx7k743566yziwrq/anime%2Fassassination-classroom%2Fs1%2F19.mp4",
  20: "https://link.storjshare.io/jwyv3n7hztkccvhivbbxjtuk6d5a/anime%2Fassassination-classroom%2Fs1%2F20.mp4",
  21: "https://link.storjshare.io/juuc4pajwcmnlxry4giffvlalaka/anime%2Fassassination-classroom%2Fs1%2F21.mp4",
  22: "https://link.storjshare.io/jxjtizyl3fakh6na4hm2hkylxz3q/anime%2Fassassination-classroom%2Fs1%2F22.mp4",
};

const episodesS2 = {
  1: "https://link.storjshare.io/jwfjzrx5gklt4gkqqwg7ur45fspq/anime%2Fassassination-classroom%2Fs2%2F1.mp4",
  2: "https://link.storjshare.io/jx72dfidixzkuox33cglhlceatbq/anime%2Fassassination-classroom%2Fs2%2F2.mp4",
  3: "https://link.storjshare.io/jupfhptsduqv6ioekx5q5ildx5gq/anime%2Fassassination-classroom%2Fs2%2F3.mp4",
  4: "https://link.storjshare.io/jvql4ylz3pmnqse3knolo2ro4tlq/anime%2Fassassination-classroom%2Fs2%2F4.mp4",
  5: "https://link.storjshare.io/jw6uwzhplogv7prxa6ytoi65m2tq/anime%2Fassassination-classroom%2Fs2%2F5.mp4",
  6: "https://link.storjshare.io/jxsr66twhdorpilkpo3bucyrogma/anime%2Fassassination-classroom%2Fs2%2F6.mp4",
  7: "https://link.storjshare.io/jxbjopryswsakgxjziedzbifbpbq/anime%2Fassassination-classroom%2Fs2%2F7.mp4",
  8: "https://link.storjshare.io/jumxazm2az4pal5kois3iv7ha5wa/anime%2Fassassination-classroom%2Fs2%2F8.mp4",
  9: "https://link.storjshare.io/jwxbeb7wm4b24yscwgobb7kujsua/anime%2Fassassination-classroom%2Fs2%2F9.mp4",
  10: "https://link.storjshare.io/juuqdwcnucvnrbebs42hkcdfclmq/anime%2Fassassination-classroom%2Fs2%2F10.mp4",
  11: "https://link.storjshare.io/jvrt4jbtg5n5bwxmk5g3abalgxca/anime%2Fassassination-classroom%2Fs2%2F11.mp4",
  12: "https://link.storjshare.io/jwgxoki7diftybkyxnmgwuqceqoa/anime%2Fassassination-classroom%2Fs2%2F12.mp4",
  13: "https://link.storjshare.io/jwpy5qtxg2vgsgpaoc4aijsc4m6a/anime%2Fassassination-classroom%2Fs2%2F13.mp4",
  14: "https://link.storjshare.io/jvlxldxokp4o32x5jlluxyqz5orq/anime%2Fassassination-classroom%2Fs2%2F14.mp4",
  15: "https://link.storjshare.io/jupk2nysiump66g4mecgrplrvkoq/anime%2Fassassination-classroom%2Fs2%2F15.mp4",
  16: "https://link.storjshare.io/juxqkgd6g3u2fhaurqb5dvtvftua/anime%2Fassassination-classroom%2Fs2%2F16.mp4",
  17: "https://link.storjshare.io/jwa4pinufetluzrejobqnjsere4a/anime%2Fassassination-classroom%2Fs2%2F17.mp4",
  18: "https://link.storjshare.io/juxrhkx6hcww6eednfwoldu2olbq/anime%2Fassassination-classroom%2Fs2%2F18.mp4",
  19: "https://link.storjshare.io/jvb2ojcoew6gwcxjeybe4hrcmehq/anime%2Fassassination-classroom%2Fs2%2F19.mp4",
  20: "https://link.storjshare.io/jxfxjc4cxcf7wotmhj4sfs6vgj4q/anime%2Fassassination-classroom%2Fs2%2F20.mp4",
  21: "https://link.storjshare.io/jx4d3areumrlvu47uphmxf5xjega/anime%2Fassassination-classroom%2Fs2%2F21.mp4",
  22: "https://link.storjshare.io/ju3kfmo2ici3rfj6kv3f6rzu4jra/anime%2Fassassination-classroom%2Fs2%2F22.mp4",
  23: "https://link.storjshare.io/jucigk5br67kwrotko5p2mnasypa/anime%2Fassassination-classroom%2Fs2%2F23.mp4",
  24: "https://link.storjshare.io/jviz4h3yuuuxlf267aw6pojtivaq/anime%2Fassassination-classroom%2Fs2%2F24.mp4",
  25: "https://link.storjshare.io/jxto34hna7tiilrvinkdkjyjyhoq/anime%2Fassassination-classroom%2Fs2%2F25.mp4",
};

seasonLessSlash = season.slice(0, -1);

if (seasonLessSlash === "s1") {
  $(".epnumber")[0].innerHTML = "Saison 1 - Ep. " + pageNumber;
  document.title = "Saison 1 - " + animeName + " - VoirAnimes";
  $("video")[0].src = episodesS1[window["pageNumber"]] + "?wrap=0";
  if (pageNumber === "1") {
    $("#previous-ep")[0].href = "javascript:void(0)";
  }

  if (pageNumber === "22") {
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
    $("#previous-ep")[0].href = "../s1/22.html";
  }

  if (pageNumber === "25") {
    $("#next-ep")[0].innerHTML = "<button class='locked'>Saison Suivante <ion-icon name='chevron-forward-outline'></ion-icon></button>";
    $("#next-ep")[0].href = "javascript:void(0)";
  }
}
