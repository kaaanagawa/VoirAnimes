localStorage.setItem("watchedVinLandSaga", "enabled");

var path = window.location.pathname;
var page = path.split("/").pop();
pageNumber = page.slice(0, page.length - 5);

$(".epnumber")[0].innerHTML = "Ep. " + pageNumber;

animeName = "Vinland Saga";
$(".title")[0].innerHTML = animeName;
document.title = "Ep." + pageNumber + " - " + animeName + " - VoirAnimes";

$('a[href="/vinland-saga/"]')[2].innerHTML = "<div class='object active'> Vinland Saga </div>";

$("#previous-ep")[0].href = Number(pageNumber) - 1 + ".html";
$("#next-ep")[0].href = Number(pageNumber) + 1 + ".html";

if (pageNumber === "1") {
$("#previous-ep")[0].href = "javascript:void(0)";
}

if (pageNumber === "24") {
$("#next-ep")[0].href = "javascript:void(0)";
}

$("#en-sub")[0].src = "../../assets/sub/" + pageNumber + "-en.vtt";
$("#fr-sub")[0].src = "../../assets/sub/" + pageNumber + "-fr.vtt";

const episodes = {
1: "https://link.eu1.storjshare.io/jvats6jkznubnmaljq4cdslvobva/voiranimes/vinland-saga/1.mp4",
2: "https://link.eu1.storjshare.io/juvglrk4o6x3z6awrkhed4chouzq/voiranimes/vinland-saga/2.mp4",
3: "https://link.eu1.storjshare.io/jxu6vhee5dokixljsssbydxgj76q/voiranimes/vinland-saga/3.mp4",
4: "https://link.eu1.storjshare.io/jxuz4ow4asdblh3uv52ov2k6njsa/voiranimes/vinland-saga/4.mp4",
5: "https://link.eu1.storjshare.io/jueheyxztrnnvew2c3zv6hqs25ta/voiranimes/vinland-saga/5.mp4",
6: "https://link.eu1.storjshare.io/jw3ius5lxgqmfhishget6hmpejgq/voiranimes/vinland-saga/6.mp4",
7: "https://link.eu1.storjshare.io/jxtx37omfun5vi2a7hsn25jv6mla/voiranimes/vinland-saga/7.mp4",
8: "https://link.eu1.storjshare.io/jvkobkyjgyfsbmwxisefpnuho4jq/voiranimes/vinland-saga/8.mp4",
9: "https://link.eu1.storjshare.io/jww5ioep5ln6krswjio5u4po5snq/voiranimes/vinland-saga/9.mp4",
10: "https://link.eu1.storjshare.io/jx2pvks7nw7b5u7kl6wdumahjhtq/voiranimes/vinland-saga/10.mp4",
11: "https://link.eu1.storjshare.io/jx7fvarvsbtxeziorludia7aac4q/voiranimes/vinland-saga/11.mp4",
12: "https://link.eu1.storjshare.io/jvizvsynbx6fk54mdot5uiino77a/voiranimes/vinland-saga/12.mp4",
13: "https://link.eu1.storjshare.io/jvgjvpqjjikiio6jhrxodrbpm6pq/voiranimes/vinland-saga/13.mp4",
14: "https://link.eu1.storjshare.io/jx43pjbxa2mi4ee4droxvadg2j4a/voiranimes/vinland-saga/14.mp4",
15: "https://link.eu1.storjshare.io/ju5g5hjqnvok5iuyk3wljunir72q/voiranimes/vinland-saga/15.mp4",
16: "https://link.eu1.storjshare.io/jxm2q7zsntcai6jalazh3zb6bhda/voiranimes/vinland-saga/16.mp4",
17: "https://link.eu1.storjshare.io/jxm77okzlrr3guo6qefhbg5plwlq/voiranimes/vinland-saga/17.mp4",
18: "https://link.eu1.storjshare.io/jx2qzn3d3opp7zlrclhw77i4y3rq/voiranimes/vinland-saga/18.mp4",
19: "https://link.eu1.storjshare.io/jxjjqfbxlphkzzrq6txguhbu4xha/voiranimes/vinland-saga/19.mp4",
20: "https://link.eu1.storjshare.io/julhs6hfcegk4y3ddclx2lgmkaaq/voiranimes/vinland-saga/20.mp4",
21: "https://link.eu1.storjshare.io/jw2m6nvkf634t3wgr4dsjapn434a/voiranimes/vinland-saga/21.mp4",
22: "https://link.eu1.storjshare.io/jwwjg3pfsjo7wc22j3okwzkpxffq/voiranimes/vinland-saga/22.mp4",
23: "https://link.eu1.storjshare.io/jwoeqdtdkpgo26vgrf6jvq6w5ycq/voiranimes/vinland-saga/23.mp4",
24: "https://link.eu1.storjshare.io/jv3dvw5niet5yc62hwdiblce76mq/voiranimes/vinland-saga/24.mp4",
};

$("video")[0].src = episodes[window["pageNumber"]] + "?wrap=0";
