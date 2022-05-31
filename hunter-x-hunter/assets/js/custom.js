localStorage.setItem("watchedHXH", "enabled");

var path = window.location.pathname;
var page = path.split("/").pop();
pageNumber = page.slice(0, page.length - 5);

shortUrl = pageNumber + ".html";
length = shortUrl.length *= -1;
var url = window.location.pathname + window.location.search;
season = url.slice(23, length);

animeName = "Hunter × Hunter";
$(".title")[0].innerHTML = animeName;
document.title = animeName + " - VoirAnimes";

$('a[href="/VoirAnimes/hunter-x-hunter/"]')[2].innerHTML = "<div class='object active'> Hunter × Hunter </div>";

$("#previous-ep")[0].href = Number(pageNumber) - 1 + ".html";
$("#next-ep")[0].href = Number(pageNumber) + 1 + ".html";

$("#en-sub")[0].src = "../../assets/sub/" + season + pageNumber + "-en.vtt";
$("#fr-sub")[0].src = "../../assets/sub/" + season + pageNumber + "-fr.vtt";

const episodes = {
  1: "https://link.eu1.storjshare.io/jxy4az3qvppnnzxmljr7mkwr6f2q/animes-others/hunter-x-hunter/1.mp4",
  2: "https://link.eu1.storjshare.io/jwf7zuhvr7zcgslwomk4esdu4f4a/animes-others/hunter-x-hunter/2.mp4",
  3: "https://link.eu1.storjshare.io/jwqrxuef2egi3wqpm2mizulepbjq/animes-others/hunter-x-hunter/3.mp4",
  4: "https://link.eu1.storjshare.io/jwf6rij7rrhx4z2gkeccdkv2wyjq/animes-others/hunter-x-hunter/4.mp4",
  5: "https://link.eu1.storjshare.io/jwlxiheyq66rvjjwkion5ennq3gq/animes-others/hunter-x-hunter/5.mp4",
  6: "https://link.eu1.storjshare.io/jvmd23xix6fzzndot3oq4bllijeq/animes-others/hunter-x-hunter/6.mp4",
  7: "https://link.eu1.storjshare.io/jxmuacbplt2fhn2yuj3xbonzlz3a/animes-others/hunter-x-hunter/7.mp4",
  8: "https://link.eu1.storjshare.io/jw6jw25uyvie3ff7okrt3rcwug7a/animes-others/hunter-x-hunter/8.mp4",
  9: "https://link.eu1.storjshare.io/jumdclbqsf6wqfig42s4ticxlija/animes-others/hunter-x-hunter/9.mp4",
  10: "https://link.eu1.storjshare.io/jw5acqzywqxt52422h7gexafhcka/animes-others/hunter-x-hunter/10.mp4",
  11: "https://link.eu1.storjshare.io/jx6lhyw244w3njcuwctccrabipjq/animes-others/hunter-x-hunter/11.mp4",
  12: "https://link.eu1.storjshare.io/juoiqzucgeoogdtw4vcumuzwauxq/animes-others/hunter-x-hunter/12.mp4",
  13: "https://link.eu1.storjshare.io/jvkrjqaop22fwlpeomeg5b37kxua/animes-others/hunter-x-hunter/13.mp4",
  14: "https://link.eu1.storjshare.io/jwd52i266ofux3iyozr5ftqtlnwa/animes-others/hunter-x-hunter/14.mp4",
  15: "https://link.eu1.storjshare.io/jxltegpyyecjo3rmn6hhesksnb7q/animes-others/hunter-x-hunter/15.mp4",
  16: "https://link.eu1.storjshare.io/jvoww2ub74qpkaka7gw64fp6hnrq/animes-others/hunter-x-hunter/16.mp4",
  17: "https://link.eu1.storjshare.io/jwnt2kssqjitnqqgwpp6vund33ia/animes-others/hunter-x-hunter/17.mp4",
  18: "https://link.eu1.storjshare.io/jwlugeda4odmx2kqrruzarot7tga/animes-others/hunter-x-hunter/18.mp4",
  19: "https://link.eu1.storjshare.io/jxt7oktgtbnibyoovmclqeipdqfq/animes-others/hunter-x-hunter/19.mp4",
  20: "https://link.eu1.storjshare.io/jul6o3ark4aqdlfw4m4fypglcxra/animes-others/hunter-x-hunter/20.mp4",
  21: "https://link.eu1.storjshare.io/jxh56jx7eno6l3m3rdcr7tpvnuoq/animes-others/hunter-x-hunter/21.mp4",
  22: "https://link.eu1.storjshare.io/jxksi7cxpprabxlhjevfosmoxtqq/animes-others/hunter-x-hunter/22.mp4",
  23: "https://link.eu1.storjshare.io/jx5mhbbb3quexz4ocl2ugbecm6gq/animes-others/hunter-x-hunter/23.mp4",
  24: "https://link.eu1.storjshare.io/jus2lwaahmdf44fa3tamycohuvzq/animes-others/hunter-x-hunter/24.mp4",
  25: "https://link.eu1.storjshare.io/jujmgnfndjfmzoqal6v7v6pefjaa/animes-others/hunter-x-hunter/25.mp4",
  26: "https://link.eu1.storjshare.io/jvnxsr5nv56aikthf4sebr4oxlva/animes-others/hunter-x-hunter/26.mp4",
  27: "https://link.eu1.storjshare.io/jwu6awumagec26susinhw7k7escq/animes-others/hunter-x-hunter/27.mp4",
  28: "https://link.eu1.storjshare.io/jvvcznmkpf3xbs7ezpp6qadg6irq/animes-others/hunter-x-hunter/28.mp4",
  29: "https://link.eu1.storjshare.io/juiyrdsadsixwzl7gjswf52j6yga/animes-others/hunter-x-hunter/29.mp4",
  30: "https://link.eu1.storjshare.io/jvnksyadxonngucrl434gfo3iuwa/animes-others/hunter-x-hunter/30.mp4",
  31: "https://link.eu1.storjshare.io/jxf6uch2dohivzviqm5cm5btidqq/animes-others/hunter-x-hunter/31.mp4",
  32: "https://link.eu1.storjshare.io/jumjklpftc7xs7j2xp3xuzwdwyea/animes-others/hunter-x-hunter/32.mp4",
  33: "https://link.eu1.storjshare.io/jvohvbfyw74l43sfxvgnarqgbdgq/animes-others/hunter-x-hunter/33.mp4",
  34: "https://link.eu1.storjshare.io/jxab2eiww2xczaq2y4pc3fdysxia/animes-others/hunter-x-hunter/34.mp4",
  35: "https://link.eu1.storjshare.io/jwc46ud3nnqke2vwzspsjcv3cf4a/animes-others/hunter-x-hunter/35.mp4",
  36: "https://link.eu1.storjshare.io/jxhv76rqjvajwiiilxvzy6ldecna/animes-others/hunter-x-hunter/36.mp4",
  37: "https://link.eu1.storjshare.io/jv7ftjkhxg6xa4mi43pcr3v5v2ua/animes-others/hunter-x-hunter/37.mp4",
  38: "https://link.eu1.storjshare.io/jvlciwvim3udzzeb737lykj4kdsq/animes-others/hunter-x-hunter/38.mp4",
  39: "https://link.eu1.storjshare.io/jxbr6ndvaneirollyiq5zysyn5gq/animes-others/hunter-x-hunter/39.mp4",
  40: "https://link.eu1.storjshare.io/jwlqo6khhkgrz26e2hxp2qlf53zq/animes-others/hunter-x-hunter/40.mp4",
  41: "https://link.eu1.storjshare.io/jvyehe3tczanmmelejegvlin24va/animes-others/hunter-x-hunter/41.mp4",
  42: "https://link.eu1.storjshare.io/jw474ryz6lvpp2mjnmo772qdw3xa/animes-others/hunter-x-hunter/42.mp4",
  43: "https://link.eu1.storjshare.io/jvnt27znmxjgwycc6qwbthco3soq/animes-others/hunter-x-hunter/43.mp4",
  44: "https://link.eu1.storjshare.io/julwr2kmdtkr3lcvxla2dfegflwq/animes-others/hunter-x-hunter/44.mp4",
  45: "https://link.eu1.storjshare.io/jwrqj2eznfczcsby7nr5n37nbp5a/animes-others/hunter-x-hunter/45.mp4",
  46: "https://link.eu1.storjshare.io/juspvl372oqkkww7m2gzyjduwjhq/animes-others/hunter-x-hunter/46.mp4",
  47: "https://link.eu1.storjshare.io/jxzis2wd2vhllbbrifsjgt274rgq/animes-others/hunter-x-hunter/47.mp4",
  48: "https://link.eu1.storjshare.io/jw7dbi3pneqklm4six4colsuta6q/animes-others/hunter-x-hunter/48.mp4",
  49: "https://link.eu1.storjshare.io/jvqanhr4k6dd4mhzu3cwcy4qtlrq/animes-others/hunter-x-hunter/49.mp4",
  50: "https://link.eu1.storjshare.io/jw4gyhjgktnjcrdiwzrihkdoikha/animes-others/hunter-x-hunter/50.mp4",
  51: "https://link.eu1.storjshare.io/jvywvgzgrgsb3sd7qfug5ct5r3tq/animes-others/hunter-x-hunter/51.mp4",
  52: "https://link.eu1.storjshare.io/ju6sbh6ojww3cqk5f2erljenaxoq/animes-others/hunter-x-hunter/52.mp4",
  53: "https://link.eu1.storjshare.io/jxypulcqev6w446rcp77vnv5ia6q/animes-others/hunter-x-hunter/53.mp4",
  54: "https://link.eu1.storjshare.io/jvesvvhkcoqtf7iudeirasafyd6q/animes-others/hunter-x-hunter/54.mp4",
  55: "https://link.eu1.storjshare.io/jvtsrx3ehh2v44hpg5qde5fhry3a/animes-others/hunter-x-hunter/55.mp4",
  56: "https://link.eu1.storjshare.io/juffsktum3mra5kyu2x7km2d7mna/animes-others/hunter-x-hunter/56.mp4",
  57: "https://link.eu1.storjshare.io/jxkxukwpw4zxxbpbd7cvbex4x7eq/animes-others/hunter-x-hunter/57.mp4",
  58: "https://link.eu1.storjshare.io/jvqs33chwavipveg23mnng4kutkq/animes-others/hunter-x-hunter/58.mp4",
  59: "https://link.eu1.storjshare.io/jusxqcm7ieaoutokxom4igjclzqq/animes-others/hunter-x-hunter/59.mp4",
  60: "https://link.eu1.storjshare.io/jubxfodas4f7jvwzmhvrbvh6nfkq/animes-others/hunter-x-hunter/60.mp4",
  61: "https://link.eu1.storjshare.io/jwg6aegyvseookpq6plgsssoarjq/animes-others/hunter-x-hunter/61.mp4",
  62: "https://link.eu1.storjshare.io/jw2rs657vetc725qxbhkpzuznysa/animes-others/hunter-x-hunter/62.mp4",
  63: "https://link.eu1.storjshare.io/jvxykcsqieqo2jiwtivisif5h3hq/animes-others/hunter-x-hunter/63.mp4",
  64: "https://link.eu1.storjshare.io/juz62qqannoegrvz6tsi6424w47a/animes-others/hunter-x-hunter/64.mp4",
  65: "https://link.eu1.storjshare.io/jxqyeq6vlimr7ouet7ms5jxbs3la/animes-others/hunter-x-hunter/65.mp4",
  66: "https://link.eu1.storjshare.io/jvqkks5vqxqslxfpsa4xmk5nvfvq/animes-others/hunter-x-hunter/66.mp4",
  67: "https://link.eu1.storjshare.io/julz4kf6ompdr4bauxfqlkbrtpaa/animes-others/hunter-x-hunter/67.mp4",
  68: "https://link.eu1.storjshare.io/juh7yfmirtzrn3iu4nro7f53eh2a/animes-others/hunter-x-hunter/68.mp4",
  69: "https://link.eu1.storjshare.io/jv2lhbcw2mjew4hxkbvcopncj3ea/animes-others/hunter-x-hunter/69.mp4",
  70: "https://link.eu1.storjshare.io/jxvej7cie66roceuhrv3grcjesga/animes-others/hunter-x-hunter/70.mp4",
  71: "https://link.eu1.storjshare.io/jx4amywvmdq7d5kws2y7vnynrf6a/animes-others/hunter-x-hunter/71.mp4",
  72: "https://link.eu1.storjshare.io/jw3ayzsfirplpbgpb55v4fgr4gaa/animes-others/hunter-x-hunter/72.mp4",
  73: "https://link.eu1.storjshare.io/jujkfjgsep5v3nvdsovztlgg2cma/animes-others/hunter-x-hunter/73.mp4",
  74: "https://link.eu1.storjshare.io/jxzxpeezoanfzjajhpdbu4ubu4oq/animes-others/hunter-x-hunter/74.mp4",
  75: "https://link.eu1.storjshare.io/juubzirm3y2cj3du3bpfjxxya5da/animes-others/hunter-x-hunter/75.mp4",
  76: "https://link.eu1.storjshare.io/jxum7erishkjh7dvzr52eixy7a3q/animes-others/hunter-x-hunter/76.mp4",
  77: "https://link.eu1.storjshare.io/jwcyyox4bifxtiji4ofqc3evlcoa/animes-others/hunter-x-hunter/77.mp4",
  78: "https://link.eu1.storjshare.io/jxlqohqbziviggi2iegw6hmqmpna/animes-others/hunter-x-hunter/78.mp4",
  79: "https://link.eu1.storjshare.io/jxmmp5nw3aa67bknl7lnmyqre7wa/animes-others/hunter-x-hunter/79.mp4",
  80: "https://link.eu1.storjshare.io/jxb4mlo5f4imqrlhm6od5yuduvba/animes-others/hunter-x-hunter/80.mp4",
  81: "https://link.eu1.storjshare.io/jwxeuxrpoq6ldbvv352d4imwjy4a/animes-others/hunter-x-hunter/81.mp4",
  82: "https://link.eu1.storjshare.io/jx3lyg7xzxrfoovmnq4jxiwkgdkq/animes-others/hunter-x-hunter/82.mp4",
  83: "https://link.eu1.storjshare.io/jwdhjtbf4a3sf5ls74jrdobul5ma/animes-others/hunter-x-hunter/83.mp4",
  84: "https://link.eu1.storjshare.io/ju5gqpyinjtn6bbywt2f72jva4wq/animes-others/hunter-x-hunter/84.mp4",
  85: "https://link.eu1.storjshare.io/jvcziwk5a25fkowefbhlvxv2xdiq/animes-others/hunter-x-hunter/85.mp4",
  86: "https://link.eu1.storjshare.io/jx7l4q4weuk5p32yhjqxf5mjmuba/animes-others/hunter-x-hunter/86.mp4",
  87: "https://link.eu1.storjshare.io/jvjmom64ydakhd3rpbph24hrivaq/animes-others/hunter-x-hunter/87.mp4",
  88: "https://link.eu1.storjshare.io/jxkcanauqtkxyxrx3xpdfi3azylq/animes-others/hunter-x-hunter/88.mp4",
  89: "https://link.eu1.storjshare.io/jwac2zkhommph3eillvqvjan4tiq/animes-others/hunter-x-hunter/89.mp4",
  90: "https://link.eu1.storjshare.io/jviydgwciebxyvb7ifhppwhmtphq/animes-others/hunter-x-hunter/90.mp4",
  91: "https://link.eu1.storjshare.io/jwlyc6eutgtsrynuwoixt5t7pvya/animes-others/hunter-x-hunter/91.mp4",
  92: "https://link.eu1.storjshare.io/juk6ljt7y73zpgxhcqlxlwduavnq/animes-others/hunter-x-hunter/92.mp4",
  93: "https://link.eu1.storjshare.io/ju3ssaryzdxujuwlprwjey7qn4da/animes-others/hunter-x-hunter/93.mp4",
  94: "https://link.eu1.storjshare.io/judushp2nt4gwqjxafhqqshweo2q/animes-others/hunter-x-hunter/94.mp4",
  95: "https://link.eu1.storjshare.io/jwyfrqnforb3sf556qqfgai3lzwa/animes-others/hunter-x-hunter/95.mp4",
  96: "https://link.eu1.storjshare.io/jw7nmyvlwr52vdljghwkcfswvocq/animes-others/hunter-x-hunter/96.mp4",
  97: "https://link.eu1.storjshare.io/jwir7nrm3cxrpoy5gmmmt6uvqhfa/animes-others/hunter-x-hunter/97.mp4",
  98: "https://link.eu1.storjshare.io/jxofvemjmhla4wyib2i3vc7ghh7a/animes-others/hunter-x-hunter/98.mp4",
  99: "https://link.eu1.storjshare.io/jxxc5p7kmonzrx4bdgceh7mabqxa/animes-others/hunter-x-hunter/99.mp4",
  100: "https://link.eu1.storjshare.io/jufgynoldvaytay2ehjtsbvess6q/animes-others/hunter-x-hunter/100.mp4",
  101: "https://link.eu1.storjshare.io/jwgzs6p7ewuk3lismc3vcobhlsgq/animes-others/hunter-x-hunter/101.mp4",
  102: "https://link.eu1.storjshare.io/jxhxtli7syanmrqb5wu62bmqwcta/animes-others/hunter-x-hunter/102.mp4",
  103: "https://link.eu1.storjshare.io/juqx3haz6iczewyxadxvcm27ustq/animes-others/hunter-x-hunter/103.mp4",
  104: "https://link.eu1.storjshare.io/jxrd4o7bf5xyldtr7g2euqtjfasa/animes-others/hunter-x-hunter/104.mp4",
  105: "https://link.eu1.storjshare.io/jxulbdqwrczhm5fmijb7wepjqguq/animes-others/hunter-x-hunter/105.mp4",
  106: "https://link.eu1.storjshare.io/jwqf5h6yygllmlwgnqi6ehsvpova/animes-others/hunter-x-hunter/106.mp4",
  107: "https://link.eu1.storjshare.io/juhz2mfca5thijswilyhbivflvga/animes-others/hunter-x-hunter/107.mp4",
  108: "https://link.eu1.storjshare.io/jx6c45byeo74i3mt5sfkugll5tva/animes-others/hunter-x-hunter/108.mp4",
  109: "https://link.eu1.storjshare.io/jwqjbl7jxr74ldelsj62togfrfma/animes-others/hunter-x-hunter/109.mp4",
  110: "https://link.eu1.storjshare.io/juni35tkxoc6f4hy7is4xt7oqtbq/animes-others/hunter-x-hunter/110.mp4",
  111: "https://link.eu1.storjshare.io/jxd2nm3qkvq6rotxpf4ju4nkpkqq/animes-others/hunter-x-hunter/111.mp4",
  112: "https://link.eu1.storjshare.io/jwmes5f7pow2t62iavjepre6kxnq/animes-others/hunter-x-hunter/112.mp4",
  113: "https://link.eu1.storjshare.io/jxz2q3gsxuvbi23ac72iw4c4m5jq/animes-others/hunter-x-hunter/113.mp4",
  114: "https://link.eu1.storjshare.io/ju7ag7ql27nyqx7a7qg4vebfscpq/animes-others/hunter-x-hunter/114.mp4",
  115: "https://link.eu1.storjshare.io/jxci7ceaoivrb2b7xjq4ppbzqpja/animes-others/hunter-x-hunter/115.mp4",
  116: "https://link.eu1.storjshare.io/jxfjrglfjruwoqystd26xgsahjpq/animes-others/hunter-x-hunter/116.mp4",
  117: "https://link.eu1.storjshare.io/jxpnzlzpe3fervajcrgimyq5b3rq/animes-others/hunter-x-hunter/117.mp4",
  118: "https://link.eu1.storjshare.io/jvjz7rwd2sqq3mwy245pzdkmru2a/animes-others/hunter-x-hunter/118.mp4",
  119: "https://link.eu1.storjshare.io/ju73lp45tzfilsq4ex2nhluhlhgq/animes-others/hunter-x-hunter/119.mp4",
  120: "https://link.eu1.storjshare.io/jwjod56rfk4kqnq7neewgpbfo7gq/animes-others/hunter-x-hunter/120.mp4",
  121: "https://link.eu1.storjshare.io/jxpbazryym54rie7zowzxr4edtba/animes-others/hunter-x-hunter/121.mp4",
  122: "https://link.eu1.storjshare.io/jwcsrnbnkdrgyihw4xpjpddbeuxq/animes-others/hunter-x-hunter/122.mp4",
  123: "https://link.eu1.storjshare.io/jwfflpaa4bnht66yyzuvb3epu5na/animes-others/hunter-x-hunter/123.mp4",
  124: "https://link.eu1.storjshare.io/jude6adpu7warkknmhxkfwqtwnjq/animes-others/hunter-x-hunter/124.mp4",
  125: "https://link.eu1.storjshare.io/jxrct5m77tzl4jsotprtpobl4m5q/animes-others/hunter-x-hunter/125.mp4",
  126: "https://link.eu1.storjshare.io/jwevftlrcykeqvgu47hwdtigferq/animes-others/hunter-x-hunter/126.mp4",
  127: "https://link.eu1.storjshare.io/jweecm42nway3xpbbo4epkirlmya/animes-others/hunter-x-hunter/127.mp4",
  128: "https://link.eu1.storjshare.io/jxzt4nj6e76aauqvvn3b5fk7gjua/animes-others/hunter-x-hunter/128.mp4",
  129: "https://link.eu1.storjshare.io/juu7qla7lqm7tweard4ob75t7dmq/animes-others/hunter-x-hunter/129.mp4",
  130: "https://link.eu1.storjshare.io/jvp6bzipluwze5y6ovard5idoi4q/animes-others/hunter-x-hunter/130.mp4",
  131: "https://link.eu1.storjshare.io/jwg7vpbdl3ogprolu63midyn5qwq/animes-others/hunter-x-hunter/131.mp4",
  132: "https://link.eu1.storjshare.io/jxh7lapbxsetj5nczz2mxsll5j7q/animes-others/hunter-x-hunter/132.mp4",
  133: "https://link.eu1.storjshare.io/jwekq7syou67mtiw4nmk53pdil6q/animes-others/hunter-x-hunter/133.mp4",
  134: "https://link.eu1.storjshare.io/jvkcxovi43ueexteygs6scxk2ppa/animes-others/hunter-x-hunter/134.mp4",
  135: "https://link.eu1.storjshare.io/jxjnim7q6an2dlok4b5j7miwloxq/animes-others/hunter-x-hunter/135.mp4",
  136: "https://link.eu1.storjshare.io/jvfodycxmkhbsbq73hlxi2nvcvha/animes-others/hunter-x-hunter/136.mp4",
  137: "https://link.eu1.storjshare.io/jw3wydn36cb25gvo7ryeqvr62ecq/animes-others/hunter-x-hunter/137.mp4",
  138: "https://link.eu1.storjshare.io/jxvy2etpqbmfk4cvtojsjnfw73dq/animes-others/hunter-x-hunter/138.mp4",
  139: "https://link.eu1.storjshare.io/jvozfwnaqc6gcpvv7p4cczft5dma/animes-others/hunter-x-hunter/139.mp4",
  140: "https://link.eu1.storjshare.io/jvnfjlvrujwg67rptg4hondkfg7q/animes-others/hunter-x-hunter/140.mp4",
  141: "https://link.eu1.storjshare.io/jvjhppcjotme4wcinuuawamz5v7q/animes-others/hunter-x-hunter/141.mp4",
  142: "https://link.eu1.storjshare.io/jw4tljjohb6vrz3e4vi7m5qbpfma/animes-others/hunter-x-hunter/142.mp4",
  143: "https://link.eu1.storjshare.io/jxs3aslube2a4xlpnkawutlezy5q/animes-others/hunter-x-hunter/143.mp4",
  144: "https://link.eu1.storjshare.io/jwxhiwcvhw7njitwa2kqnaufbiqa/animes-others/hunter-x-hunter/144.mp4",
  145: "https://link.eu1.storjshare.io/julgmcrrjd7rkqi6qmalst6xbbbq/animes-others/hunter-x-hunter/145.mp4",
  146: "https://link.eu1.storjshare.io/judshkkpcuu5nvvaej74woac2jaa/animes-others/hunter-x-hunter/146.mp4",
  147: "https://link.eu1.storjshare.io/jvuesdjbkvsnusrq5akef7io6ouq/animes-others/hunter-x-hunter/147.mp4",
  148: "https://link.eu1.storjshare.io/jwoga4wtaeb25tvpypag3ce76cia/animes-others/hunter-x-hunter/148.mp4",
};

