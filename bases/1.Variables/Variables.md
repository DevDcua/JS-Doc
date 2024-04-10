# Variables

## Conceptos básicos
Las variables son contenedores en donde guardamos valores.  
Llevándolo a un ejemplo cotidiano, una variable puede ser un frasco en donde guardamos azúcar o sal.

Esa variable puede tener características especifica. Siguiendo con el ejemplo del frasco, puede ser que el frasco sea unicamente para azúcar y nunca cambie, la otra opción seria que ese frasco pueda cambiar su contenido, por ejemplo pasar a tener sal en vez de azúcar.

### Tipos de Variables

Las variables en donde su contenido puede cambiar las vamos a conocer por la palabra clave "***let***", también hay otra opción que seria con la palabra clave "***var***", pero esta ultima no se recomienda utilizar en lo posible.
Las otras variables en donde su contenido siempre es el mismo, las vamos a visualizar con la palabra clave ***const***, en referencia a que es una constante.

### Sintaxis y reglas generales

La sintaxis básica seria la siguiente:  
`palabra_reservada nombre_variable = valor`

Respecto al nombre de la variable hay ciertas reglas que se deben seguir para evitar inconvenientes:  
* Comenzar con una `letra`, `$` o `_`: Los nombres de variables en JavaScript deben comenzar con una `letra`, signo `$` o `_`. No puede comenzar con números u otros caracteres.
* Sensibilidad a mayúsculas y minúsculas: JavaScript distingue entre mayúsculas y minúsculas, por ejemplo, si nuestra variable se llama `nombreCompleto` y tenemos otra que se llama `nombrecompleto`, estas dos variables, sus nombres son totalmente diferentes una de la otra para JavaScript.
* Usar camelCase: Se recomienda utilizar camelCase para nombrar variables en JavaScript. En camelCase, cuando se tiene mas de una palabra, la segunda y las que les siguen, su primera letra va en mayúsculas. Por ejemplo, `nombreCompleto`.
* Ser descriptivo y significativo: Los nombres de variables deben ser descriptivos y que los mismos reflejen el propósito o contenido. Por ejemplo: `cantidadDeEstudiantes`.
* Evitar nombres demasiados cortos o ambiguos: Es importante evitar nombres de variables que sean demasiado cortos, o que el mismo no transmita su propósito o significado. Por ejemplo, `x` o `dato`.
  
Teniendo en cuenta todo lo anterior, algunos ejemplos de variables pueden ser:  
`const iva = 0.22`  
`let nombreCompleto = "Lionel Andrés Messi Cuccittini"`  
`let isActive = false`

### Declarar variables

El crear una variable se le conoce como declarar una variable. Dependiendo del tipo de variables nos va a permitir declararlas de cierta formas.  

Las variables let y var se pueden declarar de las siguientes maneras:  

* Tradicional con valor definido:
  * `let nombreMarca = "KTM";` / `var patente = "XXX1232";`

* Sin valor inicial:
  * `let nombreMascota;` / `var nombrePropietario;`

Estas ultimas se pueden declarar sin un valor en particular, predeterminadamente como valor tendrían 'undefined', o sea, no definido.  

Estas variables que no le asignamos un valor inicial, posteriormente le vamos a poder asignar un valor.

Ejemplo: `let nombreMascota = "Rocco";` / `var nombrePropietario = "Agustín";`.

La variable con palabra clave const, tiene ciertas particularidades como habiamos hablado anteriormente.

La misma se declara de la forma tradicional

### let vs var

La palabra reservada var se utiliza hasta la llegada del ECMAScript 6 (también conocido como ES6 o ECMAScript 2015), donde fue que se agregaron la declaración de variables con let y const.  
Para entender un poco el motivo de que sea preferible utilizar let en comparación a var tenemos que hablar algo que se llamada 'Scope' o alcance. Van a existir terminos que no se han visto pero que van a cobrar mas sentido más adelante.

En el archivo `variables.js` se dejaran los ejemplos.
  
**var**
* Las variables declaradas con 'var' tienen un scope de función. Esto significa que están disponible dentro de la función en la que se declaran, independientemente de si la declaración ocurre dentro de un bloque de código (como un `if`, `for`, `while`, etc).
* Sin embargo, si se declara una variable var dentro de un bloque, esa variable estará disponible fuera del bloque, lo que se conoce como "hoisting". El valor de la variable será indefinido si se intenta acceder a ella antes de la declaración.

**let**
* Las variables declaradas con 'let' tienen un scope de bloque. Esto significa que están disponibles solo dentro del bloque de código en el que se declaran.
* Las variables let no están sujetas al "hoisting" como las variables var. Si intentas acceder a una variable let antes de su declaración, obtendrás un error.


### Bloque de código y Hoisting

Para aclarar ciertos terminos de la explicación anterior:

**Bloque de código**: Un bloque de código en JavaScript es simplemente un conjunto de sentencias encerradas entre llaves `{  }`. Estos bloques de código se utilizan para agrupar varias instrucciones juntas.  
  
**ejemplo:**    
```
//Comienza el bloque de código
{
    let x = 10;
    console.log(x);
} 
// Termina el bloque de código
```

**Hoisting**: El hoisting es un comportamiento en JavaScript en el que las declaraciones de variables y funciones se mueven al principio de su scope durante la fase de compilación, pero las asignaciones (valores) permanecen en su lugar. 

Esto significa que, aunque una variable o función se declare más adelante en el código, puede ser utilizada antes de su declaración sin causar un error. 

Sin embargo, es importante tener en cuenta que solo la declaración en sí se mueve hacia arriba, no la asignación. Por lo tanto, si intentas acceder a una variable antes de su declaración y asignación, su valor sera `undefined`.  

En el caso de las funciones, cuando la misma es declarada en JavaScript, tanto la declaración como su definición (el contenido interno de la función) son elevados al principio de su ámbito durante la fase de compilación. Esto significa que puedes llamar a la función antes de que aparezca en tu código y aún así acceder a su contenido interno.

``` 
console.log(x); // Resultado: undefined
var x = 10;
console.log(x); // Resultado: 10
```
Como habíamos hablado anteriormente las variables declaradas con var les afecta el hoisting, si fuera con let o const tendríamos el siguiente resultado:

```
console.log(r); // Error: No se puede acceder a 'r' antes de inicializarla.
let r = 10;
```

Ejemplo de Hoisting con funciones (las mismas se van a ver al detalle en otra sección):

```
decirHolaMundo(); // Resultado: "Hola, mundo!"

function decirHolaMundo() {
    let saludo = "Hola, mundo!"
    console.log(saludo);
}
```










