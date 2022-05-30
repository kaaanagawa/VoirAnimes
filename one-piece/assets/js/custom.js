localStorage.setItem("watchedOP", "enabled");

var path = window.location.pathname;
var page = path.split("/").pop();
pageNumber = page.slice(0, page.length - 5);

shortUrl = pageNumber + ".html";
length = shortUrl.length *= -1;
var url = window.location.pathname + window.location.search;
season = url.slice(19, length);

animeName = "One Piece";
$(".title")[0].innerHTML = animeName;
document.title = animeName + " - VoirAnimes";

$('a[href="/one-piece/"]')[2].innerHTML = "<div class='object active'> One Piece </div>";

$("#previous-ep")[0].href = Number(pageNumber) - 1 + ".html";
$("#next-ep")[0].href = Number(pageNumber) + 1 + ".html";

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

const episodesS1 = {
  1: "https://link.eu1.storjshare.io/jx357yulrz7riqusnh23xzk7qsaa/animes/one-piece/east-blue/1.mp4",
  2: "https://link.eu1.storjshare.io/jud55tmf43qhuo6etmd75pktuyxq/animes/one-piece/east-blue/2.mp4",
  3: "https://link.eu1.storjshare.io/jx5hdysm6u6ma4647vkimlxb6gra/animes/one-piece/east-blue/3.mp4",
  4: "https://link.eu1.storjshare.io/jvpftgsvmqn6se6bsgxu75vgauca/animes/one-piece/east-blue/4.mp4",
  5: "https://link.eu1.storjshare.io/jucovp7d5g5h53junbh2slvdd2ha/animes/one-piece/east-blue/5.mp4",
  6: "https://link.eu1.storjshare.io/jxe33mfizhskxmzrg6d7t7uzeqaq/animes/one-piece/east-blue/6.mp4",
  7: "https://link.eu1.storjshare.io/jw5jnj5xmsmc4tt4nwai2k4ij6iq/animes/one-piece/east-blue/7.mp4",
};

const episodesS2 = {
  1: "https://link.eu1.storjshare.io/jxdms5refvjdg653vi5pwmye2opq/animes/one-piece/alabasta/8.mp4",
  2: "https://link.eu1.storjshare.io/jvnplyxym6ucgq6txbfa4htavxda/animes/one-piece/alabasta/9.mp4",
  3: "https://link.eu1.storjshare.io/jugttf6ths7thylbe26o7hwggaja/animes/one-piece/alabasta/10.mp4",
  4: "https://link.eu1.storjshare.io/jx5jwjkdp25pkgne5yhhqkv2lqia/animes/one-piece/alabasta/11.mp4",
  5: "https://link.eu1.storjshare.io/jwo3tc5rf4bfgcihpgea2ldv5cqa/animes/one-piece/alabasta/12.mp4",
  6: "https://link.eu1.storjshare.io/jwyopm4edyvkjnk43fopf3b2xdgq/animes/one-piece/alabasta/13.mp4",
  7: "https://link.eu1.storjshare.io/jxxy7rzfwka4f3hlqwydqipd7hka/animes/one-piece/alabasta/14.mp4",
  8: "https://link.eu1.storjshare.io/jungntw5mmied4woctkhmago644q/animes/one-piece/alabasta/15.mp4",
  9: "https://link.eu1.storjshare.io/ju6hsa4o5cusqmcey376aqugjroa/animes/one-piece/alabasta/16.mp4",
};

const episodesS3 = {
  1: "https://link.eu1.storjshare.io/jxabikcg45mc5rihlujgzrehuaua/animes/one-piece/skypiea/17.mp4",
  2: "https://link.eu1.storjshare.io/juydt5xal5q2n735rqhg4yy7jh2q/animes/one-piece/skypiea/18.mp4",
  3: "https://link.eu1.storjshare.io/jue5xw7fydkeji4fjmtvqrcnv6la/animes/one-piece/skypiea/19.mp4",
  4: "https://link.eu1.storjshare.io/jwhhas7tnvc3gt67tw2fwhxpnlcq/animes/one-piece/skypiea/20.mp4",
  5: "https://link.eu1.storjshare.io/junqnode2iez6xqkkdonvr2uk4pa/animes/one-piece/skypiea/21.mp4",
  6: "https://link.eu1.storjshare.io/jxwzpr2j7ztxu7bztvosl5ztds7a/animes/one-piece/skypiea/22.mp4",
};

