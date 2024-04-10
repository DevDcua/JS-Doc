# Objetos

## Introducción

Los objetos en JavaScript son fundamentales para presentar y organizar datos en forma de pares clave-valor. son una de las estructuras de datos más importantes en JavaScript y se utilizan ampliamente en el desarrollo de aplicaciones web y en programación en general. 

Un objeto en JavaScript es una colección de datos y funcionalidades relacionadas, agrupadas como pares clave-valor. Cada valor en un objeto puede ser cualquier tipo de datos, incluyendo otros objetos, funciones y arreglos. Los objetos en JavaScript son instancias de prototipos, lo que significa que heredan propiedades y métodos de otros objetos.

En JavaScript, los objetos se definen utilizando llaves (`{ }`) para delimitar un bloque de código que contiene las propiedades y métodos del objeto. Las propiedades se definen como pares clave-valor, donde la clave (o nombre de la propiedad) es una cadena (o símbolo desde ES6) que identifica la propiedad, y el valor puede ser cualquier tipo de dato válido en JavaScript.

Ejemplo de Sintaxis:

```
// Definición de un objeto "persona"
let persona = {
    nombre: "Agustin",
    edad: 25,
    ciudad: "Montevideo",
    esEstudiante: true,
    saludar: function(){
        console.log(`Hola! Mi nombre es ${this.nombre}.`);
    }
};
```

Puedes acceder a las propiedades y métodos de un objeto utilizando la notación de puntos (`objeto.propiedad`) o la notación de corchetes (`objeto["propiedades"]`).

Ejemplo:

```
console.log(persona.nombre) // Acceso a la propiedad "nombre"

persona.saludar(); // Llamada al método "saludar" del objeto "persona".
```

----

### Objetos como Contenedores de Datos

Los objetos en JavaScript permiten organizar datos de forma estructurada y representar entidades del mundo real de manera más intuitiva. Puede crear objetos vacíos y luego añadir propiedades y métodos dinámicamente durante la ejecución del programa.

Ejemplo de Objeto Dinámico:

```
let libro = {}; // Objeto vacío

libro.titulo = "JavaScript: The Good Parts";
libro.autor = "Douglas Crockford";
libro.publicado = 2008;

console.log(libro) 

//Resultado { titulo: "JavaScript: The Good Parts", autor: "Douglas Crockford", publicado: 2008 }
```


### Herencia y Prototipos en Objetos

En JavaScript, los objetos pueden heredar propiedades y métodos de otros objetos mediante prototipos. Cada objeto tiene un prototipo (`__proto__`) que apunta a otro objeto.  
Si una propiedad o métodos no se encuentra en el objeto actual, JavaScript buscará en el prototipo hasta llegar al objeto base (`Object.prototype`).

Ejemplo de Herencia mediante Prototipos:

```
// Definición de un objeto "animal" como prototipo

let animal = {
    tipo: "Desconocido",
    sonido: function(){
        consola.log("Hace un sonido desconocido.");
    }
};

// Definición de un objeto "perro" que hereda de "animal".

let perro = Object.create(animal);

perro.raza = "Labrador";
perro.sonido = function(){
    console.log("Guau! Guau!");
};

console.log(perro.tipo); //Resultado: "Desconocido" 
perro.sonido(); // Resultado: "Guau! Guau!"


```

### this

El uso de `this` dentro de los objetos en JavaScript es fundamentalmente para referirse al contexto del objeto actual en el que se está ejecutnado el código. La palabra clave `this` se refiere dinámicamente al objeto que está siendo utilizado o invocado en un momento dado. El comportamiento de `this` puede variar dependiendo de cómo se llama una función o método dentro del objeto.

Dentro de un método de un objeto, la palabra clave `this` se refiere al objeto que posee el método en el momento en que se invoca. En otras palabras, `this` hace referencia al contexto del objeto actual en el que se está ejecutando el código.

Ejemplo de Uso de `this`:

```

let trabajador = {
    nombre: "Juan",
    edad: 30,
    saludar: function(){
        console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`);
    }
};

