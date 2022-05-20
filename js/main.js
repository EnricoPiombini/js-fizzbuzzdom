// Dichiaro la variabile con cui identifico il div in cui andrò i inserire i valori 
const boxHtml = document.querySelector(".box");
console.log(boxHtml);

// Genero il loop
for(let i = 0; i <= 100; i++){
    if (i % 15 ===0) console.log("FizzBuzz");
    else if (i % 3 === 0) console.log("Fizz");
    else if (i % 5 === 0) console.log("Buzz");
    console.log(i);


}