const episodesS4 = {
  1: "https://link.eu1.storjshare.io/jw7caq5ou5hygzjvi7n3jwy3bmqq/animes/one-piece/water-seven/23.mp4",
  2: "https://link.eu1.storjshare.io/jv2dtqhvmmvgioimm4voccpqq4tq/animes/one-piece/water-seven/24.mp4",
  3: "https://link.eu1.storjshare.io/jv4gt47ssnhc23fbcwh4jqbra3oq/animes/one-piece/water-seven/25.mp4",
  4: "https://link.eu1.storjshare.io/jx43bl52zyy5n5z4hbru5wcxglqq/animes/one-piece/water-seven/26.mp4",
  5: "https://link.eu1.storjshare.io/jxnoi5suw2z5eayehpesq6rqcnpq/animes/one-piece/water-seven/27.mp4",
  6: "https://link.eu1.storjshare.io/jviz7wycpbrwe7yozwbldxhwij3a/animes/one-piece/water-seven/28.mp4",
  7: "https://link.eu1.storjshare.io/jwvd6u55xnpy4cdxjjgd42bahhta/animes/one-piece/water-seven/29.mp4",
  8: "https://link.eu1.storjshare.io/jvzp3spzmhxvp6btjfy5mnbkxqnq/animes/one-piece/water-seven/30.mp4",
  9: "https://link.eu1.storjshare.io/jw3obo3nadkbfajdyeidrl5unaqq/animes/one-piece/water-seven/31.mp4",
  10: "https://link.eu1.storjshare.io/jw2pe25vgp7dkx6zqebceckt4akq/animes/one-piece/water-seven/32.mp4",
  11: "https://link.eu1.storjshare.io/jvllcy7lcxhxl3p5sbnrwzqgvq4a/animes/one-piece/water-seven/33.mp4",
  12: "https://link.eu1.storjshare.io/jva3tdfpm6wjvlfmavqqxhkqjpna/animes/one-piece/water-seven/34.mp4",
  13: "https://link.eu1.storjshare.io/jvvqlkxsspijiax5tlf5pevpnzgq/animes/one-piece/water-seven/35.mp4",
  14: "https://link.eu1.storjshare.io/jxc3udpqhl5fatpgf6jsbr2hbila/animes/one-piece/water-seven/36.mp4",
  15: "https://link.eu1.storjshare.io/jxkcwhzpopj6pgactyo5zkuwkeyq/animes/one-piece/water-seven/37.mp4",
};

const episodesS5 = {
  1: "https://link.eu1.storjshare.io/ju7nmctyftv6wdtmme5zsztswvpa/animes/one-piece/thriller-bark/38.mp4",
  2: "https://link.eu1.storjshare.io/junxzqmncortpps2e5shczff43qq/animes/one-piece/thriller-bark/39.mp4",
  3: "https://link.eu1.storjshare.io/jwpyxssu2wm66krydjxovkakrr6q/animes/one-piece/thriller-bark/40.mp4",
  4: "https://link.eu1.storjshare.io/jw6utlcin6jks6orqiifpbqdu4sq/animes/one-piece/thriller-bark/41.mp4",
  5: "https://link.eu1.storjshare.io/jwp4xh7pjtzut5qryguc6cpjfr4q/animes/one-piece/thriller-bark/42.mp4",
};

