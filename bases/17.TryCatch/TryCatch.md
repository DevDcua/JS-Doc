# Try...Catch

Es una estructura en JavaScript que nos permite manejar errores de manera controlada durante la ejecución del código. Permite intentar ejecutar un bloque de código y capturar cualquier error que ocurra dentro de ese bloque, permitiendo así que el programa continúe ejecutándose en lugar de detenerse abruptamente por un error.

## Estructura básica

La estructura básica de `try...catch` se ve así:

```
try {
  // Bloque de código que puede lanzar un error
  // Intenta ejecutar este código
} catch (error) {
  // Captura cualquier error que ocurra en el bloque try
  // y maneja el error aquí
}
```

## Funcionamiento

El bloque `try` contiene el código que se quiere ejecutar. Si ocurre un error dentro de este bloque, el control se transfiere inmediatamente al bloque `catch`.

Si no se produce ningún error en el bloque `try`, el bloque `catch` se omite y el flujo de control continúa después del bloque `try`.

El objeto `error` (o cualquier otro objeto lanzado como error) está disponible en el bloque `catch` y proporciona información sobre el error que ocurrió.

### Ejemplo:

```
function dividir(a, b) {
  try {
    if (b === 0) {
      throw new Error("No es posible dividir por cero.");
    }
    return a / b;
  } catch (error) {
    console.log("Error:", error.message);
    return undefined;
  }
}

console.log(dividir(10, 2)); // Resultado: 5

console.log(dividir(8, 0));  
// Error: No es posible dividir por cero. Resultado: undefined
```

En este ejemplo, la función `dividir` intenta dividir `a` entre `b`. Si `b` es cero, se lanza un error utilizando `throw new Error()` dentro del bloque `try`. El error se captura en el bloque `catch`, donde se muestra un mensaje y se devuelve `undefined`.

### Ejemplo 2:

```
const persona = {
  nombre: "Juan",
  edad: 30
};

try {
  console.log(persona.direccion);
} catch (error) {
  console.log("Error:", error.message);
}

// Resultado: Error: persona.direccion is undefined
```

En este ejemplo, intentamos acceder a la propiedad `direccion` de `persona`, que no está definida. Esto provocará un error que será capturado por el bloque `catch`, mostrando un mensaje informativo.