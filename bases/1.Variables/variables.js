let w = 0;
var y = 0;


if(w === y){
    let w = 2;
    var y = "Ya no tengo valor 0"

    console.log(w, y); // Resultado: 2, "Ya no tengo valor 0"
}

console.log(w, y); // Resultado: 0, "Ya no tengo valor 0"


decirHolaMundo(); // Resultado: "Hola, mundo!"

function decirHolaMundo() {
    let saludo = "Hola, mundo!"
    console.log(saludo);
}


console.log(x); // Resultado: undefined
var x = 10;
console.log(x); // Resultado: 10


console.log(r); // Error: No se puede acceder a 'x' antes de inicializarla.
let r = 10;