const episodesS6 = {
  1: "https://link.eu1.storjshare.io/jxgzu4og7qrihwyxbbax5we4fu5q/animes/one-piece/guerre-au-sommet/43.mp4",
  2: "https://link.eu1.storjshare.io/juyeqcylvwqo7avf5a2a4l2snw2a/animes/one-piece/guerre-au-sommet/44.mp4",
  3: "https://link.eu1.storjshare.io/jwvuqxtlekzvjhtotuqxctood4fa/animes/one-piece/guerre-au-sommet/45.mp4",
  4: "https://link.eu1.storjshare.io/jvouff277r2yym64l3mfvvwaewza/animes/one-piece/guerre-au-sommet/46.mp4",
  5: "https://link.eu1.storjshare.io/jukvripa577zo5xgce4ngqbogxxq/animes/one-piece/guerre-au-sommet/47.mp4",
  6: "https://link.eu1.storjshare.io/jvqrdeljexee4y6htiqwc37lrb7a/animes/one-piece/guerre-au-sommet/48.mp4",
  7: "https://link.eu1.storjshare.io/jx2bphw75uond55pmf56dlt2oifa/animes/one-piece/guerre-au-sommet/49.mp4",
  8: "https://link.eu1.storjshare.io/jx765mkrrf7qrbrhsycjul432diq/animes/one-piece/guerre-au-sommet/50.mp4",
  9: "https://link.eu1.storjshare.io/jvtojggmlgbsyvch7f43kwaopdjq/animes/one-piece/guerre-au-sommet/51.mp4",
  10: "https://link.eu1.storjshare.io/jxrropig4omfgry3ei4mbvft2bnq/animes/one-piece/guerre-au-sommet/52.mp4",
  11: "https://link.eu1.storjshare.io/juwu3r256ua6yfqp37qha6dwmlga/animes/one-piece/guerre-au-sommet/53.mp4",
  12: "https://link.eu1.storjshare.io/jwy467yufjpfy5akua2hbbgv3dea/animes/one-piece/guerre-au-sommet/54.mp4",
  13: "https://link.eu1.storjshare.io/juwdtianx6gt3nz64ygswhqxmhtq/animes/one-piece/guerre-au-sommet/55.mp4",
  14: "https://link.eu1.storjshare.io/jwwpn7e5acqbietggbtwzt372icq/animes/one-piece/guerre-au-sommet/56.mp4",
  15: "https://link.eu1.storjshare.io/jv4g52khyhz2uivh23vjoujiz4pq/animes/one-piece/guerre-au-sommet/57.mp4",
  16: "https://link.eu1.storjshare.io/jvuolh5y74wvliojte7lbjs3hhpa/animes/one-piece/guerre-au-sommet/58.mp4",
  17: "https://link.eu1.storjshare.io/jwaufsws3mfc36nbfav5fas5ghbq/animes/one-piece/guerre-au-sommet/59.mp4",
  18: "https://link.eu1.storjshare.io/jwyrjcgss2yp6ufw5hv3mejhmija/animes/one-piece/guerre-au-sommet/60.mp4",
};

const episodesS7 = {
  1: "https://link.eu1.storjshare.io/jvlzyoh34muuo55mpqvl3sb3tz6a/animes/one-piece/ile-des-hommes-poissons/61.mp4",
  2: "https://link.eu1.storjshare.io/jwcvdinn3syrvb47up67j7c7qeiq/animes/one-piece/ile-des-hommes-poissons/62.mp4",
  3: "https://link.eu1.storjshare.io/jvgdui6cqjlegpun76zsuf2d3taq/animes/one-piece/ile-des-hommes-poissons/63.mp4",
  4: "https://link.eu1.storjshare.io/ju53vxpkvakj66tyskmqptb2mmjq/animes/one-piece/ile-des-hommes-poissons/64.mp4",
  5: "https://link.eu1.storjshare.io/jwfxgfr2phr5gjxybzwym5engwiq/animes/one-piece/ile-des-hommes-poissons/65.mp4",
  6: "https://link.eu1.storjshare.io/juqvn3tq3mkfk7bygr55hbxqkxea/animes/one-piece/ile-des-hommes-poissons/66.mp4",
  7: "https://link.eu1.storjshare.io/jus34dv35mi32fi2r3y6aqjnxgja/animes/one-piece/ile-des-hommes-poissons/67.mp4",
  8: "https://link.eu1.storjshare.io/jvcwaskgbksb6s57cce6uyiz7ywq/animes/one-piece/ile-des-hommes-poissons/68.mp4",
  9: "https://link.eu1.storjshare.io/jxsrdlbkbjab22ubak3lqtspbeta/animes/one-piece/ile-des-hommes-poissons/69.mp4",
};

