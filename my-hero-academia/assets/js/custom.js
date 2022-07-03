var path = window.location.pathname;
var page = path.split("/").pop();
pageNumber = page.slice(0, page.length - 5);

shortUrl = pageNumber + ".html";
length = shortUrl.length *= -1;
var url = window.location.pathname + window.location.search;
season = url.slice(35, length);

$(".epnumber")[0].innerHTML = "Ep. " + pageNumber;

animeName = "My Hero Academia";
$(".title")[0].innerHTML = animeName;
document.title = animeName + " - VoirAnimes";

$('a[href="/VoirAnimes/my-hero-academia/"]')[2].innerHTML = "<div class='object active'> My Hero Academia </div>";

$("#previous-ep")[0].href = Number(pageNumber) - 1 + ".html";
$("#next-ep")[0].href = Number(pageNumber) + 1 + ".html";

$("#en-sub")[0].src = "../../assets/sub/" + season + pageNumber + "-en.vtt";
$("#fr-sub")[0].src = "../../assets/sub/" + season + pageNumber + "-fr.vtt";

localStorage.setItem("watchMHA", pageNumber);
localStorage.setItem("PathWatchMHA", path);

const episodesS1 = {
1: "https://link.eu1.storjshare.io/jxejsjab2evobvyfqi5ezuqoat4a/animes-others/my-hero-academia/s1/1.mp4",
2: "https://link.eu1.storjshare.io/jx22sb5v6gl67f6bolxgcad7alba/animes-others/my-hero-academia/s1/2.mp4",
3: "https://link.eu1.storjshare.io/jx5artubinkqrg67vfjxs3za4trq/animes-others/my-hero-academia/s1/3.mp4",
4: "https://link.eu1.storjshare.io/jww3wjorzyuj4i7voakuykjqo4sa/animes-others/my-hero-academia/s1/4.mp4",
5: "https://link.eu1.storjshare.io/jxjw46rsuoy6cuo5ewfpm5ayyblq/animes-others/my-hero-academia/s1/5.mp4",
6: "https://link.eu1.storjshare.io/jvaw2ussb6zyveo255mvsc6yitiq/animes-others/my-hero-academia/s1/6.mp4",
7: "https://link.eu1.storjshare.io/jxbfmigst7ucgxttqt25iorkvkma/animes-others/my-hero-academia/s1/7.mp4",
8: "https://link.eu1.storjshare.io/jxhkoi7rm4zf7ucreog2rxjbrsiq/animes-others/my-hero-academia/s1/8.mp4",
9: "https://link.eu1.storjshare.io/jwhiesue7ggduavxnip5reyd5uuq/animes-others/my-hero-academia/s1/9.mp4",
10: "https://link.eu1.storjshare.io/jw2x6ekfx4p3lvu3gkawmlo6scza/animes-others/my-hero-academia/s1/10.mp4",
11: "https://link.eu1.storjshare.io/jv24sredgf6serkncncglssy6kjq/animes-others/my-hero-academia/s1/11.mp4",
12: "https://link.eu1.storjshare.io/jw5shxuzs64by4t7qe6tnercjw4a/animes-others/my-hero-academia/s1/12.mp4",
13: "https://link.eu1.storjshare.io/jxzvscxljdugrd3jvig52vczyama/animes-others/my-hero-academia/s1/13.mp4",
};

