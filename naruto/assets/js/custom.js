var path = window.location.pathname;
var page = path.split("/").pop();
pageNumber = page.slice(0, page.length - 5);

shortUrl = pageNumber + ".html";
length = shortUrl.length *= -1;
var url = window.location.pathname + window.location.search;
season = url.slice(25, length);

$(".epnumber")[0].innerHTML = "Ep. " + pageNumber;

animeName = "Naruto";
$(".title")[0].innerHTML = animeName;
document.title = animeName + " - VoirAnimes";

$('a[href="/VoirAnimes/naruto/"]')[2].innerHTML = "<div class='object active'> Naruto </div>";

$("#previous-ep")[0].href = Number(pageNumber) - 1 + ".html";
$("#next-ep")[0].href = Number(pageNumber) + 1 + ".html";

$("#en-sub")[0].src = "../../assets/sub/" + season + pageNumber + "-en.vtt";
$("#fr-sub")[0].src = "../../assets/sub/" + season + pageNumber + "-fr.vtt";

localStorage.setItem("watchNar", pageNumber);
localStorage.setItem("PathWatchNar", path);

const episodesS1 = {
  1: "https://link.eu1.storjshare.io/jwnq5ogqszclgp7hvg3ydbszaxga/voiranimes%2FNaruto%2FNaruto%2F01.mp4",
  2: "https://link.eu1.storjshare.io/jxe6v2dczaprsz7knux3k4lykiyq/voiranimes%2FNaruto%2FNaruto%2F02.mp4",
  3: "https://link.eu1.storjshare.io/jwtrrz4qvbtcpu2hu6jdhxpualja/voiranimes%2FNaruto%2FNaruto%2F03.mp4",
  4: "https://link.eu1.storjshare.io/jwxtl2g4w6555l4x7ti456xkrcjq/voiranimes%2FNaruto%2FNaruto%2F04.mp4",
  5: "https://link.eu1.storjshare.io/jvg7yjy6r7avhw3kaolciqzvq5la/voiranimes%2FNaruto%2FNaruto%2F05.mp4",
  6: "https://link.eu1.storjshare.io/jxuucxwspbco7dp5ldsq3avztjlq/voiranimes%2FNaruto%2FNaruto%2F06.mp4",
  7: "https://link.eu1.storjshare.io/jws3dv3mjgwdjdefsbqycozzsu7q/voiranimes%2FNaruto%2FNaruto%2F07.mp4",
  8: "https://link.eu1.storjshare.io/jublttmlcdlbhai5f7ehuepmnrla/voiranimes%2FNaruto%2FNaruto%2F08.mp4",
  9: "https://link.eu1.storjshare.io/jxco5mkjvhuhdfwc7zux4f3lbnzq/voiranimes%2FNaruto%2FNaruto%2F09.mp4",
  10: "https://link.eu1.storjshare.io/jue4u6nsqfzwp6jum2y64ofycb7q/voiranimes%2FNaruto%2FNaruto%2F10.mp4",
  11: "https://link.eu1.storjshare.io/jwcl6p57wytghmu2nzicqp5rez3q/voiranimes%2FNaruto%2FNaruto%2F11.mp4",
  12: "https://link.eu1.storjshare.io/ju46elhu3guvydqcv7xrjpvqiwoa/voiranimes%2FNaruto%2FNaruto%2F12.mp4",
  13: "https://link.eu1.storjshare.io/jx7lc5gwklb5gob74lnweo4ucyta/voiranimes%2FNaruto%2FNaruto%2F13.mp4",
  14: "https://link.eu1.storjshare.io/juuxta6qsy5t46xp6pkds5fl4hqa/voiranimes%2FNaruto%2FNaruto%2F14.mp4",
  15: "https://link.eu1.storjshare.io/jxpavs2qdmyknufiyd2i4xli3qpq/voiranimes%2FNaruto%2FNaruto%2F15.mp4",
  16: "https://link.eu1.storjshare.io/jvbofdpuxgjp6zuhtstkkc3p5n6q/voiranimes%2FNaruto%2FNaruto%2F16.mp4",
  17: "https://link.eu1.storjshare.io/jwxfgpsc7z6hk7qinzh6i2hcdpqq/voiranimes%2FNaruto%2FNaruto%2F17.mp4",
  18: "https://link.eu1.storjshare.io/jugr3bscyyaell6lsz3uazyi3q3a/voiranimes%2FNaruto%2FNaruto%2F18.mp4",
  19: "https://link.eu1.storjshare.io/jxxtnpoesqd6mmnlm4mkzpsxpwya/voiranimes%2FNaruto%2FNaruto%2F19.mp4",
  20: "https://link.eu1.storjshare.io/jx6mljh6ygupfvguci2nz3ewljmq/voiranimes%2FNaruto%2FNaruto%2F20.mp4",
  21: "https://link.eu1.storjshare.io/jxd5yddj5ogsvjx6yb7useycq5ha/voiranimes%2FNaruto%2FNaruto%2F21.mp4",
  22: "https://link.eu1.storjshare.io/ju3nsvlgz2o3sixg2xvfpbsd4kfq/voiranimes%2FNaruto%2FNaruto%2F22.mp4",
  23: "https://link.eu1.storjshare.io/jwwagjezcoi6334funooqdqkabeq/voiranimes%2FNaruto%2FNaruto%2F23.mp4",
  24: "https://link.eu1.storjshare.io/jvahk33nyrq56allnvhqo2lo73rq/voiranimes%2FNaruto%2FNaruto%2F24.mp4",
  25: "https://link.eu1.storjshare.io/jxjdy43lfmlcbmjhkxkr3gdy7qza/voiranimes%2FNaruto%2FNaruto%2F25.mp4",
  26: "https://link.eu1.storjshare.io/jw6xyo5m7kao57dw5i3x6uioohlq/voiranimes%2FNaruto%2FNaruto%2F27.mp4",
  27: "https://link.eu1.storjshare.io/jvixuohj62hnn54jhfoysc2efmja/voiranimes%2FNaruto%2FNaruto%2F28.mp4",
  28: "https://link.eu1.storjshare.io/jvrc6wbplsgifmirac3apijc7moa/voiranimes%2FNaruto%2FNaruto%2F29.mp4",
  29: "https://link.eu1.storjshare.io/jvkw2ilz2sjndvu6mbaveyuqkbzq/voiranimes%2FNaruto%2FNaruto%2F30.mp4",
  30: "https://link.eu1.storjshare.io/juc2hdz4orlbhqbb7r6orqsz67jq/voiranimes%2FNaruto%2FNaruto%2F31.mp4",
  31: "https://link.eu1.storjshare.io/jxraywm564xil73erdlmpeqq5sjq/voiranimes%2FNaruto%2FNaruto%2F32.mp4",
  32: "https://link.eu1.storjshare.io/jwhijvm6fuf5m62ouo2ov4e7724a/voiranimes%2FNaruto%2FNaruto%2F33.mp4",
  33: "https://link.eu1.storjshare.io/jwyn2azrgrznzgivglvavi3kxpdq/voiranimes%2FNaruto%2FNaruto%2F34.mp4",
  34: "https://link.eu1.storjshare.io/ju5t7khva3w7cka4dtjdp3c7kefq/voiranimes%2FNaruto%2FNaruto%2F35.mp4",
  35: "https://link.eu1.storjshare.io/ju4s6fw6mxp4j2kyrsdzjfv2be6a/voiranimes%2FNaruto%2FNaruto%2F36.mp4",
  36: "https://link.eu1.storjshare.io/jxfzrlkkrjic4v7puza3n3gskwxa/voiranimes%2FNaruto%2FNaruto%2F37.mp4",
  37: "https://link.eu1.storjshare.io/juiwdoodxsqpp32lrpyoykrpkupq/voiranimes%2FNaruto%2FNaruto%2F38.mp4",
  38: "https://link.eu1.storjshare.io/jxx46ufpsptebfiga3m7y2yuhsya/voiranimes%2FNaruto%2FNaruto%2F39.mp4",
  39: "https://link.eu1.storjshare.io/jvyn5iwarejmoulx4a3323u7vlpa/voiranimes%2FNaruto%2FNaruto%2F40.mp4",
  40: "https://link.eu1.storjshare.io/jvknukkjljflqij7tdx7r56k3x4q/voiranimes%2FNaruto%2FNaruto%2F41.mp4",
  41: "https://link.eu1.storjshare.io/jxuacuvioegbi73l3zklodmv7puq/voiranimes%2FNaruto%2FNaruto%2F42.mp4",
  42: "https://link.eu1.storjshare.io/jvjfsnfjsfidlr2kgfyqltgmgc2q/voiranimes%2FNaruto%2FNaruto%2F43.mp4",
  43: "https://link.eu1.storjshare.io/jvczxheeuxxgf24anyx6r7pvyj4q/voiranimes%2FNaruto%2FNaruto%2F44.mp4",
  44: "https://link.eu1.storjshare.io/jwshtgsol27qu6yk7aajpvgkof5a/voiranimes%2FNaruto%2FNaruto%2F45.mp4",
  45: "https://link.eu1.storjshare.io/jvbpbnqhl5ekxupmfcvs67rtonxa/voiranimes%2FNaruto%2FNaruto%2F46.mp4",
  46: "https://link.eu1.storjshare.io/jucunaic6f2w4g432fazadxoihga/voiranimes%2FNaruto%2FNaruto%2F47.mp4",
  47: "https://link.eu1.storjshare.io/jxlj6vu4fuwkcvzalhjfm5eaxtnq/voiranimes%2FNaruto%2FNaruto%2F48.mp4",
  48: "https://link.eu1.storjshare.io/jw2xvrpgu7plmgoee3vp3p4xwuoq/voiranimes%2FNaruto%2FNaruto%2F49.mp4",
  49: "https://link.eu1.storjshare.io/jx54el3w33bmatzaqwhihxahcbla/voiranimes%2FNaruto%2FNaruto%2F50.mp4",
  50: "https://link.eu1.storjshare.io/jvui7amulp4azso4ovrfyjvkumkq/voiranimes%2FNaruto%2FNaruto%2F51.mp4",
  51: "https://link.eu1.storjshare.io/jxdcgdtgqmitbqnktuo7cc5rjeaa/voiranimes%2FNaruto%2FNaruto%2F52.mp4",
  52: "https://link.eu1.storjshare.io/julybxsugawckfedlvcdh6cwlqsq/voiranimes%2FNaruto%2FNaruto%2F53.mp4",
  53: "https://link.eu1.storjshare.io/jvbvlxuv6qbg7wt3mb4uo3gstiaa/voiranimes%2FNaruto%2FNaruto%2F54.mp4",
  54: "https://link.eu1.storjshare.io/jv27yqt75ikjq5xdnndegjy3f2vq/voiranimes%2FNaruto%2FNaruto%2F55.mp4",
  55: "https://link.eu1.storjshare.io/julrqyw6fe3zxfovtotghjlswycq/voiranimes%2FNaruto%2FNaruto%2F56.mp4",
  56: "https://link.eu1.storjshare.io/jvhs7kpl6az6mr3alc3utioovxaa/voiranimes%2FNaruto%2FNaruto%2F57.mp4",
  57: "https://link.eu1.storjshare.io/ju7bsqprkio4bmlwbugtkasywn6q/voiranimes%2FNaruto%2FNaruto%2F58.mp4",
  58: "https://link.eu1.storjshare.io/juh5akcxupaiilo7damsrtvcuu6a/voiranimes%2FNaruto%2FNaruto%2F59.mp4",
  59: "https://link.eu1.storjshare.io/jvrwjq2el3ggmpumaszwwvwply4q/voiranimes%2FNaruto%2FNaruto%2F60.mp4",
  60: "https://link.eu1.storjshare.io/jv6q7ivgeuzgy53yx3gxalh2xwkq/voiranimes%2FNaruto%2FNaruto%2F61.mp4",
  61: "https://link.eu1.storjshare.io/jxcxsxxxo6rrihdteyct3kxnh74q/voiranimes%2FNaruto%2FNaruto%2F62.mp4",
  62: "https://link.eu1.storjshare.io/juwnd7xcgl5znahv4zw2ab4svwtq/voiranimes%2FNaruto%2FNaruto%2F63.mp4",
  63: "https://link.eu1.storjshare.io/jwdbae23ueacexnpwemfpw3njjea/voiranimes%2FNaruto%2FNaruto%2F64.mp4",
  64: "https://link.eu1.storjshare.io/juahq4eun7f2pio6llnqjnkpuuga/voiranimes%2FNaruto%2FNaruto%2F65.mp4",
  65: "https://link.eu1.storjshare.io/jvr2aytjgukphzojv5rvs432bypa/voiranimes%2FNaruto%2FNaruto%2F66.mp4",
  66: "https://link.eu1.storjshare.io/juza5qpb6bckmlblkvirh4inihsa/voiranimes%2FNaruto%2FNaruto%2F67.mp4",
  67: "https://link.eu1.storjshare.io/jwdj25w6ptvvxw5nn36qionwneaq/voiranimes%2FNaruto%2FNaruto%2F68.mp4",
  68: "https://link.eu1.storjshare.io/jxiqcxw4foik5wrnbu3fdpr22oja/voiranimes%2FNaruto%2FNaruto%2F69.mp4",
  69: "https://link.eu1.storjshare.io/jvgsl6zdwn5h5dvspuzricm364la/voiranimes%2FNaruto%2FNaruto%2F70.mp4",
  70: "https://link.eu1.storjshare.io/jv67um6mpqyilwyyvby3opur7iqq/voiranimes%2FNaruto%2FNaruto%2F71.mp4",
  71: "https://link.eu1.storjshare.io/jvzwwycyg2x2pizinirf5lqrpzeq/voiranimes%2FNaruto%2FNaruto%2F72.mp4",
  72: "https://link.eu1.storjshare.io/jwrjfpkh62chx6hcttxx47x7mbjq/voiranimes%2FNaruto%2FNaruto%2F73.mp4",
  73: "https://link.eu1.storjshare.io/jw76mldgnnhnm6svveooazt23qza/voiranimes%2FNaruto%2FNaruto%2F74.mp4",
  74: "https://link.eu1.storjshare.io/jxqrlffgy7qr3qkfnchpcztaewka/voiranimes%2FNaruto%2FNaruto%2F75.mp4",
  75: "https://link.eu1.storjshare.io/jwmvz25nx3ixfijxs2nahp2jdgha/voiranimes%2FNaruto%2FNaruto%2F76.mp4",
  76: "https://link.eu1.storjshare.io/jw4thko6rzt6bbxp7adqfb33v75a/voiranimes%2FNaruto%2FNaruto%2F77.mp4",
  77: "https://link.eu1.storjshare.io/jvpaeqoavv3xkjfjjqfysmvwssda/voiranimes%2FNaruto%2FNaruto%2F78.mp4",
  78: "https://link.eu1.storjshare.io/jugr3ayhsuh5anvo24vo7baqpcyq/voiranimes%2FNaruto%2FNaruto%2F79.mp4",
  79: "https://link.eu1.storjshare.io/jxjwzv4yele4lyrl7lrceunahj4a/voiranimes%2FNaruto%2FNaruto%2F80.mp4",
  80: "https://link.eu1.storjshare.io/jvdxicwo3qw6l45mkzpllzmbsmfq/voiranimes%2FNaruto%2FNaruto%2F81.mp4",
  81: "https://link.eu1.storjshare.io/jx3lm7wxcrtj7swzgiwqpi7k2t4q/voiranimes%2FNaruto%2FNaruto%2F82.mp4",
  82: "https://link.eu1.storjshare.io/jugalzw3l4h44qwyqtreby532lva/voiranimes%2FNaruto%2FNaruto%2F83.mp4",
  83: "https://link.eu1.storjshare.io/jwxbgy6egfaif4thliop7ykdanra/voiranimes%2FNaruto%2FNaruto%2F84.mp4",
  84: "https://link.eu1.storjshare.io/jumrnpitt32s4bj5x5yrtrutikaq/voiranimes%2FNaruto%2FNaruto%2F85.mp4",
  85: "https://link.eu1.storjshare.io/jxbj4serakne4stldldjwgv2ov6a/voiranimes%2FNaruto%2FNaruto%2F86.mp4",
  86: "https://link.eu1.storjshare.io/jwrzi55gkb2glfl4id37hhdqwrsa/voiranimes%2FNaruto%2FNaruto%2F87.mp4",
  87: "https://link.eu1.storjshare.io/jwpt5fl6x7bcvyegpz2o52v5u2sq/voiranimes%2FNaruto%2FNaruto%2F88.mp4",
  88: "https://link.eu1.storjshare.io/jwyk7rhnuasyf5alshtresw6rq5a/voiranimes%2FNaruto%2FNaruto%2F89.mp4",
  89: "https://link.eu1.storjshare.io/jx3hsq7bkcq7gke3hrsfbmlpi6tq/voiranimes%2FNaruto%2FNaruto%2F90.mp4",
  90: "https://link.eu1.storjshare.io/jxvenh6op2k2jeddnzidnevpmgga/voiranimes%2FNaruto%2FNaruto%2F91.mp4",
  91: "https://link.eu1.storjshare.io/jwjilcctpm2q5aa7nmkfwbgziuoa/voiranimes%2FNaruto%2FNaruto%2F92.mp4",
  92: "https://link.eu1.storjshare.io/jwjjw735n5z6pp4hof6y47b7w3pq/voiranimes%2FNaruto%2FNaruto%2F93.mp4",
  93: "https://link.eu1.storjshare.io/jvwdrrrncddhapfsh36pdluomcyq/voiranimes%2FNaruto%2FNaruto%2F94.mp4",
  94: "https://link.eu1.storjshare.io/jx4uze2e2dejkxqwduuto57i3hka/voiranimes%2FNaruto%2FNaruto%2F95.mp4",
  95: "https://link.eu1.storjshare.io/jxwwtjbu7yree3jf4jgzt5ep4zsa/voiranimes%2FNaruto%2FNaruto%2F98.mp4",
  96: "https://link.eu1.storjshare.io/juxutbk53rrjxj7tlx45omx73jnq/voiranimes%2FNaruto%2FNaruto%2F99.mp4",
  97: "https://link.eu1.storjshare.io/jv5c6cd25wzleqsio56qhb3sbc2a/voiranimes%2FNaruto%2FNaruto%2F100.mp4",
  98: "https://link.eu1.storjshare.io/jwugwz7hhaphrnqnoknjkxvtclzq/voiranimes%2FNaruto%2FNaruto%2F107.mp4",
  99: "https://link.eu1.storjshare.io/jukk4b3ivevshj5cuhfa5rvpvilq/voiranimes%2FNaruto%2FNaruto%2F108.mp4",
  100: "https://link.eu1.storjshare.io/jw52t3tysry7qbwas272hf2pvspa/voiranimes%2FNaruto%2FNaruto%2F109.mp4",
  101: "https://link.eu1.storjshare.io/jwaltbza77zrnrllxryf2qtvcsla/voiranimes%2FNaruto%2FNaruto%2F110.mp4",
  102: "https://link.eu1.storjshare.io/jwduwugdivvdmpfjic2h46bc4qdq/voiranimes%2FNaruto%2FNaruto%2F111.mp4",
  103: "https://link.eu1.storjshare.io/juwefx3xy6n5eqtg3loubtstnzea/voiranimes%2FNaruto%2FNaruto%2F112.mp4",
  104: "https://link.eu1.storjshare.io/jw35clmy5kblx4gf74pqi54jnnua/voiranimes%2FNaruto%2FNaruto%2F113.mp4",
  105: "https://link.eu1.storjshare.io/ju7vmcheab6xzkqlmrxn7x2icozq/voiranimes%2FNaruto%2FNaruto%2F114.mp4",
  106: "https://link.eu1.storjshare.io/jwcp6dktqldpnqg6njdim2aybfda/voiranimes%2FNaruto%2FNaruto%2F115.mp4",
  107: "https://link.eu1.storjshare.io/jufueijmh3rtbqykapzftqmyesgq/voiranimes%2FNaruto%2FNaruto%2F116.mp4",
  108: "https://link.eu1.storjshare.io/jvqesm4rw5mpqbadtcirslcrrmjq/voiranimes%2FNaruto%2FNaruto%2F117.mp4",
  109: "https://link.eu1.storjshare.io/jwbdpq66isctq4l6vqs7d6i4yfna/voiranimes%2FNaruto%2FNaruto%2F118.mp4",
  110: "https://link.eu1.storjshare.io/juii3yz37i3ljyx4hyeq44s3d5rq/voiranimes%2FNaruto%2FNaruto%2F119.mp4",
  111: "https://link.eu1.storjshare.io/jvtpvjfaerolovo37hprsxwcsj2a/voiranimes%2FNaruto%2FNaruto%2F120.mp4",
  112: "https://link.eu1.storjshare.io/ju4uddrm3zya2mw6uywvjyqcei4q/voiranimes%2FNaruto%2FNaruto%2F121.mp4",
  113: "https://link.eu1.storjshare.io/juz46yul5mh47mfknperyfk6ckha/voiranimes%2FNaruto%2FNaruto%2F122.mp4",
  114: "https://link.eu1.storjshare.io/jxqhxftb7h6pmcl2y23rzmcra3ha/voiranimes%2FNaruto%2FNaruto%2F123.mp4",
  115: "https://link.eu1.storjshare.io/jv6bb4bx2xkxace5446c7n6motua/voiranimes%2FNaruto%2FNaruto%2F124.mp4",
  116: "https://link.eu1.storjshare.io/jxvsjrxpyn5ia2rsh3is3u73s7cq/voiranimes%2FNaruto%2FNaruto%2F125.mp4",
  117: "https://link.eu1.storjshare.io/jwxxrr4d4xgytfair3wf4fjh6roa/voiranimes%2FNaruto%2FNaruto%2F126.mp4",
  118: "https://link.eu1.storjshare.io/juj4oad274e6rkx7on4wuufshdgq/voiranimes%2FNaruto%2FNaruto%2F127.mp4",
  119: "https://link.eu1.storjshare.io/jubzpz7bytpycjpmbp2vresnoiwa/voiranimes%2FNaruto%2FNaruto%2F128.mp4",
  120: "https://link.eu1.storjshare.io/jubohidgdvpvtprgq23py5znplpq/voiranimes%2FNaruto%2FNaruto%2F129.mp4",
  121: "https://link.eu1.storjshare.io/jxmokpep5ltknmfqtuwsuscxmbaa/voiranimes%2FNaruto%2FNaruto%2F130.mp4",
  122: "https://link.eu1.storjshare.io/jw6kenpct5e5dkxd3qjg4z35sbra/voiranimes%2FNaruto%2FNaruto%2F131.mp4",
  123: "https://link.eu1.storjshare.io/judq5d4x3ztgu2murxrhar2ten4q/voiranimes%2FNaruto%2FNaruto%2F132.mp4",
  124: "https://link.eu1.storjshare.io/jwalqdgqsbgyoskmw7hpf67niolq/voiranimes%2FNaruto%2FNaruto%2F133.mp4",
  125: "https://link.eu1.storjshare.io/jvbjtrf3ht2xdtuv2q6svxi67w5q/voiranimes%2FNaruto%2FNaruto%2F134.mp4",
  126: "https://link.eu1.storjshare.io/jwj4wetrgwzd6z3oilwmsap6o3oa/voiranimes%2FNaruto%2FNaruto%2F135.mp4",
  127: "https://link.eu1.storjshare.io/ju7xazmplhm5fmh53ukt5kly56da/voiranimes%2FNaruto%2FNaruto%2F141.mp4",
  128: "https://link.eu1.storjshare.io/ju2prxt2jyb6lwnadl2h4ljip52a/voiranimes%2FNaruto%2FNaruto%2F142.mp4",
  129: "https://link.eu1.storjshare.io/jutbaf4coxr6ozkxzbujuz6gvy3a/voiranimes%2FNaruto%2FNaruto%2F220.mp4",
};

