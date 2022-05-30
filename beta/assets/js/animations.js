$(function () {
  $(window).on("scroll", function () {
    if ($(window).scrollTop() > 50) {
      $("header").addClass("active");
    } else {
      //remove the background property so it comes transparent again (defined in your css)
      $("header").removeClass("active");
    }
  });
});

// Original

$(".swipe-left")[0].addEventListener("click", () => {
  $(".swiper1").animate({ scrollLeft: "-=900" }, 675);
});

$(".swipe-right")[0].addEventListener("click", () => {
  $(".swiper1").animate({ scrollLeft: "+=900" }, 675);
  $(".swipe-left")[0].classList.remove("hidden");
});

// Top 10

$(".swipe-left")[1].addEventListener("click", () => {
  $(".swiper2").animate({ scrollLeft: "-=1400" }, 675);
});

$(".swipe-right")[1].addEventListener("click", () => {
  $(".swiper2").animate({ scrollLeft: "+=1400" }, 675);
  $(".swipe-left")[1].classList.remove("hidden");
});

// Shonen

$(".swipe-left")[2].addEventListener("click", () => {
  $(".swiper3").animate({ scrollLeft: "-=1400" }, 675);
});

$(".swipe-right")[2].addEventListener("click", () => {
  $(".swiper3").animate({ scrollLeft: "+=1400" }, 675);
  $(".swipe-left")[2].classList.remove("hidden");
});

// Shojo

$(".swipe-left")[3].addEventListener("click", () => {
  $(".swiper4").animate({ scrollLeft: "-=1400" }, 675);
});

$(".swipe-right")[3].addEventListener("click", () => {
  $(".swiper4").animate({ scrollLeft: "+=1400" }, 675);
  $(".swipe-left")[3].classList.remove("hidden");
});

// Seinen

$(".swipe-left")[4].addEventListener("click", () => {
  $(".swiper5").animate({ scrollLeft: "-=1400" }, 675);
});

$(".swipe-right")[4].addEventListener("click", () => {
  $(".swiper5").animate({ scrollLeft: "+=1400" }, 675);
  $(".swipe-left")[4].classList.remove("hidden");
});

// $(".card")[0].addEventListener("mouseover", () => {
//   $(".swiper").css("overflow-x", "clip")
// })

// $(".swipe-left")[1].addEventListener("mouseover", () => {
//   $(".swiper").css("overflow-x", "scroll")
// })

// $(".swipe-right")[1].addEventListener("mouseover", () => {
//   $(".swiper").css("overflow-x", "scroll")
// })

$("img").attr("draggable", false);

let searchBar = $("#searchbar")[0],
  magnifier = $("#magnifier")[0];

searchBar.addEventListener("click", () => {
  $("#magnifier").attr("name", "close-outline");
  magnifier.style.display = "block";
});

document.addEventListener("click", function (event) {
  var isClickInsideElement = searchBar.contains(event.target);
  if (isClickInsideElement) {
    $("#magnifier").attr("name", "close-outline");
  } else {
    $("#magnifier").attr("name", "search-outline");
  }
});

magnifier.addEventListener("click", () => {
  searchBar.focus();
  searchBar.value = "";
});

if (window.innerWidth > 1365) {
  $(".video-background")[0].innerHTML =
    "<video src='home-temp.webm' id='videobackground' autoplay loop mute></video>";
  if ($("#videobackground")[0].readyState === 4) {
    $("#videobackground")[0].play();
  }
} else if (window.innerWidth < 605) {
  magnifier.addEventListener("click", () => {
    searchBar.classList.toggle("search");
    magnifier.classList.toggle("search");
    $("header")[0].classList.toggle("search");
  });
}
