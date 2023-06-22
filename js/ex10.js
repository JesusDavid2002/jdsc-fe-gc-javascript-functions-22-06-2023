// 10. Crea un array de números de un tamaño pasado por prompt, el array contendrá números aleatorios primos entre los números deseados, 
// por último, nos indica cuál es el mayor de todos. Haz un método para comprobar que el número aleatorio es primo, puedes
// hacer todos los métodos que necesites.

let arrayNumero = prompt('Introduce el tamaño del array: ');
let random = [];
let primos = [];

const ComprobadorPrimos = (newLongitud, newRandom) => {
    
    for (let i = 2; i < newLongitud; i++) {
        newRandom = Math.floor(Math.random()*10);
        console.log(newRandom);
        if (newRandom % i === 0) {
            // return false;
            
            // primos.push(newRandom);
            // console.log(primos);
        }
        
    }
    // return primos;
}

console.log(ComprobadorPrimos(arrayNumero, random));
