let searchBar = $("#searchbar")[0];
let animeListContentX = document.getElementsByClassName("anime-list");
let eraseSearchbar = $("#eraseSearchbar")[0];

searchBar.addEventListener("keyup", () => {
  let searchbarContent = searchBar.value;
  searchbarContent = searchbarContent.toLowerCase();

  for (i = 0; i < animeListContentX.length; i++) {
    if (!animeListContentX[i].innerHTML.toLowerCase().includes(searchbarContent)) {
      animeListContentX[i].style.display = "none";
    } else {
      animeListContentX[i].style.display = "flex";
      // $(".anime-list-hidden").addClass("anime-list-hidden-display");
    }
  }
});

let animeListContainer = $("#anime-list")[0];

animeListContainer.innerHTML =
  "<a href='/VoirAnimes/assassination-classroom/'><li class='anime-list'>Assassination Classroom</li></a><a href='/VoirAnimes/black-clover/'><li class='anime-list'>Black Clover</li></a><a href='/VoirAnimes/blend-s/'><li class='anime-list'>Blend S</li></a><a href='/VoirAnimes/demon-slayer/'><li class='anime-list'>Demon Slayer</li></a> <a href='/VoirAnimes/dr-stone/'><li class='anime-list'>Dr. Stone</li></a> <a href='/VoirAnimes/haikyu/'><li class='anime-list'>Haikyu!!</li></a> <a href='/VoirAnimes/horimiya/'><li class='anime-list'>Horimiya</li></a> <a href='/VoirAnimes/hunter-x-hunter/'><li class='anime-list'>Hunter × Hunter</li></a> <a href='/VoirAnimes/initial-d/'><li class='anime-list'>Initial D</li></a> <a href='/VoirAnimes/jojos-bizarre-adventure/'><li class='anime-list'>Jojo's Bizarre Adventure</li></a> <a href='/VoirAnimes/jujutsu-kaisen/'><li class='anime-list'>Jujutsu Kaisen</li></a> <a href='/VoirAnimes/my-hero-academia/'><li class='anime-list'>My Hero Academia</li></a> <a href='/VoirAnimes/naruto/'><li class='anime-list'>Naruto</li></a> <a href='/VoirAnimes/one-piece/'><li class='anime-list'>One Piece</li></a> <a href='/VoirAnimes/shingeki-no-kyojin/'><li class='anime-list'>Shingeki No Kyojin</li></a> <a href='/VoirAnimes/spy-x-family/'><li class='anime-list'>Spy × Family</li></a> <a href='/VoirAnimes/vinland-saga/'><li class='anime-list'>Vinland Saga</li></a> <a href='/VoirAnimes/legals.html'><li class='anime-list'>Mentions Légales</li></a> <a href='https://twitter.com/kaangw' target='_blank' rel='nofollow'><li class='anime-list'>Contact</li></a>";

searchBar.addEventListener("click", () => {
  animeListContainer.style.display = "block";
  $(".anime-list").css("display", "flex");
});

document.addEventListener("click", function (event) {
  var isClickInsideElement = searchBar.contains(event.target);
  if (!isClickInsideElement) {
    animeListContainer.style.display = "none";
    eraseSearchbar.style.opacity = "0";
    eraseSearchbar.style.zIndex = "-1";
  }
});

searchBar.addEventListener("click", () => {
  eraseSearchbar.style.opacity = "100";
  eraseSearchbar.style.zIndex = "1";
});

eraseSearchbar.addEventListener("click", () => {
  searchBar.value = "";
});
