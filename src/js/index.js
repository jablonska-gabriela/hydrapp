import "../scss/main.scss";

// uncomment the lines below to enable PWA
import { registerSW } from "./pwa.js";
registerSW();

/* place your code below */

const add = document.querySelector(".add--js");

const deleted = document.querySelector(".delete--js");

const counter = document.querySelector(".counter--js");

const key = new Date().toISOString().slice(0, 10);


let i = 0;

add.addEventListener("click", (e) => {
  e.preventDefault();
  i = i + 1;
  counter.innerHTML = i;
  localStorage.setItem(key,i);

});

deleted.addEventListener("click", (e) => {
  e.preventDefault();
  if(i>0){
  i = i - 1;
  counter.innerHTML = i;
  localStorage.setItem(key,i);
  }
});
const value=localStorage.getItem(key);
if(value) {
  counter.innerHTML=value;
  let j = counter.innerHTML;

add.addEventListener("click", (e) => {
  e.preventDefault();
  j++;
  counter.innerHTML = j;
  localStorage.setItem(key,j);

});

deleted.addEventListener("click", (e) => {
  e.preventDefault();
  if(j>0){
  j = j - 1;
  counter.innerHTML = j;
  localStorage.setItem(key,j);
  }
});
  
}
else{
  counter.innerHTML=0;
}