const episodesS8 = {
  1: "https://link.eu1.storjshare.io/jwgerbvpaehnuobjffpl7blx6zca/animes/one-piece/dressrosa/70.mp4",
  2: "https://link.eu1.storjshare.io/jvcojgcfguganxwteabbinjtrbxa/animes/one-piece/dressrosa/71.mp4",
  3: "https://link.eu1.storjshare.io/jugdwdxroododubmyivhvqfp2l5a/animes/one-piece/dressrosa/72.mp4",
  4: "https://link.eu1.storjshare.io/jxuqqvkwhppwnuc6lotaluxpwzwa/animes/one-piece/dressrosa/73.mp4",
  5: "https://link.eu1.storjshare.io/jxv5udxo6kfc5tjr63hxnn7lghmq/animes/one-piece/dressrosa/74.mp4",
  6: "https://link.eu1.storjshare.io/jvxys4qmwadgyyqqawxismabvl2a/animes/one-piece/dressrosa/75.mp4",
  7: "https://link.eu1.storjshare.io/ju6fulozetqurxm4lx5qn5lw5lsq/animes/one-piece/dressrosa/76.mp4",
  8: "https://link.eu1.storjshare.io/jv2k5dxn23u34colpvnt2n4h2xfq/animes/one-piece/dressrosa/77.mp4",
  9: "https://link.eu1.storjshare.io/jw4maia7aqdziqzwlhbh7lerlh3a/animes/one-piece/dressrosa/78.mp4",
  10: "https://link.eu1.storjshare.io/jwv2536lbguxt66yclorus46wt6a/animes/one-piece/dressrosa/79.mp4",
  11: "https://link.eu1.storjshare.io/jxrmt6o6m3tagcp6aaiffu63vn6q/animes/one-piece/dressrosa/80.mp4",
  12: "https://link.eu1.storjshare.io/jwmedqorhzet5ykepb3ugna7npha/animes/one-piece/dressrosa/81.mp4",
  13: "https://link.eu1.storjshare.io/jwncxt5rlqj3s4pjtngy3h723ovq/animes/one-piece/dressrosa/82.mp4",
  14: "https://link.eu1.storjshare.io/jurvj4ubyo7elupkh2lfqgefkzva/animes/one-piece/dressrosa/83.mp4",
  15: "https://link.eu1.storjshare.io/jucvwme4v2ggmkiyxezt4ed4wcha/animes/one-piece/dressrosa/84.mp4",
  16: "https://link.eu1.storjshare.io/jxtk5wje6eq2ww7xcijts7f5ko2a/animes/one-piece/dressrosa/85.mp4",
  17: "https://link.eu1.storjshare.io/jx54qf2ollkuswijx4igzqamprcq/animes/one-piece/dressrosa/86.mp4",
  18: "https://link.eu1.storjshare.io/jx2sedwt3yp6u7wmfavgsmazzoeq/animes/one-piece/dressrosa/87.mp4",
  19: "https://link.eu1.storjshare.io/jxcuiafwfy4itqeupzinucsdb5tq/animes/one-piece/dressrosa/88.mp4",
  20: "https://link.eu1.storjshare.io/jwvelco6vgawisekhsvapiismwhq/animes/one-piece/dressrosa/89.mp4",
  21: "https://link.eu1.storjshare.io/jue6z6j7qvsnqp67rdat2ljkv6ga/animes/one-piece/dressrosa/90.mp4",
  22: "https://link.eu1.storjshare.io/jwnijtbypqmsw7dpupdm266bjhaa/animes/one-piece/dressrosa/91.mp4",
  23: "https://link.eu1.storjshare.io/jx4xwedd5m52c3ju2xitvfp6hyma/animes/one-piece/dressrosa/92.mp4",
  24: "https://link.eu1.storjshare.io/juwjtmxidb7itdhxff5b22coxwda/animes/one-piece/dressrosa/93.mp4",
  25: "https://link.eu1.storjshare.io/juqvwg7b2cni4f6nloeapgccex5a/animes/one-piece/dressrosa/94.mp4",
  26: "https://link.eu1.storjshare.io/judyxquvncjsnkxwgotxflqtu3la/animes/one-piece/dressrosa/95.mp4",
  27: "https://link.eu1.storjshare.io/jwmxch3dg6bk4fadyt5knaxtvbna/animes/one-piece/dressrosa/96.mp4",
  28: "https://link.eu1.storjshare.io/jxmfrl7udowekwr4d2xjw2fpxumq/animes/one-piece/dressrosa/97.mp4",
};

