function openOverlay() {
  $("#epselect-overlay")[0].style.opacity = "100";
  $("#epselect-overlay")[0].style.zIndex = "12";
  setTimeout(() => {
    document.body.classList.add("no-overflow");
  }, 333);
}

function closeOverlay() {
  $("#epselect-overlay")[0].style.opacity = "0";
  $("#epselect-overlay")[0].style.zIndex = "-1";
  setTimeout(() => {
    document.body.classList.remove("no-overflow");
  }, 333);
}

$("#epselect-overlay-close")[0].addEventListener("click", () => {
  closeOverlay();
});