const episodesMovies = {
  1: "https://link.eu1.storjshare.io/jvmuwuhofauhpvvjme2anfhwipaq/animes-others/hunter-x-hunter/movies/1.mp4",
  2: "https://link.eu1.storjshare.io/jw4nbxxrev2ycpvezvbon4dvrc5q/animes-others/hunter-x-hunter/movies/2.mp4",
};

seasonLessSlash = season.slice(0, -1);

if (seasonLessSlash === "anime") {
  $(".epnumber")[0].innerHTML = "Ep. " + pageNumber;
  document.title = animeName + " - VoirAnimes";
  $("video")[0].src = episodes[window["pageNumber"]] + "?wrap=0";
  if (pageNumber === "1") {
    $("#previous-ep")[0].innerHTML = "<button class='locked'><ion-icon name='chevron-back-outline'></ion-icon> Saison Précédente</button>";
    $("#previous-ep")[0].href = "javascript:void(0)";
  }

  if (pageNumber === "148") {
    $("#next-ep")[0].innerHTML = "<button>Saison Suivante <ion-icon name='chevron-forward-outline'></ion-icon></button>";
    $("#next-ep")[0].href = "../movies/";
  }
}

if (seasonLessSlash === "movies") {
  $(".epnumber")[0].innerHTML = "Films - Ep. " + pageNumber;
  document.title = "Films - " + animeName + " - VoirAnimes";
  $("video")[0].src = episodesMovies[window["pageNumber"]] + "?wrap=0";
  if (pageNumber === "1") {
    $("#previous-ep")[0].innerHTML = "<button><ion-icon name='chevron-back-outline'></ion-icon> Saison Précédente</button>";
    $("#previous-ep")[0].href = "../anime/";
  }

  if (pageNumber === "2") {
    $("#next-ep")[0].innerHTML = "<button class='locked'>Saison Suivante <ion-icon name='chevron-forward-outline'></ion-icon></button>";
    $("#next-ep")[0].href = "javascript:void(0)";
  }
}
