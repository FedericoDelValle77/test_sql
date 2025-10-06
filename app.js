import info, { Sumar, Restar, Multiplicar, Dividir } from './calculadora.js';

function calcular(opcion, a, b) {    
    try {
        let resultado;

        switch (opcion) {
            case "1":
                resultado = Sumar(a, b);
                console.log(`Resultado de la suma: ${resultado}`);
                break;
            case "2":
                resultado = Restar(a, b);
                console.log(`Resultado de la resta: ${resultado}`);
                break;
            case "3":
                resultado = Multiplicar(a, b);
                console.log(`Resultado de la multiplicación: ${resultado}`);
                break;
            case "4":
                resultado = Dividir(a, b);
                console.log(`Resultado de la división: ${resultado}`);
                break;
            case "0":
                console.log("Saliendo del programa...");
                return;
            default:
                console.log("Opción no válida. Intente nuevamente.");
        }
    } catch (error) {
        console.error("Error:", error.message);
    }
}

info();
// Ejecución de prueba
calcular("1", 10, 5);  
calcular("2", 8, 2);   
calcular("3", 4, 3);   
calcular("4", 20, 4); 
calcular("4", 10, 0);  //Error controlado
calcular("1", "a", 5); //Error controlado
calcular("9", 10, 5);  //Opción inválida