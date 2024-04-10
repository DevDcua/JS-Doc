# Tipos de Datos

En JavaScript, los tipos de datos se refieren a los diferentes tipos de valores que pueden ser utilizados y manipulados en un programa. Los tipos de datos más utilizados se dividen en datos primitivos y complejos (no primitivos).

## Tipos de datos primitivos:

* **Number (Número)**: Representa valores númericos, ya sean enteros o decimales. Ejemplo: `3`, `3.14`, `-5`, `2.5`.
* **String (Cadena de texto)**: Representa una secuencia de caracteres. Pueden ser definidas utilizando comillas simples (' ') o dobles (" "). Ejemplos: `'Hola'`, `"Mundo"`.
* **Boolean (Booleano)**: Representa un valor lógico verdadero o falso. Puede ser `true` o `false`.
* **Undefined**: Representa una variable que no ha sido inicializada y no tiene un valor asignado.
* **Null (Nulo)**: Representa la ausencia intencional de cualquier valor o valor nulo.
* **Symbol (Símbolo)**: Introducido en ECMAScript 6, representa un identificador único (se verán al detalle más adelante).

## Tipos de datos complejos (no primitivos):
* **Object (Objecto)**: Representa una colección de pares clave-valor. Los objetos pueden contener métodos y propiedades (se verán al detalle más adelante). Ejemplo: `{nombre: 'Juan', edad: 30}`.
* **Array (Arreglo)**: Representa una colección ordenada de elementos. Cada elemento puede ser de cualquier tipo de datos, incluyendo otros arreglos (se verán al detalle más adelante). Ejemplo: `[1,2,3,4]`.
* **Function (Función)**: Representa un bloque de código reutilizable que puede ser llamado para ejecutar una tarea específica (se verán al detalle más adelante).

----

### Coerción de tipos:

En JavaScript, los tipos de datos pueden ser convertidos implícitamente o explícitamente de un tipo a otro. Esto se conoce como coerción de tipos. Por ejemplo, puedes concatenar un número con una cadena de caracteres, y JavaScript automáticamente convertirá el número en una cadena para realizar la concatenación.

### Comprobación de tipos:

Puedes comprobar el tipo de dato de una variable utilizando `typeof`. Este devuelve una cadena que indica a que tipo de dato corresponde.
