// 11. Crea dos arrays de números con la dimensión pasada por teclado. Uno de ellos estará rellenado con números aleatorios 
// y el otro apuntará al array anterior, reasigna los valores del segundo array con valores aleatorios.
// Después, crea un método que tenga como parámetros, los dos arrays y devuelva uno nuevo con la multiplicación de la posición 0
// del array1 con el del array2 y así sucesivamente. Por último, muestra el contenido de cada array.

let arrayLong = prompt('Introduce el tamaño de los dos arrays: ');
let array1 = [];
let array2 = [];
let arrayResult = [];

const LlenarValores = (LongArray, arrayRandom) =>{
    for (let i = 0; i < LongArray; i++) {
        arrayRandom.push(Math.floor(Math.random()*50) + 1);
    }
    return arrayRandom;
}

const LlenarValoresA2 = (arrayRandom, arrayReasignado) => {
    for (let i = 0; i < arrayRandom.length; i++) {
        arrayReasignado.push(Math.floor(Math.random()*50) + 1);
    }
    return arrayReasignado;
}

const Operaciones = (newArray1, newArray2, newArrayResult) => {
    for (let i = 0; i < newArray1.length; i++) {
        newArrayResult[i] = newArray1[i] * newArray2[i];
    }
    return newArrayResult;
}

array1 = LlenarValores(arrayLong, array1);
array2 = LlenarValoresA2(array1, array2);
arrayResult = Operaciones(array1, array2, arrayResult);
console.log(`Array 1: ${array1}`);
console.log(`Array 2: ${array2}`);
console.log(`Array Resultado: ${arrayResult}`);

