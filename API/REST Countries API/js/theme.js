


function changeTheme() {
    if (theme == "dark") {
        setLightTheme();
  } else {
        setDarkTheme();
  }
};
function setDarkTheme() {
      const NAV_BAR = document.querySelector(".navbar");
      NAV_BAR.classList.replace("navbar-light", "navbar-dark");
      NAV_BAR.classList.replace("light-elements", "dark-elements");

      const THEME_ICON = document.querySelector("#theme-icon");
      THEME_ICON.classList.replace("fa-moon-o", "fa-sun-o");

      const THEME_TEXT = document.querySelector("#theme-text");
      THEME_TEXT.textContent = "Light Mode";

      const COLOR_BG = document.querySelectorAll(".light-bg");
      const COLOR_TEXT = document.querySelectorAll(".light-text");
      const COLOR_ELEMENTS = document.querySelectorAll(".light-elements");
      const COLOR_INPUTS = document.querySelectorAll(".light-input");

      NAV_BAR.classList.replace("navbar-light", "navbar-dark");

      COLOR_BG.forEach(element => {
            element.classList.replace("light-bg", "dark-bg");
      });
      COLOR_TEXT.forEach(element => {
            element.classList.replace("light-text", "dark-text");
      });
      COLOR_ELEMENTS.forEach(element => {
            element.classList.replace("light-elements", "dark-elements");
      });
      COLOR_INPUTS.forEach(element => {
            element.classList.replace("light-input", "dark-text");
            element.classList.replace("light-elements", "dark-elements");
      });
      theme = "dark";
};
function setLightTheme() {
      const NAV_BAR = document.querySelector(".navbar");
      NAV_BAR.classList.replace("navbar-dark", "navbar-light");
      NAV_BAR.classList.replace("dark-elements", "light-elements");

      const THEME_ICON = document.querySelector("#theme-icon");
      THEME_ICON.classList.replace("fa-sun-o", "fa-moon-o");

      const THEME_TEXT = document.querySelector("#theme-text");
      THEME_TEXT.textContent = "Dark Mode";

      const COLOR_BG = document.querySelectorAll(".dark-bg");
      const COLOR_TEXT = document.querySelectorAll(".dark-text")
      const COLOR_ELEMENTS = document.querySelectorAll(".dark-elements");
      const COLOR_INPUTS = document.querySelectorAll("input");

      COLOR_BG.forEach(element => {
            element.classList.replace("dark-bg", "light-bg");
      });
      COLOR_TEXT.forEach(element => {
            element.classList.replace("dark-text", "light-text");
      });
      COLOR_ELEMENTS.forEach(element => {
            element.classList.replace("dark-elements", "light-elements");
      });
      COLOR_INPUTS.forEach(element => {
            element.classList.replace("dark-text", "light-input");
      });
      theme = "light";
};

const BUTTON = document.querySelector("#theme-changer");
BUTTON.addEventListener("click", changeTheme)
