# Modulos

Los módulos en JavaScript son una forma de organizar y estructurar el código en aplicaciones más grandes al dividirlo en piezas más pequeñas y reutilizables. El estándar moderno para trabajar con módulos en JavaScript es el sistema de módulos ES (ECMAScript Modules). A partir de ES6 (ECMAScript 2015), JavaScript incorporó soporte nativo para módulos, lo que permitió una forma estándar de importar y exportar funciones, objetos y datos entre archivos.

## Conceptos Básicos

### Exportar desde un Módulo

Para hacer que ciertos datos o funciones estén disponibles fuera de un módulo, utilizamos la palabra clave `export`.

```
// En un archivo llamado export.js
export const sum = (a, b) => a + b;
export const PI = 3.14159;
```

### Importar en otro Módulo

Para utilizar lo que hemos exportado desde otro módulo, utilizamos la palabra clave `import`.

```
// En otro archivo
import { sum} from './export.js';

console.log(sum(1, 2)); // Resultado 3
```

### Exportar e Importar por Defecto

También podemos exportar e importar un valor por defecto desde un módulo.

```
// En un archivo llamado export.js

const capitalize = (str) => str.toUpperCase();
export default capitalize;
```

```
// En otro archivo
import capitalize from './export.js';

console.log(capitalize('hello')); // Resultado: "HELLO"
```

## Conceptos Intermedios

### Exportar todo como un Alias

Puedes exportar todas las funciones y objetos de un módulo usando `export *`.

```
// En un archivo llamado export.js

export const multiply = (a, b) => a * b;
export const divide = (a, b) => a / b;
```

```
// En otro archivo
import * as funciones from './export.js';

console.log(funciones.multiply(5, 2)); // Resultado: 10
```


### Renombrar Elementos al Importar

Puedes renombrar elementos al importarlos para evitar conflictos de nombres.

```
// En otro archivo
import { PI as constantePI } from './export.js';

console.log(constantePI); // Resultado: 3.14159
```


## Conceptos Avanzados

### Ciclo de Vida de la importación

Los módulos de JavaScript se cargan y ejecutan de manera diferida, lo que significa que el código dentro de un módulo no se ejecuta hasta que se importa explícitamente.

### Importación Dinámica

La importación dinámica permite cargar módulos de forma asíncrona en tiempo de ejecución.

```
// Ejemplo de importación dinámica

const moduleSpecifier = './path/to/module.js';

import(moduleSpecifier)
  .then(module => {
    // utilizar el módulo importado
  })
  .catch(error => {
    // manejar errores de importación
  });
```
