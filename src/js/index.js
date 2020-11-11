import "../scss/main.scss";

// uncomment the lines below to enable PWA
import { registerSW } from "./pwa.js";
registerSW();

/* place your code below */

const add = document.querySelector(".add--js");
const delete = document.querySelector(".delete--js");
const counter = document.querySelector('.counter--js');