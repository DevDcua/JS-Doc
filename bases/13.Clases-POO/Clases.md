# Clases y Programación Orientada a Objetos

La programacion orientada a objetos (POO) en JavaScript se basa en el concepto de clases y objetos.

Una clase en JavaScript es una plantilla para crear objetos. Define las propiedades y comportamientos que los objetos creados a partir de ella trandran. En JavaScript, las clases fueron introducidas en ECMAScript 2015. Una clase puede tener propiedades y metodos, que son funciones asociadas a la clase.

Sintaxis:

```
class Persona {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }

  saludar() {
    console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} años.`);
  }
}
```

En este ejemplo, `Persona` es una clase que tiene dos propiedades (`nombre` y `edad`) y un metodo (`saludar`). El metodo `constructor` se usa para inicializar las propiedades cuando se crea un nuevo objeto de esta clase.

### Herencia

Los objetos pueden heredar propiedades y metodos de otros objetos.


```
// Definición de una clase con herencia
class Empleado extends Persona {
    constructor(nombre, edad, cargo) {
        super(nombre, edad);
        this.cargo = cargo;
    }
    
    presentarse() {
        console.log(`Hola, soy ${this.nombre}, tengo ${this.edad} años y soy ${this.cargo}.`);
    }
}
```

### Encapsulamiento

El encapsulamiento es el concepto de ocultar la implementación interna de un objeto y exponer solo la interfaz pública. En JavaScript, no hay soporte nativo para acceso privado o protegido como en otros lenguajes, pero se puede simular mediante el uso de convenciones y patrones.

```
// Ejemplo de encapsulamiento usando convenciones
class CuentaBancaria {
    constructor(saldoInicial) {
        let saldo = saldoInicial; // variable "privada"
        
        this.depositar = function(monto) {
            saldo += monto;
            console.log(`Se depositaron $${monto}. Nuevo saldo: $${saldo}`);
        };

        this.verSaldo = function() {
            console.log(`Saldo actual: $${saldo}`);
        };
    }
}

let cuenta = new CuentaBancaria(1000);

cuenta.verSaldo(); // Saldo actual: $1000

cuenta.depositar(500); // Se depositaron $500. Nuevo saldo: $1500

// cuenta.saldo no es accesible desde fuera de la clase
```

### Metodos Estaticos y Metodos de Instancia

Los metodos estaticos son metodos que pertenecen a la clase en si y no a las instancias individuales de la clase. Se accede a ellos directamente desde la clase, no desde una instancia.

```
// Ejemplo de método estático
class Utilidades {
    static sumar(a, b) {
        return a + b;
    }
}

console.log(Utilidades.sumar(5, 3)); // 8
```

### Composicion

La composicion es un principio de diseño en el que los objetos complejos se construyen a partir de objetos mas simples. En JavaScript, esto se puede lograr combinando multiples objetos.

```
// Ejemplo de composición
class Motor {
    encender() {
        console.log('Motor encendido.');
    }
}

class Vehiculo {
    constructor() {
        this.motor = new Motor();
    }

    iniciar() {
        this.motor.encender();
        console.log('Vehículo en marcha.');
    }
}

let miCarro = new Vehiculo();
miCarro.iniciar();
// Salida:
// Motor encendido.
// Vehículo en marcha.

```


### Descriptores de Propiedades

En JavaScript, cada propiedad de un objeto tiene un descriptor que define su comportamiento y características. Los descriptores de propiedades permiten controlar el acceso, la enumerabilidad, la configurabilidad y otros aspectos de las propiedades.

```
let objeto = {
    propiedad: 'valor'
};

// Obtener el descriptor de la propiedad

let descriptor = Object.getOwnPropertyDescriptor(objeto, 'propiedad');

console.log(descriptor);

// Resultado: { value: 'valor', writable: true, enumerable: true, configurable: true }

// Definir una propiedad con descriptores específicos
Object.defineProperty(objeto, 'nuevaPropiedad', {
    value: 123,
    writable: false, // No se puede cambiar el valor
    enumerable: false, // No se enumerará en for...in
    configurable: false // No se puede eliminar ni redefinir
});

console.log(objeto.nuevaPropiedad); // 123
objeto.nuevaPropiedad = 456; // No se puede asignar (modo estricto dará un error)
for (let key in objeto) {
    console.log(key); // solo 'propiedad' se mostrará
}
delete objeto.nuevaPropiedad; // No se puede eliminar
```


### Mixins

Los mixins son una técnica que permite combinar múltiples objetos o clases para crear una nueva clase con la combinación de funcionalidades de las clases base. Esto permite la reutilización de código de manera flexible.

```
// Definir mixins como funciones
let mixinSaludar = {
    saludar() {
        console.log(`Hola, soy ${this.nombre}.`);
    }
};

let mixinDespedir = {
    despedir() {
        console.log(`Adiós, me llamo ${this.nombre}.`);
    }
};

// Clase base
class Persona {
    constructor(nombre) {
        this.nombre = nombre;
    }
}

// Aplicar mixins a la clase Persona
Object.assign(Persona.prototype, mixinSaludar, mixinDespedir);

let persona = new Persona('Juan');
persona.saludar(); // Hola, soy Juan.
persona.despedir(); // Adiós, me llamo Juan.
```

### Metodos de Acceso (Getters y Setters)

En JavaScript, es posible definir métodos especiales llamados getters y setters para controlar el acceso y la modificación de propiedades de un objeto. Esto permite validar y manipular datos antes de ser asignados o recuperados.

```
// Ejemplo de getters y setters
class Persona {
    constructor(nombre, edad) {
        this._nombre = nombre;
        this._edad = edad;
    }

    // Getter para obtener el nombre
    get nombre() {
        return this._nombre.toUpperCase();
    }

    // Setter para establecer la edad (validación)
    set edad(nuevaEdad) {
        if (nuevaEdad > 0 && nuevaEdad < 150) {
            this._edad = nuevaEdad;
        } else {
            console.log('Edad inválida');
        }
    }
}

let persona = new Persona('Juan', 30);
console.log(persona.nombre); // JUAN (nombre convertido a mayúsculas)
persona.edad = 35; // Establecer la edad (llama al setter)
console.log(persona.edad); // 35
persona.edad = 200; // Intentar establecer una edad inválida
```