const episodesS2 = {
1: "https://link.eu1.storjshare.io/jwrklohd7snaxqpwodpwoy3grhja/animes-others/my-hero-academia/s2/1.mp4",
2: "https://link.eu1.storjshare.io/jxdcnxq7ns54a4b3be44qtw25c6a/animes-others/my-hero-academia/s2/2.mp4",
3: "https://link.eu1.storjshare.io/jueqt4vhztsypdtxaodomkpgncrq/animes-others/my-hero-academia/s2/3.mp4",
4: "https://link.eu1.storjshare.io/jueksjdopnftzf6g663djgssh4ha/animes-others/my-hero-academia/s2/4.mp4",
5: "https://link.eu1.storjshare.io/juxes3vwyta3c42j3hwtqmraxt3q/animes-others/my-hero-academia/s2/5.mp4",
6: "https://link.eu1.storjshare.io/jwqnzxs3fvttv5at4l6yn6msqwba/animes-others/my-hero-academia/s2/6.mp4",
7: "https://link.eu1.storjshare.io/jxxrzzbszzxdhfmvrnh6bgzznafa/animes-others/my-hero-academia/s2/7.mp4",
8: "https://link.eu1.storjshare.io/juvwz6zy6fbbndpqu6hjatthjupq/animes-others/my-hero-academia/s2/8.mp4",
9: "https://link.eu1.storjshare.io/jvtcbsrsywxc5rgk64itssgp3keq/animes-others/my-hero-academia/s2/9.mp4",
10: "https://link.eu1.storjshare.io/jvz2ajpf7jdjnkie7hyltfbezv3a/animes-others/my-hero-academia/s2/10.mp4",
11: "https://link.eu1.storjshare.io/jwqzxjiphjsnham3lcflu7mozbrq/animes-others/my-hero-academia/s2/11.mp4",
12: "https://link.eu1.storjshare.io/ju27eqk2nq2fpwhi5f7g3doqvqna/animes-others/my-hero-academia/s2/12.mp4",
13: "https://link.eu1.storjshare.io/juylpqdn33gjivw3szaor5jivmha/animes-others/my-hero-academia/s2/13.mp4",
14: "https://link.eu1.storjshare.io/jwwod6ktlxjiufn7fx6lho7gptfa/animes-others/my-hero-academia/s2/14.mp4",
15: "https://link.eu1.storjshare.io/jwslj5yvjwni3ttoymkkeyo74jka/animes-others/my-hero-academia/s2/15.mp4",
16: "https://link.eu1.storjshare.io/jvfkjygawa7op2hkqyomjzinzv2q/animes-others/my-hero-academia/s2/16.mp4",
17: "https://link.eu1.storjshare.io/jvb3sxztubusdfwbg4crvn63seha/animes-others/my-hero-academia/s2/17.mp4",
18: "https://link.eu1.storjshare.io/jvemq42iaqdk53bjhctcoi4cbw5q/animes-others/my-hero-academia/s2/18.mp4",
19: "https://link.eu1.storjshare.io/jxekwxeutws44zaro4lcwtiikewq/animes-others/my-hero-academia/s2/19.mp4",
20: "https://link.eu1.storjshare.io/jukqaqru3sfmnkydirwkhrqnucoq/animes-others/my-hero-academia/s2/20.mp4",
21: "https://link.eu1.storjshare.io/jxljvgvfsgpileffblgquiutahxq/animes-others/my-hero-academia/s2/21.mp4",
22: "https://link.eu1.storjshare.io/jvmjat2cit43u7txnqaapg22r6ma/animes-others/my-hero-academia/s2/22.mp4",
23: "https://link.eu1.storjshare.io/jvezoiwfdhadeb2xg4geaqfcvhrq/animes-others/my-hero-academia/s2/23.mp4",
24: "https://link.eu1.storjshare.io/jvab7okaxhkmyq24sprgeguglksq/animes-others/my-hero-academia/s2/24.mp4",
25: "https://link.eu1.storjshare.io/jvw6km375jczjjsb2o3pgnersjga/animes-others/my-hero-academia/s2/25.mp4",
};

