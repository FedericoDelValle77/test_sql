function Sumar(a, b) {
    try {
        const suma = a + b;
        console.log(`Resultado de la suma: ${suma}`);
        return suma;
    } catch (error) {
        return "Error al sumar: " + error;
    }
}

function Restar(a, b) {
    try {
        const resta = a - b;
        console.log(`Resultado de la resta: ${resta}`);
        return resta;
    } catch (error) {
        return "Error al restar: " + error;
    }
}

function Multiplicar(a, b) {
    try {
        const multiplicar = a * b;
        console.log(`Resultado de la multiplicación: ${multiplicar}`);
        return multiplicar;
    } catch (error) {
        return "Error al multiplicar: " + error;
    }
}

function Dividir(a, b) {
    try {
        if (b === 0) return "No se puede dividir por cero.";
        const dividir = a / b;
        console.log(`Resultado de la división: ${dividir}`);
        return dividir;
    } catch (error) {
        return "Error al dividir: " + error;
    }
}
const lista_de_funciones = {
    "1":{nombre_funcion:"Sumar", funcion: Sumar},
    "2":{nombre_funcion:"Restar", funcion: Restar},
    "3":{nombre_funcion:"Multiplicar", funcion: Multiplicar},
    "4":{nombre_funcion:"Dividir", funcion: Dividir},
};
function info(titu, A, B) {
    const lista_de_funciones = {
    "1":{nombre_funcion:"Sumar", funcion: Sumar},
    "2":{nombre_funcion:"Restar", funcion: Restar},
    "3":{nombre_funcion:"Multiplicar", funcion: Multiplicar},
    "4":{nombre_funcion:"Dividir", funcion: Dividir},
};
    console.log("Esta herramienta le permite sumar, restar, multiplicar y dividir dos números.\n");
    // un debug
    console.log(`Valor A: ${A}`);
    console.log(`Valor B: ${B}`);
    //comparo que los valores al pasarle el parametro no sean null, de lo contrario no se podría ejecutar ninguna operacion
    if (titu == null || A == null || B == null) {
        return "Debe de elegir una opción válida y proporcionar ambos números.";
    }
    
    switch (titu) {
       case "1":
        console.log("Operación seleccionada: " + lista_de_funciones["1"].nombre_funcion);
        return `Resultado final: ${lista_de_funciones["1"].funcion(A, B)}`;
    case "2":
        console.log("Operación seleccionada: " + lista_de_funciones["2"].nombre_funcion);
        return `Resultado final: ${lista_de_funciones["2"].funcion(A, B)}`;
    case "3":
        console.log("Operación seleccionada: " + lista_de_funciones["3"].nombre_funcion);
        return `Resultado final: ${lista_de_funciones["3"].funcion(A, B)}`;
    case "4":
        console.log("Operación seleccionada: " + lista_de_funciones["4"].nombre_funcion);
        return `Resultado final: ${lista_de_funciones["4"].funcion(A, B)}`;
    case "0":
        return `Usted eligió la opción: ${titu} finalizando programa...`;
    default:
        return `Opción no reconocida: "${titu}". Por favor, seleccione una opción válida del 0 al 4.`;
    }
}

export default {
    info
};
