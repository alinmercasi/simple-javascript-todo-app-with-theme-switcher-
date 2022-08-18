import { DOM } from "../utils/globals.js";

// theme switcher
const getUserPreference = () => {
  // check to see if there are settings for this app saved in local storage
  if (localStorage.getItem("theme")) return localStorage.getItem("theme");
  // get system settings
  else
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
};

let theme = getUserPreference();

export const handleChangeInDom = () => {
  document.firstElementChild.setAttribute("data-theme", theme);
  DOM.themeToggler?.setAttribute("aria-label", theme);
};

const setPreference = () => {
  localStorage.setItem("theme", theme);
  handleChangeInDom();
};

export const changeTheme = () => {
  theme = theme === "light" ? "dark" : "light";
  setPreference();
};