const episodesS3 = {
1: "https://link.eu1.storjshare.io/jwrklohd7snaxqpwodpwoy3grhja/animes-others/my-hero-academia/s2/1.mp4",
2: "https://link.eu1.storjshare.io/jujocbfvdwz6blidgisggsdochla/animes-others/my-hero-academia/s3/2.mp4",
3: "https://link.eu1.storjshare.io/julzlrxut55kydsxa4b2l3m6cpma/animes-others/my-hero-academia/s3/3.mp4",
4: "https://link.eu1.storjshare.io/jvyz5m6xb3ia22bzonascnq4j73a/animes-others/my-hero-academia/s3/4.mp4",
5: "https://link.eu1.storjshare.io/jucnlwzcrg6eyytv4s2uui57tyna/animes-others/my-hero-academia/s3/5.mp4",
6: "https://link.eu1.storjshare.io/jx7tgrymwwzmko3iei4cxgc4ktoa/animes-others/my-hero-academia/s3/6.mp4",
7: "https://link.eu1.storjshare.io/jxcn7e73fwthojjq5irxokobhy6a/animes-others/my-hero-academia/s3/7.mp4",
8: "https://link.eu1.storjshare.io/jwuzwn6e7jys3xstx2iu5kqlsvxa/animes-others/my-hero-academia/s3/8.mp4",
9: "https://link.eu1.storjshare.io/judafvmzzueu73g65qu7s3wgmiqa/animes-others/my-hero-academia/s3/9.mp4",
10: "https://link.eu1.storjshare.io/jvrar6bjzghooelhv3hmurksevnq/animes-others/my-hero-academia/s3/10.mp4",
11: "https://link.eu1.storjshare.io/jv5fmptmqlbotltfw3b4owirhc5a/animes-others/my-hero-academia/s3/11.mp4",
12: "https://link.eu1.storjshare.io/jxticqazrd3ibyroue3tcikatu3a/animes-others/my-hero-academia/s3/12.mp4",
13: "https://link.eu1.storjshare.io/ju4agpzkwn63opkksuohygwaxjpq/animes-others/my-hero-academia/s3/13.mp4",
14: "https://link.eu1.storjshare.io/jx6o2awg5hgzxsdvhleyzssoe3zq/animes-others/my-hero-academia/s3/14.mp4",
15: "https://link.eu1.storjshare.io/jw3qrqp4dzjwf7c5uu7fvaatwcrq/animes-others/my-hero-academia/s3/15.mp4",
16: "https://link.eu1.storjshare.io/jvr3hlxb2oxqy6wbr5woggrxa3ja/animes-others/my-hero-academia/s3/16.mp4",
17: "https://link.eu1.storjshare.io/jvco3vuihx4dwehjc22wz3uqt37q/animes-others/my-hero-academia/s3/17.mp4",
18: "https://link.eu1.storjshare.io/juvndpgmjsxdezsg52gpbayle3pa/animes-others/my-hero-academia/s3/18.mp4",
19: "https://link.eu1.storjshare.io/juxl6v7y4jr5lysrbodrkjxbe6ya/animes-others/my-hero-academia/s3/19.mp4",
20: "https://link.eu1.storjshare.io/jxduncnt6rj4l72qfzpc4ttnfwsq/animes-others/my-hero-academia/s3/20.mp4",
21: "https://link.eu1.storjshare.io/juvb64pzis7lmia4aotv6afgw77q/animes-others/my-hero-academia/s3/21.mp4",
22: "https://link.eu1.storjshare.io/jxoizfkytis7maovbrpds7u45mza/animes-others/my-hero-academia/s3/22.mp4",
23: "https://link.eu1.storjshare.io/jukx5wmkx4d7hq2vkrhyntslbpra/animes-others/my-hero-academia/s3/23.mp4",
24: "https://link.eu1.storjshare.io/jwfs2w2gpxhamycfjy7c3u6pnboa/animes-others/my-hero-academia/s3/24.mp4",
25: "https://link.eu1.storjshare.io/jw4juilqzjrgneb6fldsodk3dwrq/animes-others/my-hero-academia/s3/25.mp4",
};

