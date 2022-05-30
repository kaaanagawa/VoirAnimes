$(".context-menu")[0].innerHTML =
  "<ul> <a href='/'> <li> <p>Accueil</p> </li> </a> <a href='/movies/'> <li> <p>Films</p> </li> </a> <a rel='noreferrer' target='_blank' href='https://mega.nz/folder/QsYEGLKC#PxSU43LJ_ddAb2KhgET5OQ'> <li> <p>Mangas</p> </li> </a> <a rel='noreferrer' target='_blank' href='https://twitter.com/kaaanagawa'> <li> <p>Contact</p> </li> </a> </ul>";

$(document).on("contextmenu", function (e) {
  $(".context-menu").css({
    top: e.pageY,
    left: e.pageX,
    display: "block",
  });

  return false;
});

$(document).click(function (e) {
  if (e.which == 1) {
    $(".context-menu").hide();
  }
});

$(document).keydown(function (e) {
  if (e.which == 27) {
    $(".context-menu").hide();
  }
});

// function nodroit() {
//   return false;
// }

// document.oncontextmenu = nodroit;
