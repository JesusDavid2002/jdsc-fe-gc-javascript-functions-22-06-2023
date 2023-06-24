// 12. Crea un array de números de un tamaño pasado por prompt, el array contendránúmeros aleatorios entre 1 y 300 y mostrará aquellos números que 
// acaben en un dígito que nosotros le indiquemos por prompt (debes controlar que se introduce un número correcto), estos deben guardarse en un nuevo array. 
// Por ejemplo, en un array de 10 posiciones le indicamos mostrar los números acabados en 5, podría salir 155, 25, etc.

let array = prompt('Introduce el tamaño del array: ');
let numero = prompt('¿Con que número deben acabar los números?');
let random = [];
let selector = [];

const LlenarArray = (arrayLong, newNumero) => {
    for (let i = 0; i < arrayLong; i++) {
        newNumero.push(Math.floor(Math.random()*300));
    }
    return newNumero;
}

const Selector = (arrayNum, finalNum, arrayNumFinal) => {
    for (let i = 0; i < arrayNum.length; i++) {
        ultimoDigito = arrayNum[i] % 10 ;
        if(ultimoDigito === parseInt(finalNum)){
            arrayNumFinal.push(arrayNum[i]);
        }
    }
    return arrayNumFinal;
}

random = LlenarArray(parseInt(array), random);
selector = Selector(random, numero, selector);
console.log(`El array contiene estos números: ${random}`);
console.log(`Del array anterior los número que acaban en ${numero} son: ${selector}`);