const episodesS4 = {
1: "https://link.eu1.storjshare.io/jwp6cctksvhmmrd7xsu24tuugk7a/animes-others/my-hero-academia/s4/1.mp4",
2: "https://link.eu1.storjshare.io/jwdos72eckkmznjzmwyu3evyk2na/animes-others/my-hero-academia/s4/2.mp4",
3: "https://link.eu1.storjshare.io/jwmwruszfpsisfx2a37mowahhrlq/animes-others/my-hero-academia/s4/3.mp4",
4: "https://link.eu1.storjshare.io/ju57wm6hzaze6w2pkimxqmw62a2a/animes-others/my-hero-academia/s4/4.mp4",
5: "https://link.eu1.storjshare.io/jvjddfarajmhil2zps5jjdwr3laa/animes-others/my-hero-academia/s4/5.mp4",
6: "https://link.eu1.storjshare.io/jwxv2bveblnzzwhu7lvjlgqlr3jq/animes-others/my-hero-academia/s4/6.mp4",
7: "https://link.eu1.storjshare.io/jvrmkblehpr2lgxaacst3vof5wyq/animes-others/my-hero-academia/s4/7.mp4",
8: "https://link.eu1.storjshare.io/ju7tqi43xe6g3zsreicaelngge3q/animes-others/my-hero-academia/s4/8.mp4",
9: "https://link.eu1.storjshare.io/jvxvz72cimdg6m34iy7j5fgxxx3q/animes-others/my-hero-academia/s4/9.mp4",
10: "https://link.eu1.storjshare.io/jwuewxp5pf5b5f7qtytfmjwyxdoa/animes-others/my-hero-academia/s4/10.mp4",
11: "https://link.eu1.storjshare.io/jw6jka7u76jxwa7aahiw246s4uzq/animes-others/my-hero-academia/s4/11.mp4",
12: "https://link.eu1.storjshare.io/ju6poe5jaai777o63vg7sowrh5ha/animes-others/my-hero-academia/s4/12.mp4",
13: "https://link.eu1.storjshare.io/ju2ukctjo4egpvvm4sowxmncvjcq/animes-others/my-hero-academia/s4/13.mp4",
14: "https://link.eu1.storjshare.io/jworwc36r7327jnwj4ngbn46uu5q/animes-others/my-hero-academia/s4/14.mp4",
15: "https://link.eu1.storjshare.io/jwc4pp62nutecibqy6ddlxtpxenq/animes-others/my-hero-academia/s4/15.mp4",
16: "https://link.eu1.storjshare.io/jv4g64uvy5gsacyqtrheqkwn5gaa/animes-others/my-hero-academia/s4/16.mp4",
17: "https://link.eu1.storjshare.io/jw23fm7myjmy2o4mfiy762ekmf5a/animes-others/my-hero-academia/s4/17.mp4",
18: "https://link.eu1.storjshare.io/jwxg7pblbruoge75qnm7xkpzyfqq/animes-others/my-hero-academia/s4/18.mp4",
19: "https://link.eu1.storjshare.io/ju23u3yur4oxh7osgmze46tlihqq/animes-others/my-hero-academia/s4/19.mp4",
20: "https://link.eu1.storjshare.io/jv2frb6rz6m2ttcm6xnulzcmqxrq/animes-others/my-hero-academia/s4/20.mp4",
21: "https://link.eu1.storjshare.io/junlbrvant7oohwptf4irgz52sqq/animes-others/my-hero-academia/s4/21.mp4",
22: "https://link.eu1.storjshare.io/jv7zm22z5q7pnvycesbbgc3iolnq/animes-others/my-hero-academia/s4/22.mp4",
23: "https://link.eu1.storjshare.io/jufd7df2456oex7j3rj2l3vnauwq/animes-others/my-hero-academia/s4/23.mp4",
24: "https://link.eu1.storjshare.io/jwg72zdtu5htxyf3eae4pfv2zsuq/animes-others/my-hero-academia/s4/24.mp4",
25: "https://link.eu1.storjshare.io/juxthfpgecxhdseqaj7k6kz7grxa/animes-others/my-hero-academia/s4/25.mp4",
};

