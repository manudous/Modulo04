/**
Módulo 4 - Funciones y Eventos - Laboratorio
Calculadora
Vamos a crear una calculadora sencilla. Para ello:
Como primer paso, crea 4 funciones, una para cada una de las 4 operaciones que vamos a impementar: suma, resta,
multiplicación y división. Las funciones deberán tomar como entrada dos operando y devolver el resultado de aplicar la
operación.
Prueba las funciones simplemente jugando con ellas y mostrando el resultado a traves de la consola.
Una vez tengas lo anterior, añade al HTML dos inputs numéricos, que serán los operandos A y B, y también 4 botones,
uno por cada operación (suma, resta, multiplicación y división).
El usuario deberá rellenar los 2 inputs con sendos operandos y clickar uno de los botones. El programa debe mostrar
por pantalla el resultado de la operación.
Opcional
Si alguno de los operandos es vacío, muestra como resultado "Error".
*/

// Funciones Suma, Resta, Multiplicación y División

var sum = (a , b) => a + b;
var subs = (a , b) => a - b;
var multi = (a , b) => a * b;
var div = (a , b) => a / b;

// Creo una variable para almacenar por donde se mostará por pantalla

var result = document.getElementById('final-result');


// Hago dos funciones para almacenar el valor que se introducirán por los inputs

var operandA = () => document.getElementById('first-operand').value;
var operandB = () => document.getElementById('second-operand').value; 

// Eventos, mostrará error si lo introducido no es un número. Si lo introducido es
// un número hará la operación y mostrará el resultado en pantalla. He introducido un
// botón llamado C para borrar los inputs y el resultado.

document.getElementById('sum-button').addEventListener('click', () => 
    (!Number(operandA()) || !Number(operandB())) ? result.textContent = 'Error':
    result.textContent = `El resutado es ${sum(parseInt(operandA()), parseInt(operandB()))}`
);

document.getElementById('subs-button').addEventListener('click', () => 
    (!Number(operandA()) || !Number(operandB())) ? result.textContent = 'Error':
    result.textContent = `El resutado es ${subs(parseInt(operandA()), parseInt(operandB()))}`
);

document.getElementById('multi-button').addEventListener('click', () => 
    (!Number(operandA()) || !Number(operandB())) ? result.textContent = 'Error':
    result.textContent = `El resutado es ${multi(parseInt(operandA()), parseInt(operandB()))}`
);

document.getElementById('div-button').addEventListener('click', () => 
    (!Number(operandA()) || !Number(operandB())) ? result.textContent = 'Error':
    result.textContent = `El resutado es ${div(parseInt(operandA()), parseInt(operandB())).toFixed(2)}`
);

document.getElementById('reset-button').addEventListener('click', () => {
    result.textContent = "";
    document.getElementById('first-operand').value = "";
    document.getElementById('second-operand').value = "";
});
