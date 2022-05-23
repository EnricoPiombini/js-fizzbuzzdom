// Dichiaro la variabile con cui identifico il div in cui andrò a inserire i valori 
const boxHtml = document.querySelector(".box");
console.log(boxHtml);
let testo = "";
let backColor = "";



//Genero il loop
for (let i = 1; i <= 100; i++) {
backColor = ("number");

    if (i % 15 === 0) {
        testo = 'FizzBuzz';
        backColor = ("fizzbuzz");


        console.log("FizzBuzz")
    }
    else if (i % 3 === 0) {
        testo = 'Fizz';
        backColor = ("fizz");
        console.log("Fizz");
    }
    else if (i % 5 === 0) {
        testo = 'Buzz';
        backColor = ("buzz");
        console.log("Buzz");
    }
    else {


        testo = i
        console.log(i);
    }

    boxHtml.innerHTML += `<div class="${backColor}">
    ${testo}</div> `

};