const episodesS5 = {
1: "https://link.eu1.storjshare.io/jwjsvmrh2p325fcocmfkvyhrmmqq/animes-others/my-hero-academia/s5/1.mp4",
2: "https://link.eu1.storjshare.io/jwfefnecpp4avwuayfwrjimwec5q/animes-others/my-hero-academia/s5/2.mp4",
3: "https://link.eu1.storjshare.io/jx4tivwt345yawnq5pm6ray4naja/animes-others/my-hero-academia/s5/3.mp4",
4: "https://link.eu1.storjshare.io/jxkqwzj2jvrtjgr4o744feprogiq/animes-others/my-hero-academia/s5/4.mp4",
5: "https://link.eu1.storjshare.io/jw42jnmqlywn32btkftifrrriebq/animes-others/my-hero-academia/s5/5.mp4",
6: "https://link.eu1.storjshare.io/jwu6uuuv7b7dmdb27y3h6efr3xjq/animes-others/my-hero-academia/s5/6.mp4",
7: "https://link.eu1.storjshare.io/jwl6pqnicgxdelirgl3acuiwwkqq/animes-others/my-hero-academia/s5/7.mp4",
8: "https://link.eu1.storjshare.io/jugpqnq3ankqluwgg5isk6ub3spq/animes-others/my-hero-academia/s5/8.mp4",
9: "https://link.eu1.storjshare.io/jupem5mew2wf4t6o6lu3d2scj33q/animes-others/my-hero-academia/s5/9.mp4",
10: "https://link.eu1.storjshare.io/jwlwxqwpsev554fyx6j5ytae33xq/animes-others/my-hero-academia/s5/10.mp4",
11: "https://link.eu1.storjshare.io/jvpyftt2wz5yhyanwra4xakcd7jq/animes-others/my-hero-academia/s5/11.mp4",
12: "https://link.eu1.storjshare.io/jv67ax5xsneox2i4tng4kwgtodkq/animes-others/my-hero-academia/s5/12.mp4",
13: "https://link.eu1.storjshare.io/jxpwkozvnqgdho7mfbl56wbvsmnq/animes-others/my-hero-academia/s5/13.mp4",
14: "https://link.eu1.storjshare.io/jumrgvqandnzsv4sjlegwspo5v2q/animes-others/my-hero-academia/s5/14.mp4",
15: "https://link.eu1.storjshare.io/jvge2ndz2yug4setsk3ecvyoq2dq/animes-others/my-hero-academia/s5/15.mp4",
16: "https://link.eu1.storjshare.io/jxa4etbgiegutwueunewxngpiyqa/animes-others/my-hero-academia/s5/16.mp4",
17: "https://link.eu1.storjshare.io/jwqnyjr6xy4aqt65te5levwfm2ta/animes-others/my-hero-academia/s5/17.mp4",
18: "https://link.eu1.storjshare.io/jxs5g7zsx63v3ejygt5psfmrh2dq/animes-others/my-hero-academia/s5/18.mp4",
19: "https://link.eu1.storjshare.io/juot6ef4ieqmfh2afto6lwlhht4q/animes-others/my-hero-academia/s5/19.mp4",
20: "https://link.eu1.storjshare.io/jxmvhralstkpseulmb65mzgrx4ta/animes-others/my-hero-academia/s5/20.mp4",
21: "https://link.eu1.storjshare.io/juravmozibf6okl2od5xng7gpdhq/animes-others/my-hero-academia/s5/21.mp4",
22: "https://link.eu1.storjshare.io/jx6ubwyzyzkbikppibhcy65eenya/animes-others/my-hero-academia/s5/22.mp4",
23: "https://link.eu1.storjshare.io/jxnpcpaoj2ampti7eisn5zlirw2q/animes-others/my-hero-academia/s5/23.mp4",
24: "https://link.eu1.storjshare.io/jv4ky76adnqp3s3wunxfudctw7da/animes-others/my-hero-academia/s5/24.mp4",
25: "https://link.eu1.storjshare.io/jvvkloahzpieiy3vxlvrq2edc46q/animes-others/my-hero-academia/s5/25.mp4",
};