trabajador.saludar(); // Resultado: "Hola, mi nombre es Juan y tengo 30 años."
```

En este ejemplo, dentro del método `saludar()` de `trabajador`, `this` se refiere al objeto `trabajador` mismo. Por lo tanto, `this.nombre` se traduce a `trabajador.nombre` y `this.edad` se traduce a `trabajador.edad`.

### Uso de `this` en Conextos Dinámicos

El valor de `this` puede cambiar dependiendo de cómo se invoca una función o método. Cuando una función se invoca directamente como una función independiente, `this` se refiere al objeto global (`windows` en el navegador, `global` en Node.js). Sin embargo, dentro de un método de un objeto, `this` apunta al objeto que contiene el método.

Ejemplo de Cambio de Contexto:

```
let nombre = "Ana"; // Variable global

let persona1 = {
  nombre: "Juan",
  saludar: function() {
    console.log(`Hola, mi nombre es ${this.nombre}.`);
  }
};

let saludarPersona = persona.saludar;
saludarPersona(); 

// Retorna: "Hola, mi nombre es Undefined." (this se refiere al objeto global, no a persona)

```

En el ejemplo mencionado, `this.nombre` devolverá `undefined` cuando se llama `saludarPersona()` porque `this` se refiere al objeto global (en este caso, `windows`). La variable  `nombre` declarada con `let` está fuera del alcance de `saludarPersona`, por lo que `this.nombre` no puede acceder al valor `nombre` en este contexto.

Para evitar este problema y asegurarte de que `this` se refiera al objeto `persona1` dentro de `saludar`, puede usar `bind()` como en el siguiente ejemplo:

```
saludarPersona = persona1.saludar.bind(persona1);
saludarPersona(); 

// Retorna: "Hola, mi nombre es Juan."
```

## Métodos de Objetos

### `hasOwnProperty(prop)`

Devuelve `true` si el objeto tiene la propiedad especificada directamente en sí mismo(no heredada).

Ejemplo:

```
let persona2 = { nombre: "Juan", edad: 30 };
console.log(persona2.hasOwnProperty("nombre")); // Resultado: true
console.log(persona2.hasOwnProperty("toString")); // Resultado: false

```

### `toString()`

Devuelve una representación de cadena del objeto.

Ejemplo:

```
console.log(persona2.toString()); // Resultado: "[object Object]"
```

### `valueOf()`

Devuelve el valor primitivo del objeto.

```
console.log(persona2.valueOf()); // Resultado: {nombre: 'Juan', edad: 30}
```

### `Object.keys(obj)`

Devuelve un arreglo con las claves (nombres de propiedades) enumerables de un objeto.

Ejemplo:

```
console.log(Object.keys(persona2)); // Resultado: ["nombre", "edad"]
```

### `Object.values(obj)`

Devuelve un arreglo con los valores de las propiedades enumerables de un objeto.

```
console.log(Object.values(persona2)); // Resultado: ["Juan", 30]
```

### `Object.entries(obj)`

evuelve un arreglo de pares clave-valor (como subarreglos) de todas las propiedades enumerables de un objeto.

```
console.log(Object.entries(persona2)); 

// Resulta: [["nombre", "Juan"], ["edad", 30]]
```

### `Object.assign(target, source)`

Copia las propiedades enumerables de uno o más objetos de origen (`source`) al objeto destino (`target`).

```
let destino = {};
let fuente = { nombre: "Juan", edad: 30 };

Object.assign(destino, fuente);

console.log(destino); // Resultado: { nombre: "Juan", edad: 30 }
```

### `Object.freeze(obj)`

Congela un objeto, lo que impide agregar, eliminar o modificar sus propiedades existentes.

```
Object.freeze(persona);

persona.edad = 31; // No tiene efecto (en modo estricto, lanza un error)

console.log(persona); // Output: { nombre: "Juan", edad: 30 }
```


## Iteración con `for...in`

El bucle `for...in` se utiliza para iterar sobre las propiedades enumerables de un objeto. Durante cada iteración, el bucle asigna el nombre de cada propiedad del objeto a una variable definida por el usuario.

Sintaxis:

```
for (variable in objeto) {
  // Código a ejecutar en cada iteración
}
```

Ejemplo:

```
let persona3 = {
  nombre: "Juan",
  edad: 30,
  ciudad: "Madrid"
};

for (let propiedad in persona3) {
  console.log(propiedad + ": " + persona[propiedad]);
}
```