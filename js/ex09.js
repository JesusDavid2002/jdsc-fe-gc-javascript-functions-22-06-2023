// 9. Crea un array de números donde le indicamos por prompt el tamaño del array,rellenaremos el array con números aleatorios entre 0 y 9. 
// Al final muestra por consola el valor de cada posición y la suma de todos los valores. Tareas a realizar: 
// Haz un método para rellenar el array(que tenga como parámetros los números entre los que tenga que
// generar) y otro para mostrar el contenido y la suma del array.

let arrayNumeros = prompt('Indica el tamaño del array: ');
let array = [];
let sumaArray = [];

const RellenarArray = (newArray) => {
    for (let i = 0; i < newArray; i++) {
        array.push(Math.floor(Math.random()*10));
    } return array;
}

const MostrarArray= (mostrarArray) => {
    console.log(mostrarArray);
    for (let i = 0; i < mostrarArray.length; i++) {
        let sumaArray = mostrarArray.reduce((a, b) => a + b, 0);
        console.log(sumaArray);
    }
}

RellenarArray(arrayNumeros);
MostrarArray(array);