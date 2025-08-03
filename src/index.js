import addContents from "./homepage.js"
import changeToMenu from "./menu.js"
import "./styles.css";

const menu = document.querySelector(".menu");
const home = document.querySelector(".home");

window.addEventListener("DOMContentLoaded", addContents);
menu.addEventListener("click", changeToMenu);
home.addEventListener("click", addContents);

console.log('Ayo')