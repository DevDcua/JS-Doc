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


const persona = {
    nombre: "Juan",
    edad: 30
};

try {
    if(persona.direccion === undefined ){
        throw new Error("No existe direccion para esta persona")
    }else{
        console.log(persona.direccion);
    }

} catch (error) {
    console.log("Error:", error.message);
}

// Resultado: Error: No existe direccion para esta persona