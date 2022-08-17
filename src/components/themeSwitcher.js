import { DOM } from "../utils/globals.js";

// theme switcher
const getPreference = () => {
  if (localStorage.getItem("theme")) return localStorage.getItem("theme");
  else
    return window.matchMedia("(prefer-color-scheme: dark)").matches
      ? "dark"
      : "light";
};

let theme = getPreference();

export const handleChangeInDom = () => {
  document.firstElementChild.setAttribute("data-theme", theme);
  DOM.themeToggler?.setAttribute("aria-label", theme);
};

const setPreference = () => {
  localStorage.setItem("theme", theme);
  handleChangeInDom();
};

export const handleClick = () => {
  theme = theme === "light" ? "dark" : "light";
  setPreference();
};
