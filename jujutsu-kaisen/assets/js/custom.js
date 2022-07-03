var path = window.location.pathname;
var page = path.split("/").pop();
pageNumber = page.slice(0, page.length - 5);

$(".epnumber")[0].innerHTML = "Ep. " + pageNumber;

animeName = "Jujutsu Kaisen";
$(".title")[0].innerHTML = animeName;
document.title = "Ep." + pageNumber + " - " + animeName + " - VoirAnimes";

$('a[href="/VoirAnimes/jujutsu-kaisen/"]')[2].innerHTML = "<div class='object active'> Jujutsu Kaisen </div>";

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

localStorage.setItem("watchJJK", pageNumber);
localStorage.setItem("PathWatchJJK", path);

const episodes = {
1: "https://link.eu1.storjshare.io/jvu5j55xbiytkrok5p42ribqczjq/animes/jujutsu-kaisen/1.mp4",
2: "https://link.eu1.storjshare.io/juzmv5fnpdglapwb7gametdlssiq/animes/jujutsu-kaisen/2.mp4",
3: "https://link.eu1.storjshare.io/ju3jkkofaqrnfhx237qxwfdgozcq/animes/jujutsu-kaisen/3.mp4",
4: "https://link.eu1.storjshare.io/jvo55cmectemp4p2bczjcr34phoq/animes/jujutsu-kaisen/4.mp4",
5: "https://link.eu1.storjshare.io/jwnrh2vptzrapcmwb5qpwnrqqg6q/animes/jujutsu-kaisen/5.mp4",
6: "https://link.eu1.storjshare.io/jwhbvhlw72nhu7bm2ggfdm3xldda/animes/jujutsu-kaisen/6.mp4",
7: "https://link.eu1.storjshare.io/jxed3lul5fq4zze2uj4qelmnghva/animes/jujutsu-kaisen/7.mp4",
8: "https://link.eu1.storjshare.io/jvspeoe7vh5zeq67qauayi3it3aq/animes/jujutsu-kaisen/8.mp4",
9: "https://link.eu1.storjshare.io/juoqz3yzsftyrr7pujjuusqtdieq/animes/jujutsu-kaisen/9.mp4",
10: "https://link.eu1.storjshare.io/jvunjlsqd44y65ivbvcegx6jiasq/animes/jujutsu-kaisen/10.mp4",
11: "https://link.eu1.storjshare.io/juo5a5ykmoaaqfhsrkhczvoktoca/animes/jujutsu-kaisen/11.mp4",
12: "https://link.eu1.storjshare.io/jvpg63ximtesjaf2vtpk54jheqsa/animes/jujutsu-kaisen/12.mp4",
13: "https://link.eu1.storjshare.io/jwtlq52n63xsb7bsxbqnso3ixjgq/animes/jujutsu-kaisen/13.mp4",
14: "https://link.eu1.storjshare.io/jw2k7kjrkt5wcqbvukivik5omaga/animes/jujutsu-kaisen/14.mp4",
15: "https://link.eu1.storjshare.io/jxaaa74pddbbeu54ziglxezvjzra/animes/jujutsu-kaisen/15.mp4",
16: "https://link.eu1.storjshare.io/jwe2n6ffoqddmu56ycv3dzuoq44q/animes/jujutsu-kaisen/16.mp4",
17: "https://link.eu1.storjshare.io/jxgvsuop274hwlmd5esxf2t26n2a/animes/jujutsu-kaisen/17.mp4",
18: "https://link.eu1.storjshare.io/jxmjo2odheoyksiykvidlc4n5l3q/animes/jujutsu-kaisen/18.mp4",
19: "https://link.eu1.storjshare.io/jwz2lt36o7yut5vzfdydqtnhkdtq/animes/jujutsu-kaisen/19.mp4",
20: "https://link.eu1.storjshare.io/jw6rkh4thv5e7itoectfbu47zkoa/animes/jujutsu-kaisen/20.mp4",
21: "https://link.eu1.storjshare.io/jwzvczcyz6s7zqpejb372vqdbhla/animes/jujutsu-kaisen/21.mp4",
22: "https://link.eu1.storjshare.io/juojmlfvezdeqxw5jy6zmsjwc25a/animes/jujutsu-kaisen/22.mp4",
23: "https://link.eu1.storjshare.io/jv6y6nyxoxg6tkwjl4jv67pcz7cq/animes/jujutsu-kaisen/23.mp4",
24: "https://link.eu1.storjshare.io/jxcr3thl5rykbzf47vssygbosygq/animes/jujutsu-kaisen/24.mp4",
};

$("video")[0].src = episodes[window["pageNumber"]] + "?wrap=0";
