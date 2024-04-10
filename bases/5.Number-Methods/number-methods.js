//* isFinite()

console.log( Number.isFinite( 10 ) ); //Devuelve true

console.log( Number.isFinite( Infinity ) ); //Devuelve false


//* .isInteger()

console.log( Number.isInteger(5) ); //Devuelve true

console.log( Number.isInteger(5.5) ); //Devuelve false


//* .isNaN()

console.log( Number.isNaN(10) ); //Devuelve false

console.log( Number.isNaN("Soy un string") ); //Devuelve true

//* .parseFloat()

console.log( Number.parseFloat( "3.14" ) ); //Devuelve 3.14

//* .parseInt()

console.log( Number.parseFloat( "3" ) ); //Devuelve 3


//* .toFixed()

let num = 3.14159;

console.log( num.toFixed(2) ); //Devuelve: "3.14"

//* .toPrecision()

let num2 = 123.456;

console.log( num2.toPrecision(4) ); //Devuelve: "123.5"


//* .toString()

let num3 = 255;

console.log( num3.toString(2) ); // Devuelve 


//* .MAX_VALUE
//* .MIN_VALUE

console.log(Number.MAX_VALUE); 
// Devuelve 1.7976931348623157e+308

console.log(Number.MIN_VALUE); 
// Devuelve 5e-324 (número positivo más pequeño)

//* .NaN

console.log(Number.NaN); // Devuelve NaN (Not a Number)

//* .POSITIVE_INFINITY
//* .NEGATIVE_INFINITY

console.log(Number.POSITIVE_INFINITY); 
// Devuelve infinito positivo

console.log(Number.NEGATIVE_INFINITY); 
// Devuelve infinito negativo

//* .EPSILON

console.log(Number.EPSILON);
// Devuelve 2.220446049250313e-16