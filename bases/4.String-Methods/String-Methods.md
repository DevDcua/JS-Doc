# String / String Methods

Los string son usados para representar texto. Son escritos encerrando su contenido en comillas.

Estas pueden ser de tres tipos:  

* \`I'm Batman\`
* "Avengers Assemble!"
* 'I can do this all day'

Pueden usar comillas simples, comillas dobles, o comillas invertidas (backtick), siempre y cuando las comillas al principio y al final coincidan.

En los casos que necesitamos utilizar las comillas "" o simples '' dentro de un string, vamos a tener ciertos inconvenietes que hay que modificar para que puedan ser utilizadas. 

Por ejemplo: "We are the so-called "Vikings" from the north."  
Esto no seria posible ya que el string estaría cortado y quedaría "We are the so-called".

Para poder utilizar estas comillas dobles "" dentro de otras, tenemos que hacer algo que se llama escapar el carácter.

```
let frase = "We are the so-called \"Vikings\" from the north."
```

De esta forma podemos hacer que las doble comillas no interfieran con el cierre del string.

El carácter ( \\ ) indica que el carácter que le sigue tiene un significado especial. Una comilla que es precedida por una barra invertida no representará el final del string sino que formara parte del mismo.

Otra forma de poder incluir comillas dobles "" y simples '', es utilizando los backtick o comilla invertida ``. Dentro de esas comillas invertidas vamos a poder utilizar las comillas simples y dobles sin ningun problema, en caso de necesitar utilizar comillas invertidas dentro de comillas invertidas tendríamos que utilizar el escape de carácter.

```
let frase = `We are the so-called "Vikings" from the north`
```

También se utiliza `( \n )` para generar un salto de línea o también conocido Newline. Y `( \t )` para generar una tabulación.

```
let prueba = "\tEsta es la primera linea\nY esta es la segunda"
```

## String Methods

JavaScript ofrece una variedad de métodos integrados para trabajar con cadenas de texto, lo que facilita la manipulación y el procesamiento de datos de texto. Estos métodos permiten realizar tareas como la búsqueda, manipulación, extracción y modificación de cadenas de caracteres de manera eficiente.

Para los ejemplos de los métodos que vamos a ver utilizaremos las siguientes variables:
```
let saludo = "Hola JavaScript";
let saludoTradicional = "Hola Mundo";
```

### `.length`

Nos devuelve (con tipo de dato number) la cantidad de caracteres de un string. Tener en cuenta que los espacios entre palabras se cuentan como un carácter.

```
console.log( saludo.length ); //Resultado: 15
```


### `.charAt()` 

Devuelve el carácter en la posición especificada de una cadena. Teniendo en cuenta que las posiciones comienzan desde el valor 0.

```
console.log( saludo.charAt(0) ); //Resultado: H
```

### `.charCodeAt()`

Devuelve el código (de tipo number) del carácter en la posición especificada de una cadena. 

En el ejemplo siguiente el resultado sería 72 que es el valor Unicode para H

```
console.log( saludo.charCodeAt(0) ); //Resultado: 72
```

### `.at()`

Es introducido en ES2022, este método retorna el carácter en la posición especificada de una cadena. Este método esta soportado por todos los navegadores modernos desde Marzo 2022. A diferencia de charAt(), este método permite el uso de posiciones con valores negativos.

```
console.log( saludo.at(0) ); //Resultado: H
```

### `.concat()` - `+` - `Template String`

Combina dos o más cadenas y devuelve una nueva cadena.

```
console.log( saludo.concat(" ", saludoTradicional) );

//Resultado: Hola JavaScript Hola Mundo
```

Esto anterior también se podría hacer con el operador `+`, quedando de la siguiente forma:

```
console.log( saludo + " " + saludoTradicional );
```

La otra forma es con algo llamado template string, en donde usamos la siguiente sintaxis con comillas invertidas y dentro de ellas podemos usar `${}` para que dentro de esas llaves ingremos la variable:

```
console.log( `${saludo} ${saludoTradicional}` );
```

Cualquiera de las tres son formas validas de concatenar strings. La segunda forma con el operador +, dependiendo de la cantidad de string puede llegar a ser no recomendable por un tema de legibilidad. Los template strings ofrecen una sintaxis más legible y expresiva, lo que los hace una opción preferida en muchos casos.

### `.indexOf()`

Devuelve la posición de la primera ocurrencia de un valor especificado en una cadena. En caso de que el valor no sea encontrado va a retornar -1.

```
console.log( saludoTradicional.indexOf("mundo") ); //Resultado: -1 
```

Si bien la palabra mundo se encuentra en la variable saludoTradicional, el método hace una busqueda que es case sensitive o sea que respeta las mayúsculas y minúsculas.

```
console.log( saludoTradicional.indexOf("Mundo") ); //Resultado: 5
```

Haciendo el cambio por una M, ahora si nos da el resultado de que el string "Mundo" se encuentra por primera vez en la posicion 5


### `.lastIndexOf()`

Hace lo mismo que el indexOf() pero desde el final hacia el comienzo. También manteniendo lo de case sensitive y el -1 en caso de no encontrar resultado valido.

```
console.log( saludoTradicional.lastIndexOf("Hola") ); //Resultado: 0
```

### `.includes()`

Este método nos retorna un valor booleano, o sea, true o false dependiendo de si el string contiene el valor especificado.

```
console.log( saludo.includes("JavaScript") ); //Resultado: true
```

Este método también hace una comparación case sensitive.

```
console.log( saludo.includes("javascript") ); //Resultado: false
```

Se le puede pasar un segúndo parámetro para especificar a partir de donde se hace la búsqueda.

```
console.log( saludo.includes("Hola", 5) ); //Resultado: false
```

### `.slice()`

Extraé una parte del string y devuelve lo extraído en un nuevo string.  
El método tiene 2 parámetros: posición inicial, posición final (no se incluye la posición final). Además, la posición final debe ser superior a la inicial, de lo contrario devuelve un string vacío.

```
let parteCortada = saludo.slice(0,5);