const episodesS9 = {
  1: "https://link.eu1.storjshare.io/justpw3ddjpr4v67bjmiuj5rmlsa/animes/one-piece/quatre-empereurs/98.mp4",
  2: "https://link.eu1.storjshare.io/jwxeout5mgw3637a3l2siolejo4q/animes/one-piece/quatre-empereurs/99.mp4",
  3: "https://link.eu1.storjshare.io/jxupylihw2ti4pj4w755b4ij7gra/animes/one-piece/quatre-empereurs/100.mp4",
  4: "https://link.eu1.storjshare.io/jxeb66fzxlirm5uqkcqhza3z5xbq/animes/one-piece/quatre-empereurs/101.mp4",
  5: "https://link.eu1.storjshare.io/jv47gik2ewoqty4cb6ovnnikhpca/animes/one-piece/quatre-empereurs/102.mp4",
  6: "https://link.eu1.storjshare.io/jvg7o4csafie6djvhgpra36f3wva/animes/one-piece/quatre-empereurs/103.mp4",
  7: "https://link.eu1.storjshare.io/jxyrutgyjtversfwy5vx4drdsi6q/animes/one-piece/quatre-empereurs/104.mp4",
  8: "https://link.eu1.storjshare.io/jw6iizyt2htnv7wn6wqu43x5hn3q/animes/one-piece/quatre-empereurs/105.mp4",
  9: "https://link.eu1.storjshare.io/junqpqwzv5aevxxwspwmtp3kdjqa/animes/one-piece/quatre-empereurs/106.mp4",
  10: "https://link.eu1.storjshare.io/jvdohzu5exx2zdgwwgb6fgmzmyaq/animes/one-piece/quatre-empereurs/107.mp4",
  11: "https://link.eu1.storjshare.io/jwb2ukd7uiymbrk7okhq5zqc7ryq/animes/one-piece/quatre-empereurs/108.mp4",
  12: "https://link.eu1.storjshare.io/jwpzlfxzkrgepjsrtwvqoeouturq/animes/one-piece/quatre-empereurs/109.mp4",
  13: "https://link.eu1.storjshare.io/jxaaxbjxr6qhtng6jblngau36zwq/animes/one-piece/quatre-empereurs/110.mp4",
  14: "https://link.eu1.storjshare.io/jvd5ql5bi2hickbbudthgokmpdyq/animes/one-piece/quatre-empereurs/111.mp4",
  15: "https://link.eu1.storjshare.io/jupmevybvdsrwo6wc7rizz7hcwoa/animes/one-piece/quatre-empereurs/112.mp4",
  16: "https://link.eu1.storjshare.io/jwgmpnq6tw2ibkwpp2wv56ynbjdq/animes/one-piece/quatre-empereurs/113.mp4",
  17: "https://link.eu1.storjshare.io/jvcgwajzv7spgyxc5yugieaf25ia/animes/one-piece/quatre-empereurs/114.mp4",
  18: "https://link.eu1.storjshare.io/jxdc4aaoti3fd7zg6r6xpbsmhvpq/animes/one-piece/quatre-empereurs/115.mp4",
  19: "https://link.eu1.storjshare.io/jxbmru5brol4sgzmmgtl22zwpshq/animes/one-piece/quatre-empereurs/116.mp4",
  20: "https://link.eu1.storjshare.io/julay42ecjj7sxvoeg7wcqdeuycq/animes/one-piece/quatre-empereurs/117.mp4",
  21: "https://link.eu1.storjshare.io/jw2bttuoc4whf5qs4ezumsjiocza/animes/one-piece/quatre-empereurs/118.mp4",
  22: "https://link.eu1.storjshare.io/jw34gbhbg6tfxd4x64az6uhrgejq/animes/one-piece/quatre-empereurs/119.mp4",
  23: "https://link.eu1.storjshare.io/jxsuoq6s6zu23uumjcxarcqb6gpa/animes/one-piece/quatre-empereurs/120.mp4",
  24: "https://link.eu1.storjshare.io/jvlgirl4vxwct64ru25c4kh77gka/animes/one-piece/quatre-empereurs/121.mp4",
  25: "https://link.eu1.storjshare.io/jv5bgvo3exl3vlibijeabmimthwq/animes/one-piece/quatre-empereurs/122.mp4",
  26: "https://link.eu1.storjshare.io/jure6juqlu4k2oflc7dvyk24x7ia/animes/one-piece/quatre-empereurs/123.mp4",
  27: "https://link.eu1.storjshare.io/jwzdy7y4nz3u6yqz5kt4gcqwno2a/animes/one-piece/quatre-empereurs/124.mp4",
  28: "https://link.eu1.storjshare.io/jxxkirbnzojpdpbwoojwc3rexgda/animes/one-piece/quatre-empereurs/125.mp4",
  29: "https://link.eu1.storjshare.io/jwfk3wuqbp746awf77oct25yxuza/animes/one-piece/quatre-empereurs/126.mp4",
  30: "https://link.eu1.storjshare.io/jw5rlqv3y3jmidgvg7hfvf4esiba/animes/one-piece/quatre-empereurs/127.mp4",
};

