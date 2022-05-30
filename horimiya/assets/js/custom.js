localStorage.setItem("watchedHorimiya", "enabled");

var path = window.location.pathname;
var page = path.split("/").pop();
var pageNumber = page.slice(0, page.length - 5);

$(".epnumber")[0].innerHTML = "Ep. " + pageNumber;
$(".title")[0].innerHTML = "Horimiya";

animeName = "Horimiya";
$(".title")[0].innerHTML = animeName;
document.title = "Ep." + pageNumber + " - " + animeName + " - VoirAnimes";

$('a[href="/horimiya/"]')[2].innerHTML = "<div class='object active'> Horimiya </div>";

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

const episodes = {
1: "https://link.eu1.storjshare.io/jxwcdknhdpmudhon7t2z6cnfdema/animes-others/horimiya/1.mp4",
2: "https://link.eu1.storjshare.io/jxzvre27tbxvvh25xyp5blm5r7dq/animes-others/horimiya/2.mp4",
3: "https://link.eu1.storjshare.io/ju64l3cz2pi7begv2xnuevzbyqua/animes-others/horimiya/3.mp4",
4: "https://link.eu1.storjshare.io/jx4qxeul6wse7msjqcazw5fscdoq/animes-others/horimiya/5.mp4",
5: "https://link.eu1.storjshare.io/juspbu5scdd4m677smmti5wmwh2a/animes-others/horimiya/5.mp4",
6: "https://link.eu1.storjshare.io/jusvtj4rpowsiukfw5t7ifphhrcq/animes-others/horimiya/6.mp4",
7: "https://link.eu1.storjshare.io/jukkckjosngrd5xom35mglgoidnq/animes-others/horimiya/7.mp4",
8: "https://link.eu1.storjshare.io/jxnkhtbabny4jtcc7wc22eaicyta/animes-others/horimiya/8.mp4",
9: "https://link.eu1.storjshare.io/jvprdpfto2qqhupomklenrzllzma/animes-others/horimiya/9.mp4",
10: "https://link.eu1.storjshare.io/jwphkft3q7coe6qpl6latw74in2a/animes-others/horimiya/10.mp4",
11: "https://link.eu1.storjshare.io/jvlukyukn45x2s2zfmonv7iof5aq/animes-others/horimiya/11.mp4",
12: "https://link.eu1.storjshare.io/jxaqpttzzsag7lv3ofmdcqa75tra/animes-others/horimiya/12.mp4",
13: "https://link.eu1.storjshare.io/jvcy3tdjh7emdseno35vj6lqbpna/animes-others/horimiya/13.mp4",
};

$("video")[0].src = episodes[window["pageNumber"]] + "?wrap=0";
