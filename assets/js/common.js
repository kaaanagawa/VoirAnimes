$(".otherscontainer")[0].innerHTML =
  "<a href='/VoirAnimes/black-clover/'> <div class='object'> Black Clover </div> </a> <a href='/VoirAnimes/blend-s/'> <div class='object'> Blend S </div> </a> <a href='/VoirAnimes/demon-slayer/'> <div class='object'> Demon Slayer </div> </a> <a href='/VoirAnimes/dr-stone/'> <div class='object'> Dr. Stone </div> </a> <a href='/VoirAnimes/haikyu/'> <div class='object'> Haikyu!! </div> </a> <a href='/VoirAnimes/horimiya/'> <div class='object'> Horimiya </div> </a> <a href='/VoirAnimes/hunter-x-hunter/'> <div class='object'> Hunter × Hunter </div> </a> <a href='/VoirAnimes/initial-d/'> <div class='object'> Initial D </div> </a> <a href='/VoirAnimes/jojos-bizarre-adventure/'> <div class='object'> Jojo's Bizarre Adventure </div> </a> <a href='/VoirAnimes/jujutsu-kaisen/'> <div class='object'> Jujutsu Kaisen </div> </a> <a href='/VoirAnimes/my-hero-academia/'> <div class='object'> My Hero Academia </div> </a> <a href='/VoirAnimes/naruto/'> <div class='object'> Naruto </div> </a> <a href='/VoirAnimes/one-piece/'> <div class='object'> One Piece </div> </a> <a href='/VoirAnimes/shingeki-no-kyojin/'> <div class='object'> Shingeki No Kyojin </div> </a> <a href='/VoirAnimes/spy-x-family/'> <div class='object'> Spy × Family </div> </a> <a href='/VoirAnimes/vinland-saga/'> <div class='object'> Vinland Saga </div> </a>";

$("header")[0].innerHTML =
  "<div class='left'><ion-icon name='menu-outline' id='open-leftmenu'></ion-icon><a href='/VoirAnimes/' class='logo-container'><div class='logo'><img src='/VoirAnimes/assets/images/favicon.svg' alt='Logo' /></div><p>VoirAnimes</p> </a> </div> <div class='middle'> <div class='barcontainer'> <input id='searchbar' type='text' name='search' placeholder='Rechercher' autocomplete='off' /><ion-icon id='eraseSearchbar' name='close-outline'></ion-icon> <div class='barconfirm'> <ion-icon name='search-outline'></ion-icon> </div></div></div><nav><ion-icon id='apps' name='add-outline'></ion-icon><a href='https://twitter.com/kaangw' target='_blank' rel='noreferrer' id='contact' title='Contact Button'></a><label class='switch'><input type='checkbox'><span class='slider round'></span></label><ion-icon id='buttondarkmode' name='contrast-outline' title='Dark Mode Button'></ion-icon><ion-icon id='settings' name='settings-outline'></ion-icon></nav>";

$("#apps-container")[0].innerHTML = "<a href='https://mega.nz/folder/XZ8n0QSA#hTTi6m3xdE6_rkRNpkxSdQ' target='_blank' rel='nofollow'>Openings</a><a href='https://mega.nz/folder/QsYEGLKC#PxSU43LJ_ddAb2KhgET5OQ' target='_blank' rel='nofollow'>Mangas</a>";

document.addEventListener("click", function handleClickOutsideBox(event) {
  if ($("#apps")[0].contains(event.target)) {
    $("#apps-container")[0].classList.toggle("opened-panel");
    $("#apps")[0].classList.toggle("opened-panel-button");
  } else if (!$("#apps")[0].contains(event.target)) {
    $("#apps-container")[0].classList.remove("opened-panel");
    $("#apps")[0].classList.remove("opened-panel-button");
  }
});

document.addEventListener("click", function handleClickOutsideBox(event) {
  if ($("#settings")[0].contains(event.target)) {
    $("#settings-container")[0].classList.toggle("opened-panel");
    $("#settings")[0].classList.toggle("opened-panel-button");
  } else if (!$("#settings")[0].contains(event.target)) {
    $("#settings-container")[0].classList.remove("opened-panel");
    $("#settings")[0].classList.remove("opened-panel-button");
  }
});