//* Escape de carácter

// let frase = "We are the so-called "Vikings" from the north"; //! Esto genera un error. 

let frase = "We are the so-called \"Vikings\" from the north.";

console.log(frase); 

//?Resultado: 
//We are the so-called "Vikings" from the north.

let prueba = "\tEsta es la primera linea\nY esta es la segunda"

console.log(prueba);

//?Resultado:
//  Esta es la primera linea
//Y esta es la segunda

//--------------------------------------------

//* Métodos de los Strings

let saludo = "Hola JavaScript";
let saludoTradicional = "Hola Mundo";


//* .length

console.log( saludo.length ); //Resultado: 15

//* .charAt()

console.log( saludo.charAt(0) ); //Resultado: H

//* .charCodeAt()

console.log( saludo.charCodeAt(0) ); //Resultado: H

//* .at()

console.log( saludo.at(0) ); //Resultado: H

//* .concat()

console.log( saludo.concat(" ", saludoTradicional) );

//Resultado: Hola JavaScript Hola Mundo

console.log( saludo + " " + saludoTradicional );

//Resultado: Hola JavaScript Hola Mundo

console.log( `${saludo} ${saludoTradicional}` )

//Resultado: Hola JavaScript Hola Mundo

//* .indexOf()

console.log( saludoTradicional.indexOf("mundo") );

//Resultado: -1

console.log( saludoTradicional.indexOf("Mundo") ); 

//Resultado: 5


//* .lastIndexOf()

console.log( saludoTradicional.lastIndexOf("Hola") ); 

//Resultado: 5


//* .includes()

console.log( saludo.includes("JavaScript") );

//Resultado: true

console.log( saludo.includes("javascript") ); 

//Resultado: false

console.log( saludo.includes("Hola", 5) ); 

//Resultado: false


//* .slice()

let parteCortada = saludo.slice(0,4);

console.log( parteCortada );

//Resultado: "Hola"

parteCortada = saludo.slice(5);

console.log( parteCortada ); 

//Resultado: "JavaScript"

parteCortada = saludo.slice(-6);

console.log( parteCortada ); //Resultado: "JavaScript"

//* .substring()

parteCortada = saludo.substring(0,4);

console.log( parteCortada ); //Resultado: "Hola"

parteCortada = saludo.substring(4,2);

console.log( parteCortada ); //Resultado: "la"


//* .toUpperCase()

console.log( saludo.toUpperCase() );

//Resultado: "HOLA JAVASCRIPT"

//* .toLowerCase()

console.log( saludo.toLowerCase() );

//Resultado: "hola javascript"


//* .trim()

let pruebaTrim  = "      Tengo espacios a ambos lados         ";

console.log( pruebaTrim.trim() ) 

//Resultado: "Tengo espacios a ambos lados"


//* .trimStart()

console.log( pruebaTrim.trimStart() ) 

//Resultado: "Tengo espacios a ambos lados         "

//* .trimEnd()

console.log( pruebaTrim.trimEnd() ) 

//Resultado: "      Tengo espacios a ambos lados"


//* .padStart()

console.log( saludo.padStart(20, "-") );

//Resultado: "-----Hola JavaScript"

console.log( saludo.padStart(15, "-") ); 

//Resultado: "Hola JavaScript"


//* .padEnd()

console.log( saludo.padEnd(20, "-") ); 

//Resultado: "Hola JavaScript-----"


//* .repeat()
let repeticion = "Repetir ";

console.log( repeticion.repeat(3) ); 

//Resultado: "Repetir Repetir Repetir "

//* .replace()

console.log( saludo.replace("JavaScript", "Amigo") ); 

//Respuesta: "Hola Amigo"


//* .replaceAll()

let reemplazo = "Hola mundo mundo";

console.log( reemplazo.replaceAll("mundo", "javascript") ); 

//Resultado: "Hola javascript javascript" 


//* .split()

console.log( saludoTradicional.split(" ") );

// Resultado: ['Hola', 'Mundo'];

