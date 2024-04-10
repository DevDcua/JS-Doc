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


//--------------------------------------------------------------------

// Ejemplo de método estático
class Utilidades {
    static sumar(a, b) {
        return a + b;
    }
}

console.log(Utilidades.sumar(5, 3)); // 8


//--------------------------------------------------------------------


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

//--------------------------------------------------------------------



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


//--------------------------------------------------------------------


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


//--------------------------------------------------------------------

// Ejemplo de getters y setters
class Jugador {
    constructor(nombre, edad) {
        this._nombre = nombre;
        this._edad = edad;
    }

    // Getter para obtener el nombre
    get nombre() {
        return this._nombre.toUpperCase();
    }

    // Getter para obtener el nombre
    get edad() {
        return this._edad;
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

let jugador = new Jugador('Juan', 30);
console.log(jugador.nombre); // JUAN (nombre convertido a mayúsculas)
jugador.edad = 35; // Establecer la edad (llama al setter)
console.log(jugador.edad); // 35
jugador.edad = 200; // Intentar establecer una edad inválida


//--------------------------------------------------------------------
