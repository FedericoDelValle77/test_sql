import calculadora from './calculadora.js';

function calcular(titu, a, b) {
    console.log(`
==============================
1 = Sumar
2 = Restar
3 = Multiplicar
4 = Dividir
0 = Salir
==============================`);

    const resultado = calculadora.info(titu, a, b);
    console.log(resultado);
}

calcular("1", 10, 5);   
calcular("2", 10, 5);  
calcular("3", 10, 5);   
calcular("4", 10, 5);   
calcular("0", 10, 5);   
calcular("9", 10, 5);   