const episodesS10 = {
  1: "https://link.eu1.storjshare.io/jwu4znheegchelgmu3hztqgpkjoq/animes/one-piece/movies/1.mp4",
  2: "https://link.eu1.storjshare.io/jvliwnj7njn4vlt4gpvxj2cwhwla/animes/one-piece/movies/2.mp4",
  3: "https://link.eu1.storjshare.io/jxeucy4bhtn6drn5w327s4tw6weq/animes/one-piece/movies/3.mp4",
  4: "https://link.eu1.storjshare.io/jva3l7tdsrmpapiprtz3csspjnvq/animes/one-piece/movies/4.mp4",
  5: "https://link.eu1.storjshare.io/ju3jfqm4oio3cmbqhn3oiclm6tda/animes/one-piece/movies/5.mp4",
  6: "https://link.eu1.storjshare.io/jxsjabhq7lungkkc7y22xzvh4uxq/animes/one-piece/movies/6.mp4",
  7: "https://link.eu1.storjshare.io/ju7endylbxlzmkqgydcy4pvc75ga/animes/one-piece/movies/7.mp4",
  8: "https://link.eu1.storjshare.io/jxgumbsjjwbwqokxk6nx4l7ldvdq/animes/one-piece/movies/8.mp4",
  9: "https://link.eu1.storjshare.io/jxn6ird5emjrudk7fr7hsbhb6u5a/animes/one-piece/movies/9.mp4",
  10: "https://link.eu1.storjshare.io/juvscwessor6cumsffuj7nqcmmha/animes/one-piece/movies/10.mp4",
  11: "https://link.eu1.storjshare.io/jwgom4etdvrufoznv6ow5rrvg6vq/animes/one-piece/movies/11.mp4",
  12: "https://link.eu1.storjshare.io/juxr65vihhecz2jyrbooeigqlfpa/animes/one-piece/movies/12.mp4",
  13: "https://link.eu1.storjshare.io/jwxwbbxcwr6ufpe6erij3xqjznwa/animes/one-piece/movies/13.mp4",
  14: "https://link.eu1.storjshare.io/jwkpf7eb7imffq3eqb3pvty7fjya/animes/one-piece/movies/14.mp4",
};

seasonLessSlash = season.slice(0, -1);

if (seasonLessSlash === "east-blue") {
  $(".epnumber")[0].innerHTML = "East Blue - Ep. " + pageNumber;
  document.title = "East Blue - " + animeName + " - VoirAnimes";
  $("video")[0].src = episodesS1[window["pageNumber"]] + "?wrap=0";
  if (pageNumber === "1") {
    $("#previous-ep")[0].innerHTML = "<button class='locked'><ion-icon name='chevron-back-outline'></ion-icon> Saison Précédente</button>";
    $("#previous-ep")[0].href = "javascript:void(0)";
  }

  if (pageNumber === "7") {
    $("#next-ep")[0].innerHTML = "<button>Saison Suivante <ion-icon name='chevron-forward-outline'></ion-icon></button>";
    $("#next-ep")[0].href = "../2-alabasta/";
  }
}

