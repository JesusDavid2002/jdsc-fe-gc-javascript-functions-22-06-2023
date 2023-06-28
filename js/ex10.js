// 10. Crea un array de números de un tamaño pasado por prompt, el array contendrá números aleatorios primos entre los números deseados, 
// por último, nos indica cuál es el mayor de todos. Haz un método para comprobar que el número aleatorio es primo, puedes
// hacer todos los métodos que necesites.

let arrayNumero = prompt('Introduce el tamaño del array: ');


const comprobadorPrimo = (newNumero) =>{
    for (let i = 2; i <= Math.sqrt(newNumero); i++) {
        if(newNumero % i === 0){
            return false;
        }
    }
    return true;
} 

const Operaciones = (newLongitud, minimo, maximo) => {
  let random = [];
    while (random.length < newLongitud) {
        let numeroRandom = Math.floor(Math.random() * (maximo - minimo + 1)) + minimo;
      
        if(comprobadorPrimo(numeroRandom)){
          random.push(numeroRandom);
        }
    }
    return random;
}

const encontrarMayorNum = (arrayPrimos) => {
  let numMayor = arrayPrimos[0];

  for(let i = 1; i < arrayPrimos.length; i++){
    if(arrayPrimos[i] > numMayor){
      numMayor = arrayPrimos[i];
    }
  }
  return numMayor;
}

let arrayPrimos = Operaciones(arrayNumero, 1, 100);
let numMayor = encontrarMayorNum(arrayPrimos);

console.log(`El array de primos de ${arrayNumero} contiene estos números primos: ${arrayPrimos}`);
console.log(`Y el mayor número entre ellos es: ${numMayor}`);
