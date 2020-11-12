import "../scss/main.scss";

// uncomment the lines below to enable PWA
import { registerSW } from "./pwa.js";
registerSW();

/* place your code below */

const add = document.querySelector(".add--js");

const deleted = document.querySelector(".delete--js");

const counter = document.querySelector(".counter--js");

const key = new Date().toISOString().slice(0, 10);

localStorage.setItem("date", key);

console.log(localStorage.getItem("date"));

let i = 0;

add.addEventListener("click", () => {
  i = i + 1;
  counter.innerHTML = i;
});

deleted.addEventListener("click", () => {
  if(i>0){
  i = i - 1;
  counter.innerHTML = i;}
});
