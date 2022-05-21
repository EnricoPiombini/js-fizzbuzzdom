// Dichiaro la variabile con cui identifico il div in cui andrò a inserire i valori 
const boxHtml = document.querySelector(".box");






console.log(boxHtml);

let testo = "";



// //Genero il loop
for (let i = 1; i <= 100; i++) {
    if (i % 15 === 0) {


        testo = 'FizzBuzz';
        console.log("FizzBuzz")
    }
    else if (i % 3 === 0) {


        testo = 'Fizz';
        console.log("Fizz");
    }
    else if (i % 5 === 0) {


        testo = 'Buzz';
        console.log("Buzz");
    }
    else {


        testo = i
        console.log(i);
    }

    boxHtml.innerHTML += `<div class= "smallBox">${testo}</div>  `

};

