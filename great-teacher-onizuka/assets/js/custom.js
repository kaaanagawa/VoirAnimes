var path = window.location.pathname;
var page = path.split("/").pop();
var pageNumber = page.slice(0, page.length - 5);

$(".epnumber")[0].innerHTML = "Ep. " + pageNumber;

animeName = "Great Teacher Onizuka";
$(".title")[0].innerHTML = animeName;
document.title = "Ep." + pageNumber + " - " + animeName + " - VoirAnimes";

$('a[href="/VoirAnimes/great-teacher-onizuka/"]')[2].innerHTML = "<div class='object active'> Great Teacher Onizuka </div>";

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

localStorage.setItem("watchBer", pageNumber);
localStorage.setItem("PathWatchBer", path);

const episodes = {
  1: "https://link.storjshare.io/juyri6sy3gk54dvnmneheaty4b7q/anime%2Fgreat-teacher-onizuka%2F1.mp4",
  2: "https://link.storjshare.io/jwm4y5k2yjdpa2bdi6rl4dfded7q/anime%2Fgreat-teacher-onizuka%2F2.mp4",
  3: "https://link.storjshare.io/jxuipepqjdkdcldcmctufiba4twa/anime%2Fgreat-teacher-onizuka%2F3.mp4",
  4: "https://link.storjshare.io/juh4775yupny3endvxtj37rgxiaa/anime%2Fgreat-teacher-onizuka%2F4.mp4",
  5: "https://link.storjshare.io/juayrj25anhs54rn2257ibyulvfa/anime%2Fgreat-teacher-onizuka%2F5.mp4",
  6: "https://link.storjshare.io/jwrwpo3kr7ibthqqobbfovqsrzmq/anime%2Fgreat-teacher-onizuka%2F6.mp4",
  7: "https://link.storjshare.io/jvsy4p4p37cnl5354dg7lxk3o6xq/anime%2Fgreat-teacher-onizuka%2F7.mp4",
  8: "https://link.storjshare.io/jvydzduwn7wjejegouyf2lrnp7aa/anime%2Fgreat-teacher-onizuka%2F8.mp4",
  9: "https://link.storjshare.io/jxrfwevtkqys7ucgnv6jaw2jw66a/anime%2Fgreat-teacher-onizuka%2F9.mp4",
  10: "https://link.storjshare.io/jvfdzrazzyiglg6ylomk7iiswisq/anime%2Fgreat-teacher-onizuka%2F10.mp4",
  11: "https://link.storjshare.io/jwt2uj7lxjajbj2nu7ttql5dyfkq/anime%2Fgreat-teacher-onizuka%2F11.mp4",
  12: "https://link.storjshare.io/ju3bvkqzbrigr3w273cp6qrrclta/anime%2Fgreat-teacher-onizuka%2F12.mp4",
  13: "https://link.storjshare.io/jvr2x2hl2tm32kyxn2iywdwlhhlq/anime%2Fgreat-teacher-onizuka%2F13.mp4",
  14: "https://link.storjshare.io/jw2zpet5ca7e3qwirra3tvtqqccq/anime%2Fgreat-teacher-onizuka%2F14.mp4",
  15: "https://link.storjshare.io/jvq3odbigjj5kh4u4a224ttlgv6a/anime%2Fgreat-teacher-onizuka%2F15.mp4",
  16: "https://link.storjshare.io/judhafqgbqrr34fkktx4vteb5meq/anime%2Fgreat-teacher-onizuka%2F16.mp4",
  17: "https://link.storjshare.io/jxhqr4h5hbk4h7rf2khwf4rdoeca/anime%2Fgreat-teacher-onizuka%2F17.mp4",
  18: "https://link.storjshare.io/ju7umechvw44btjywwvi75si2bya/anime%2Fgreat-teacher-onizuka%2F18.mp4",
  19: "https://link.storjshare.io/jwx4dx7nyzmqtilzbs5mdfezdd2q/anime%2Fgreat-teacher-onizuka%2F19.mp4",
  20: "https://link.storjshare.io/jxpn5vvubjvbku7lclrvkr27anzq/anime%2Fgreat-teacher-onizuka%2F20.mp4",
  21: "https://link.storjshare.io/juv7ok2fqd5yu5maqcdjuhluua5q/anime%2Fgreat-teacher-onizuka%2F21.mp4",
  22: "https://link.storjshare.io/jwtwgd6szqpbnqtyl3jbps2fncvq/anime%2Fgreat-teacher-onizuka%2F22.mp4",
  23: "https://link.storjshare.io/jvdt6ay4tvqrkxzmxzlkmfjigmaa/anime%2Fgreat-teacher-onizuka%2F23.mp4",
  24: "https://link.storjshare.io/jumws4d5lsdlgef7quzewx2d65aq/anime%2Fgreat-teacher-onizuka%2F24.mp4",
  25: "https://link.storjshare.io/jxzkpqynsina5ei56vqbt3euowqq/anime%2Fgreat-teacher-onizuka%2F25.mp4",
  26: "https://link.storjshare.io/jvc4euxt5pim2qkg23hmnuvjnwlq/anime%2Fgreat-teacher-onizuka%2F26.mp4",
  27: "https://link.storjshare.io/jvyh47rv4i2ma64bgmalhcuptl3q/anime%2Fgreat-teacher-onizuka%2F27.mp4",
  28: "https://link.storjshare.io/jxzndva7kqxkfjii22nwn4fkdefq/anime%2Fgreat-teacher-onizuka%2F28.mp4",
  29: "https://link.storjshare.io/jx6hntw7auxdg4zsslkuiavp46jq/anime%2Fgreat-teacher-onizuka%2F29.mp4",
  30: "https://link.storjshare.io/jxw2rkmtgix4dpoo42vyid3hieza/anime%2Fgreat-teacher-onizuka%2F30.mp4",
  31: "https://link.storjshare.io/jwhwqg2iwatxzzrqxhn2ktp3ewlq/anime%2Fgreat-teacher-onizuka%2F31.mp4",
  32: "https://link.storjshare.io/jw4gwwkhjewws22aiix7he5c6skq/anime%2Fgreat-teacher-onizuka%2F32.mp4",
  33: "https://link.storjshare.io/juqzcudeqqasevez5a3u6tfe6oaq/anime%2Fgreat-teacher-onizuka%2F33.mp4",
  34: "https://link.storjshare.io/juxeoi65yluirh42eft5nrg7blla/anime%2Fgreat-teacher-onizuka%2F34.mp4",
  35: "https://link.storjshare.io/jwn6jl5babbto3vwa35plrkoqw7a/anime%2Fgreat-teacher-onizuka%2F35.mp4",
  36: "https://link.storjshare.io/julztpfo3f22ed5zc6ndfqrubcyq/anime%2Fgreat-teacher-onizuka%2F36.mp4",
  37: "https://link.storjshare.io/jwuc6r2rsmuiqxwvxwmmcqjacoba/anime%2Fgreat-teacher-onizuka%2F37.mp4",
  38: "https://link.storjshare.io/juuvrrxnvedepc3kpilykkyhdoiq/anime%2Fgreat-teacher-onizuka%2F38.mp4",
  39: "https://link.storjshare.io/judywmlhd4tg3xzb33wgr2b5blua/anime%2Fgreat-teacher-onizuka%2F39.mp4",
  40: "https://link.storjshare.io/jvmgqc2e22eou6sc3xnnzr27wyua/anime%2Fgreat-teacher-onizuka%2F40.mp4",
  41: "https://link.storjshare.io/jw2orsnbe6kdmupj333zs3gxn32q/anime%2Fgreat-teacher-onizuka%2F41.mp4",
  42: "https://link.storjshare.io/jvq5vjwe2gt4wn4di5dztzfa2e6q/anime%2Fgreat-teacher-onizuka%2F42.mp4",
  43: "https://link.storjshare.io/jwja3cr44sgsvsgpqzopehk7hava/anime%2Fgreat-teacher-onizuka%2F43.mp4",
};

$("video")[0].src = episodes[window["pageNumber"]] + "?wrap=0";
