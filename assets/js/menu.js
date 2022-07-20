let leftmenu = $("#leftmenu")[0];

leftmenu.innerHTML =
  "<div class='logo-container'><a href='/' class='logo-container'><div class='logo'><img src='/VoirAnimes/assets/images/favicon.webp' alt='Logo' /></div><p>VoirAnimes</p></a><ion-icon name='close-outline' id='close-leftmenu'></ion-icon></div><div id='leftmenu-center'><section id='leftmenu-center-1'> <a href='/'> <ion-icon name='home-outline'></ion-icon>Accueil</a><a href='../../'><ion-icon name='arrow-back-outline'></ion-icon>Retour</a></section><section id='leftmenu-center-2'><a href='/VoirAnimes/ao-no-exorcist/'>Ao No Exorcist</a><a href='/VoirAnimes/assassination-classroom/'>Assassination Classroom</a><a href='/VoirAnimes/berserk/'>Berserk</a><a href='/VoirAnimes/black-clover/'>Black Clover</a><a href='/VoirAnimes/blend-s/'>Blend S</a><a href='/VoirAnimes/demon-slayer/'>Demon Slayer</a><a href='/VoirAnimes/dr-stone/'>Dr. Stone</a><a href='/VoirAnimes/fire-force/'>Fire Force</a><a href='/VoirAnimes/great-teacher-onizuka/'>Great Teacher Onizuka</a><a href='/VoirAnimes/haikyu/'>Haikyu</a><a href='/VoirAnimes/horimiya/'>Horimiya </a><a href='/VoirAnimes/hunter-x-hunter/'>Hunter × Hunter</a><a href='/VoirAnimes/initial-d/'>Initial D</a><a href='/VoirAnimes/jojos-bizarre-adventure/'>Jojo's Bizarre Adventure </a><a href='/VoirAnimes/jujutsu-kaisen/'>Jujutsu Kaisen</a><a href='/VoirAnimes/my-dress-up-darling/'>My Dress-Up Darling</a><a href='/VoirAnimes/my-hero-academia/'>My Hero Academia</a><a href='/VoirAnimes/neon-genesis-evangelion/'>Neon Genesis Evangelion</a><a href='/VoirAnimes/naruto/'>Naruto</a><a href='/VoirAnimes/one-piece/'>One Piece </a><a href='/VoirAnimes/shingeki-no-kyojin/'>Shingeki No Kyojin</a><a href='/VoirAnimes/spy-x-family/'>Spy × Family</a><a href='/VoirAnimes/vinland-saga/'>Vinland Saga</a></section><div class='line'></div><section id='leftmenu-center-3'><a href='/legals.html'><ion-icon name='information-circle-outline'></ion-icon>Mentions Légales</a><a href='https://twitter.com/kaangw' target='_blank' rel='nofollow'><ion-icon name='logo-twitter'></ion-icon>Contact </a></section></div><div class='line'></div><div id='alternative-sites'><a href='https://mega.nz/folder/QsYEGLKC#PxSU43LJ_ddAb2KhgET5OQ' target='_blank' rel='nofollow'><button>Mangas</button></a><a href='https://mega.nz/folder/XZ8n0QSA#hTTi6m3xdE6_rkRNpkxSdQ' target='_blank' rel='nofollow'><button>Openings</button></a></div></div>";

let leftmenuOpen = $("#open-leftmenu")[0];
let leftmenuClose = $("#close-leftmenu")[0];
let leftmenuEmpty = $("#leftmenu-empty")[0];
let leftmenuContainer = $("#leftmenu-container")[0];

leftmenuClose.addEventListener("click", () => {
  document.body.style.overflowY = "unset";
  leftmenu.style.transform = "translateX(-500px)";
  setTimeout(function () {
    leftmenuContainer.style.opacity = "0";
    leftmenuContainer.style.zIndex = "-1";
  }, 300);
});

leftmenuEmpty.addEventListener("click", () => {
  document.body.style.overflowY = "unset";
  leftmenu.style.transform = "translateX(-500px)";
  setTimeout(function () {
    leftmenuContainer.style.opacity = "0";
    leftmenuContainer.style.zIndex = "-1";
  }, 300);
});

leftmenuOpen.addEventListener("click", () => {
  document.body.style.overflowY = "hidden";
  leftmenuContainer.style.zIndex = "12";
  leftmenuContainer.style.opacity = "100";
  setTimeout(function () {
    leftmenu.style.transform = "translateX(0)";
  }, 100);
});
