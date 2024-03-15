/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

//Enlazamos una nueva variable a un elemento HTML con el id "button"
let button = document.getElementById("button");

//Evento onClick se convierte en un callback
button.onclick = function buttonHandler() {
  getRandomExcuse(who, action, what, when);
};

//Asignamos los arrays a variables
let who = ["The dog", "My grandma", "His turtle", "My bird"];
let action = ["ate", "peed", "crushed", "broke"];
let what = ["my homework", "the keys", "the car"];
let when = [
  "before the class",
  "right on time",
  "when I finished",
  "during my lunch",
  "while I was praying"
];

function getRandomExcuse(who, action, what, when) {
  // write your code here

  // Código reutilizable que puede adaptarse a cambios en los arrays
  let randomWho = who[Math.floor(Math.random() * who.length)];
  let randomAction = action[Math.floor(Math.random() * action.length)];
  let randomWhat = what[Math.floor(Math.random() * what.length)];
  let randomWhen = when[Math.floor(Math.random() * when.length)];

  let excuse = `"${randomWho} ${randomAction} ${randomWhat} ${randomWhen}."`;

  //Seleccionamos el elemento <p> excusa del HTML y lo modificamos
  document.getElementById("excuse").innerHTML = excuse;
}

//Modificado
window.onload = getRandomExcuse(who, action, what, when);