const episodesS2 = {
  1: "",
  2: "",
  3: "",
  4: "",
  5: "",
  6: "",
  7: "",
  8: "",
  9: "",
  10: "",
  11: "",
  12: "",
  13: "",
  14: "",
  15: "",
  16: "",
  17: "",
  18: "",
  19: "",
  20: "",
  21: "",
  22: "",
  23: "",
  24: "",
  25: "",
};

seasonLessSlash = season.slice(0, -1);

if (seasonLessSlash === "naruto") {
  document.title = "Naruto - " + animeName + " - VoirAnimes";
  $("video")[0].src = episodesS1[window["pageNumber"]] + "?wrap=0";
  if (pageNumber === "1") {
    $("#previous-ep")[0].href = "javascript:void(0)";
  }

  if (pageNumber === "130") {
    $("#next-ep")[0].innerHTML = "<button>Saison Suivante <ion-icon name='chevron-forward-outline'></ion-icon></button>";
    $("#next-ep")[0].href = "../s2/";
  }
}

if (seasonLessSlash === "shippuden") {
  document.title = "Naruto Shippuden - " + animeName + " - VoirAnimes";
  $("video")[0].src = episodesS2[window["pageNumber"]] + "?wrap=0";
  if (pageNumber === "1") {
    $("#previous-ep")[0].innerHTML = "<button><ion-icon name='chevron-back-outline'></ion-icon> Saison Précédente</button>";
    $("#previous-ep")[0].href = "../s1/12.html";
  }

  if (pageNumber === "32") {
    $("#next-ep")[0].innerHTML = "<button>Saison Suivante <ion-icon name='chevron-forward-outline'></ion-icon></button>";
    $("#next-ep")[0].href = "../s3/";
  }
}
