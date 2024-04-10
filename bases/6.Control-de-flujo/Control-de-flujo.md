# Control de Flujo

No todos los programas en una única dirección. A veces vamos a querer crear un camino que se vaya dividiendo según las necesidades. Esto se le llama ejecución condicional.


### IF ELSE
La ejecución condicional se crea con la palabra clave `if` en JavaScript. En el caso simple, queremos que se ejecute algún código si, y solo si, una cierta condición se cumple.

La palabra clave if ejecuta u omite una declaración dependiendo del valor de una expresión booleana. La expresión decisiva se escribe después de la palabra clave, entre paréntesis, seguida de la declaración a ejecutar.

En caso de tener multiples condiciones, las mismas se pueden ir agregando con la palabra clave `else if`, en caso de que la primera condición no se ejecute, va analizar la segunda condición y así sucesivamente.

En caso de que ninguna condición se cumpla y queremos ejecutar alguna instrucción si eso sucede, vamos a tener otra palabra clave que es `else`. 

La sintaxis quedaría algo así:

```
if ( condicion ) {

    //Instrucciones

}else if ( otra condicion ) { 

    //Instrucciones

}else {

    //Instrucciones

}
```

### SWITCH

A parte de la sentencia if else, también estaría la sentencia `switch`, se utiliza para evaluar una expresión y ejecutar el código correspondiente al caso que coincida con el valor de esa expresión.

Primero, se evalúa la expresión que se encuentra dentro de los paréntesis del switch. Después de evaluar la expresión, JavaScript buscará un caso dedntro del switch cuyo valor coincida exactamente con el valor de la expresión.

Si se encuentra un caso que coincide, se ejecutará el bloque de código asociado a ese caso. Si no se encuentra ninguna coincidencia y hay un caso "default", se ejecutará el bloque de código dentro del caso "default".  
Después de ejecutar el bloque de código asociado a un caso, se utiliza la palabra clave "break" para salir del "switch" y evitar que se ejecuten los bloques de código de los casos siguientes.

La sintaxis quedaría algo así:

```
switch ( condicion ) {

    case valor1:
        // Intrucciones;
        break;

    case valor2:
        // Intrucciones;
        break;

    case valor3:
        // Intrucciones;
        break;

    case valor4:
        // Intrucciones;
        break;

    default:
        // Intrucciones;
}
```

### OPERADOR TERNARIO

El operador ternario es una forma abreviada de escribir una estructura if...else. Es útil cuando se necesita tomar una decisión simple basada en una condición.

La sintaxis es de la siguiente forma:

```
condicion ? expresion1 : expresion2;
```

Si la condición es verdadera, se devuelve 'expresion1', de lo contrario, se devuelve 'expresion2'.
