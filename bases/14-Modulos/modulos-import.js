import { sum } from "./export.js";

console.log(sum(1,2)); // Resultado 3


import capitalize from "./export.js";

console.log(capitalize('hello')); // Resultado: "HELLO"


import * as funciones from "./export.js"

console.log(funciones.multiply(5, 2)); // Resultado: 10

import { PI as constantePI } from './export.js';

console.log(constantePI); // Resultado: 3.14159