if (seasonLessSlash === "alabasta") {
  $(".epnumber")[0].innerHTML = "Alabasta - Ep. " + pageNumber;
  document.title = "Alabasta - " + animeName + " - VoirAnimes";
  $("video")[0].src = episodesS2[window["pageNumber"]] + "?wrap=0";
  if (pageNumber === "1") {
    $("#previous-ep")[0].innerHTML = "<button><ion-icon name='chevron-back-outline'></ion-icon> Saison Précédente</button>";
    $("#previous-ep")[0].href = "../1-east-blue/7.html";
  }

  if (pageNumber === "9") {
    $("#next-ep")[0].innerHTML = "<button>Saison Suivante <ion-icon name='chevron-forward-outline'></ion-icon></button>";
    $("#next-ep")[0].href = "../3-ile-celeste/";
  }
}

if (seasonLessSlash === "ile-celeste") {
  $(".epnumber")[0].innerHTML = "Ile Celeste - Ep. " + pageNumber;
  document.title = "Ile Celeste - " + animeName + " - VoirAnimes";
  $("video")[0].src = episodesS3[window["pageNumber"]] + "?wrap=0";
  if (pageNumber === "1") {
    $("#previous-ep")[0].innerHTML = "<button><ion-icon name='chevron-back-outline'></ion-icon> Saison Précédente</button>";
    $("#previous-ep")[0].href = "../2-alabasta/9.html";
  }

  if (pageNumber === "6") {
    $("#next-ep")[0].innerHTML = "<button>Saison Suivante <ion-icon name='chevron-forward-outline'></ion-icon></button>";
    $("#next-ep")[0].href = "../4-water-seven/";
  }
}

if (seasonLessSlash === "water-seven") {
  $(".epnumber")[0].innerHTML = "Water Seven - Ep. " + pageNumber;
  document.title = "Water Seven - " + animeName + " - VoirAnimes";
  $("video")[0].src = episodesS4[window["pageNumber"]] + "?wrap=0";
  if (pageNumber === "1") {
    $("#previous-ep")[0].innerHTML = "<button><ion-icon name='chevron-back-outline'></ion-icon> Saison Précédente</button>";
    $("#previous-ep")[0].href = "../3-ile-celeste/6.html";
  }

  if (pageNumber === "15") {
    $("#next-ep")[0].innerHTML = "<button>Saison Suivante <ion-icon name='chevron-forward-outline'></ion-icon></button>";
    $("#next-ep")[0].href = "../5-thriller-bark/";
  }
}

if (seasonLessSlash === "thriller-bark") {
  $(".epnumber")[0].innerHTML = "Thriller Bark - Ep. " + pageNumber;
  document.title = "Thriller Bark - " + animeName + " - VoirAnimes";
  $("video")[0].src = episodesS5[window["pageNumber"]] + "?wrap=0";
  if (pageNumber === "1") {
    $("#previous-ep")[0].innerHTML = "<button><ion-icon name='chevron-back-outline'></ion-icon> Saison Précédente</button>";
    $("#previous-ep")[0].href = "../4-water-seven/15.html";
  }

  if (pageNumber === "5") {
    $("#next-ep")[0].innerHTML = "<button>Saison Suivante <ion-icon name='chevron-forward-outline'></ion-icon></button>";
    $("#next-ep")[0].href = "../6-guerre-au-sommet/";
  }
}

if (seasonLessSlash === "guerre-au-sommet") {
  $(".epnumber")[0].innerHTML = "Guerre au sommet - Ep. " + pageNumber;
  document.title = "Guerre au sommet - " + animeName + " - VoirAnimes";
  $("video")[0].src = episodesS6[window["pageNumber"]] + "?wrap=0";
  if (pageNumber === "1") {
    $("#previous-ep")[0].innerHTML = "<button><ion-icon name='chevron-back-outline'></ion-icon> Saison Précédente</button>";
    $("#previous-ep")[0].href = "../5-thriller-bark/5.html";
  }

  if (pageNumber === "18") {
    $("#next-ep")[0].innerHTML = "<button>Saison Suivante <ion-icon name='chevron-forward-outline'></ion-icon></button>";
    $("#next-ep")[0].href = "../7-ile-des-hommes-poissons/";
  }
}

