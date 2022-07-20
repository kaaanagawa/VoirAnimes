// Pop Up
// let cookiePopUp = localStorage.getItem("cookiePopUp");

// let popup = $("#pop-up")[0];
// let popupButton = $("#pop-up-button")[0];

// if (cookiePopUp === null) {
//   displayPopUp();
// }

// function displayPopUp() {
//   setTimeout(() => {
//     popup.style.transform = "none";
//   }, 1000);
//   localStorage.setItem("cookiePopUp", "enabled");
// }

// popupButton.addEventListener("click", () => {
//   popup.style.transform = "translateX(-120%)";
// });

$(".watch")[0].innerHTML = "(Ep. " + localStorage.getItem('watchAss') + ")";
$(".watch")[1].innerHTML = "(Ep. " + localStorage.getItem('watchBer') + ")";
$(".watch")[2].innerHTML = "(Ep. " + localStorage.getItem('watchBla') + ")";
$(".watch")[3].innerHTML = "(Ep. " + localStorage.getItem('watchBle') + ")";
$(".watch")[4].innerHTML = "(Ep. " + localStorage.getItem('watchDem') + ")";
$(".watch")[5].innerHTML = "(Ep. " + localStorage.getItem('watchDrS') + ")";
$(".watch")[6].innerHTML = "(Ep. " + localStorage.getItem('watchGTO') + ")";
$(".watch")[7].innerHTML = "(Ep. " + localStorage.getItem('watchHai') + ")";
$(".watch")[8].innerHTML = "(Ep. " + localStorage.getItem('watchHxH') + ")";
$(".watch")[9].innerHTML = "(Ep. " + localStorage.getItem('watchHor') + ")";
$(".watch")[10].innerHTML = "(Ep. " + localStorage.getItem('watchIni') + ")";
$(".watch")[11].innerHTML = "(Ep. " + localStorage.getItem('watchJJK') + ")";
$(".watch")[12].innerHTML = "(Ep. " + localStorage.getItem('watchJBA') + ")";
$(".watch")[13].innerHTML = "(Ep. " + localStorage.getItem('watchMDD') + ")";
$(".watch")[14].innerHTML = "(Ep. " + localStorage.getItem('watchMHA') + ")";
$(".watch")[15].innerHTML = "(Ep. " + localStorage.getItem('watchNar') + ")";
$(".watch")[16].innerHTML = "(Ep. " + localStorage.getItem('watchNGE') + ")";
$(".watch")[17].innerHTML = "(Ep. " + localStorage.getItem('watchOP') + ")";
$(".watch")[18].innerHTML = "(Ep. " + localStorage.getItem('watchSNK') + ")";
$(".watch")[19].innerHTML = "(Ep. " + localStorage.getItem('watchSxF') + ")";
$(".watch")[20].innerHTML = "(Ep. " + localStorage.getItem('watchVin') + ")";

for (const div of document.querySelectorAll('.watch')) {
  if (div.textContent.includes('(Ep. null)')) {
    div.style.opacity = "0";
  }
}