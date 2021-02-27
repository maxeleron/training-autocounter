"use strict"

// UI elements
const counter = document.getElementById('timeCounter');
const secondInterval = document.getElementById('secondInterval');
const secondIntervalFloat = document.getElementById('secondIntervalFloat');
const startBtn = document.getElementById('startBtn');

//var a = setInterval(func, 4 * 1000);
let intervalExists = false;

function gg(){
    if(intervalExists) clearInterval(a);

    let a = setInterval(() => {counter.innerHTML = +counter.innerHTML + 1;},
    secondInterval.value * 1000 + secondIntervalFloat.nodeValue * 100);
    intervalExists = true;
}