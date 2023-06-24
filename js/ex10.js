// 10. Crea un array de números de un tamaño pasado por prompt, el array contendrá números aleatorios primos entre los números deseados, 
// por último, nos indica cuál es el mayor de todos. Haz un método para comprobar que el número aleatorio es primo, puedes
// hacer todos los métodos que necesites.

let arrayNumero = prompt('Introduce el tamaño del array: ');
let random = [];
let primos = [];

const Operaciones = (newLongitud, newRandom) => {
    for (let i = 0; i < newLongitud; i++) {
        newRandom = Math.floor(Math.random()*50) + 1;
        console.log(newRandom);
        if(comprobadorPrimo(newRandom)){
            primos.push(newRandom);
        }
    }
    return primos;
}

const comprobadorPrimo = (newNumero) =>{
    for (let i = 2; i <= Math.sqrt(newNumero); i++) {
        if(newNumero % i === 0){
            return false;
        }
    }
    return true;
} 

console.log(Operaciones(arrayNumero, random));
