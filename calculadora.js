function validarNumeros(a, b) {
    if (typeof a !== "number" || typeof b !== "number" || isNaN(a) || isNaN(b)) {
        throw new Error("Los parámetros deben ser números válidos.");
    }
}
export function Sumar(a, b) {
    validarNumeros(a, b);
    return a + b;
}

export function Restar(a, b) {
    validarNumeros(a, b);
    return a - b;
}

export function Multiplicar(a, b) {
    validarNumeros(a, b);
    return a * b;
}

export function Dividir(a, b) {
    validarNumeros(a, b);
    if (b === 0) {
        throw new Error("No se puede dividir por cero.");
    }
    return a / b;
}


export default function info() {
    console.log("Esta herramienta le permite operar con dos números.\n");
      console.log(`
==============================
    CALCULADORA BÁSICA
==============================
1 = Sumar
2 = Restar
3 = Multiplicar
4 = Dividir
0 = Salir
==============================
`);
}
