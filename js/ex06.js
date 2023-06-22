// 6. Crea una aplicación que nos cuente el número de cifras de un número entero positivo (hay que controlarlo) pedido por prompt. 
// Crea un método que realice esta acción, pasando el número por parámetro devolverá el número de cifras.

let numero = prompt('Introduce un número: ');

const Contador = (newNumero) =>{
    for (let i = 0; i < newNumero; i++) {
        console.log(`El número de cifras del número ${newNumero} son ${newNumero.length}`);
    }
};

Contador(numero);