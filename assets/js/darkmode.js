let darkMode = localStorage.getItem("darkMode");

const darkModeToggle = $("#buttondarkmode")[0];
const theme = $("#darkmodestylesheet")[0];

const enableDarkMode = () => {
  theme.href = "/VoirAnimes/assets/css/light.css";
  darkModeToggle.setAttribute("name", "contrast");
  localStorage.setItem("darkMode", "enabled");
};

const disableDarkMode = () => {
  theme.href = "/VoirAnimes/assets/css/dark.css";
  darkModeToggle.setAttribute("name", "contrast-outline");
  localStorage.setItem("darkMode", null);
};

if (darkMode === "enabled") {
  enableDarkMode();
}

darkModeToggle.addEventListener("click", () => {
  darkMode = localStorage.getItem("darkMode");
  if (darkMode !== "enabled") {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
});

document.addEventListener("click", function handleClickOutsideBox(event) {
  if (darkModeToggle.contains(event.target)) {
    darkModeToggle.classList.toggle("opened-panel-button");
  } else if (!darkModeToggle.contains(event.target)) {
    darkModeToggle.classList.remove("opened-panel-button");
  }
});
