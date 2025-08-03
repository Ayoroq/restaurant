import addContents from "./homepage.js"
import changeToMenu from "./menu.js"
import changeToAbout from "./about.js"
import "./styles.css";

const menu = document.querySelector(".menu");
const home = document.querySelector(".home");
const about = document.querySelector(".about");
const contact = document.querySelector(".contact");

window.addEventListener("DOMContentLoaded", addContents);
menu.addEventListener("click", changeToMenu);
home.addEventListener("click", addContents);
about.addEventListener("click", changeToAbout);

console.log('Ayo')