if (seasonLessSlash === "ile-des-hommes-poissons") {
  $(".epnumber")[0].innerHTML = "Ile des Hommes-Poissons - Ep. " + pageNumber;
  document.title = "Ile des Hommes-Poissons - " + animeName + " - VoirAnimes";
  $("video")[0].src = episodesS7[window["pageNumber"]] + "?wrap=0";
  if (pageNumber === "1") {
    $("#previous-ep")[0].innerHTML = "<button><ion-icon name='chevron-back-outline'></ion-icon> Saison Précédente</button>";
    $("#previous-ep")[0].href = "../6-guerre-au-sommet/18.html";
  }

  if (pageNumber === "9") {
    $("#next-ep")[0].innerHTML = "<button>Saison Suivante <ion-icon name='chevron-forward-outline'></ion-icon></button>";
    $("#next-ep")[0].href = "../8-dressrosa/";
  }
}

if (seasonLessSlash === "dressrosa") {
  $(".epnumber")[0].innerHTML = "Dressrosa - Ep. " + pageNumber;
  document.title = "Dressrosa - " + animeName + " - VoirAnimes";
  $("video")[0].src = episodesS8[window["pageNumber"]] + "?wrap=0";
  if (pageNumber === "1") {
    $("#previous-ep")[0].innerHTML = "<button><ion-icon name='chevron-back-outline'></ion-icon> Saison Précédente</button>";
    $("#previous-ep")[0].href = "../7-ile-des-hommes-poissons/9.html";
  }

  if (pageNumber === "28") {
    $("#next-ep")[0].innerHTML = "<button>Saison Suivante <ion-icon name='chevron-forward-outline'></ion-icon></button>";
    $("#next-ep")[0].href = "../9-quatre-empereurs/";
  }
}

if (seasonLessSlash === "quatre-empereurs") {
  $(".epnumber")[0].innerHTML = "Quatre Empereurs - Ep. " + pageNumber;
  document.title = "Quatre Empereurs - " + animeName + " - VoirAnimes";
  $("video")[0].src = episodesS9[window["pageNumber"]] + "?wrap=0";
  if (pageNumber === "1") {
    $("#previous-ep")[0].innerHTML = "<button><ion-icon name='chevron-back-outline'></ion-icon> Saison Précédente</button>";
    $("#previous-ep")[0].href = "../8-dressrosa/28.html";
  }

  if (pageNumber === "30") {
    $("#next-ep")[0].innerHTML = "<button class='locked'>Saison Suivante <ion-icon name='chevron-forward-outline'></ion-icon></button>";
    $("#next-ep")[0].href = "javascript:void(0)";
  }
}

if (season === "vies/") {
  seasonForMovies = url.slice(17, length);
  seasonForMoviesThen = seasonForMovies.slice(0, -1);

  $("#fr-sub")[0].src = "../../assets/sub/" + seasonForMovies + pageNumber + "-fr.vtt";

  if (seasonForMoviesThen === "movies") {
    $(".epnumber")[0].innerHTML = "Films - Ep. " + pageNumber;
    document.title = "Films - " + animeName + " - VoirAnimes";
    $("video")[0].src = episodesS10[window["pageNumber"]] + "?wrap=0";
    if (pageNumber === "1") {
      $("#previous-ep")[0].innerHTML = "<button class='locked'><ion-icon name='chevron-back-outline'></ion-icon> Saison Précédente</button>";
      $("#previous-ep")[0].href = "javascript:void(0)";
    }

    if (pageNumber === "14") {
      $("#next-ep")[0].innerHTML = "<button class='locked'>Saison Suivante <ion-icon name='chevron-forward-outline'></ion-icon></button>";
      $("#next-ep")[0].href = "javascript:void(0)";
    }
  }
}