seasonLessSlash = season.slice(0, -1);

if (seasonLessSlash === "s1") {
$(".epnumber")[0].innerHTML = "S1 - Ep. " + pageNumber;
document.title = "S1 - " + animeName + " - VoirAnimes";
$("video")[0].src = episodesS1[window["pageNumber"]] + "?wrap=0";
if (pageNumber === "1") {
$("#previous-ep")[0].href = "javascript:void(0)";
}

if (pageNumber === "13") {
$("#next-ep")[0].innerHTML = "<button>Saison Suivante <ion-icon name='chevron-forward-outline'></ion-icon></button>";
$("#next-ep")[0].href = "../s2/";
}
}

if (seasonLessSlash === "s2") {
$(".epnumber")[0].innerHTML = "S2 - Ep. " + pageNumber;
document.title = "S2 - " + animeName + " - VoirAnimes";
$("video")[0].src = episodesS2[window["pageNumber"]] + "?wrap=0";
if (pageNumber === "1") {
$("#previous-ep")[0].innerHTML = "<button><ion-icon name='chevron-back-outline'></ion-icon> Saison Précédente</button>";
$("#previous-ep")[0].href = "../s1/12.html";
}

if (pageNumber === "25") {
$("#next-ep")[0].innerHTML = "<button>Saison Suivante <ion-icon name='chevron-forward-outline'></ion-icon></button>";
$("#next-ep")[0].href = "../s3/";
}
}

if (seasonLessSlash === "s3") {
$(".epnumber")[0].innerHTML = "S3 - Ep. " + pageNumber;
document.title = "S3 - " + animeName + " - VoirAnimes";
$("video")[0].src = episodesS3[window["pageNumber"]] + "?wrap=0";
if (pageNumber === "1") {
$("#previous-ep")[0].innerHTML = "<button><ion-icon name='chevron-back-outline'></ion-icon> Saison Précédente</button>";
$("#previous-ep")[0].href = "../s2/25.html";
}

if (pageNumber === "25") {
$("#next-ep")[0].innerHTML = "<button>Saison Suivante <ion-icon name='chevron-forward-outline'></ion-icon></button>";
$("#next-ep")[0].href = "../s4/";
}
}

if (seasonLessSlash === "s4") {
$(".epnumber")[0].innerHTML = "S4 - Ep. " + pageNumber;
document.title = "S4 - " + animeName + " - VoirAnimes";
$("video")[0].src = episodesS4[window["pageNumber"]] + "?wrap=0";
if (pageNumber === "1") {
$("#previous-ep")[0].innerHTML = "<button><ion-icon name='chevron-back-outline'></ion-icon> Saison Précédente</button>";
$("#previous-ep")[0].href = "../s3/25.html";
}

if (pageNumber === "25") {
$("#next-ep")[0].innerHTML = "<button>Saison Suivante <ion-icon name='chevron-forward-outline'></ion-icon></button>";
$("#next-ep")[0].href = "../s5/";
}
}

if (seasonLessSlash === "s5") {
$(".epnumber")[0].innerHTML = "S5 - Ep. " + pageNumber;
document.title = "S5 - " + animeName + " - VoirAnimes";
$("video")[0].src = episodesS5[window["pageNumber"]] + "?wrap=0";
if (pageNumber === "1") {
$("#previous-ep")[0].innerHTML = "<button><ion-icon name='chevron-back-outline'></ion-icon> Saison Précédente</button>";
$("#previous-ep")[0].href = "../s4/25.html";
}

if (pageNumber === "25") {
$("#next-ep")[0].href = "javascript:void(0)";
}
}