console.log( parteCortada ); //Resultado: "Hola"
```

Si se omite el segúndo parámetro, el método va a cortar desde el inicio hasta el final.

```
parteCortada = saludo.slice(5);

console.log( parteCortada ); //Resultado: "JavaScript"
```

Si el parámetro es negativo, la posición es contada desde el final del string.

```
parteCortada = saludo.slice(-6);

console.log( parteCortada ); //Resultado: "Script"
```

Con valor -1 sería la "t", con valor -2 sería "pt", con valor -3 sería "ipt", y así sucesivamente.

### `.substring()`

Similar a slice(), pero este método no acepta valores negativos, y en caso de que se ingrese uno será tomado como 0.

En el slice() si se ingresaban los parámetros invertidos, retornaba un string vacio, en este caso substring() si el segundo parámetro es menor que el primer parámetro, ambos son intercabmiados automáticamente.

```
parteCortada = saludo.substring(0,4);

console.log( parteCortada ); //Resultado: "Hola"
```

```
parteCortada = saludo.substring(4,2);

console.log( parteCortada ); //Resultado: "la"
```

### `.toUpperCase()`

El string es convertido todo a mayúsculas

```
console.log( saludo.toUpperCase() ); //Resultado: "HOLA JAVASCRIPT"
```

### `.toLowerCase()`

El string es convertido todo a minúsculas

```
console.log( saludo.toLowerCase() ); //Resultado: "hola javascript"
```

### `.trim()`

Este método elimina los espacios en ambos lados del string.

```
let pruebaTrim  = "      Tengo espacios a ambos lados         "

console.log( pruebaTrim.trim() ) //Resultado: "Tengo espacios a ambos lados"
```

### `.trimStart()`

Este método elimina solo los espacios del inicio del string.

```
console.log( pruebaTrim.trimStart() ) 

//Resultado: "Tengo espacios a ambos lados         "
```

### `.trimEnd()`

Este método elimina solo los espacios del final del string.

```
console.log( pruebaTrim.trimEnd() ) 

//Resultado: "      Tengo espacios a ambos lados"
```

### `.padStart()`

El método agrega caracteres de relleno al principio de una cadena hasta que la cadena resultante alcanza la longitud especificada. Si la longitud de la cadena original es mayor o igual que la longitud especificada, el método no realiza ningún cambio en la cadena original.

El primer parárametro es la longitud y segundo es el carácter de relleno.

```
console.log( saludo.padStart(20, "-") ); //Resultado: "-----Hola JavaScript"
```

```
console.log( saludo.padStart(15, "-") ); //Resultado: "Hola JavaScript"
```

### `.padEnd()`

Funciona de manera similar al método padStart(), pero agrega carácteres de relleno al final de una cadena hasta que alcanza la longitud especificada.

```
console.log( saludo.padEnd(20, "-") ); //Resultado: "Hola JavaScript-----"
```

### `.repeat()`

El método se utiliza para crear y devolver una nueva cadena que consiste en la concatenación de la cadena original repetida un número determinado de veces.

```
let repeticion = "Repetir ";

console.log( repeticion.repeat(3) ); //Resultado: "Repetir Repetir Repetir "
```

### `.replace()`

El método busca un valor específico dentro de una cadena y lo reemplaza por otro valor.

El primer parámetro es el valor a buscar, y el segúndo parámetro es el valor de reemplazo.

```
console.log( saludo.replace("JavaScript", "Amigo") ); //Respuesta: "Hola Amigo"
```

### `.replaceAll()`

Similar a replace() pero reemplaza todas las ocurrencias del valor buscado en lugar de solo la primera.

```
let reemplazo = "Hola mundo mundo";

console.log( reemplazo.replaceAll("mundo", "javascript") ); 

//Resultado: "Hola javascript javascript" 
```

### `.split()`

El método divide una cadena en un array de subcadenas según un separador especificado y devuelve el nuevo array.

El primer parámetro es el separador y el segúndo el límite.

Si no se asigna un límite, se separa todo según lo especificado.

```
console.log( saludoTradicional.split(" ") );

Resultado: ['Hola', 'Mundo'];
```
