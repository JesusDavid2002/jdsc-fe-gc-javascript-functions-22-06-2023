// 8. Crea un array de 10 posiciones de números con valores pedidos por prompt. Muestra por consola el índice y el valor al que corresponde. 
// Haz dos métodos, uno para rellenar valores y otro para mostrar.

let valor = "";
let array = [];

for (let i = 0; i < 10; i++) {
    valor= prompt('Introduce un valor');
    
    const RellenarValores = (newValor) =>{
        array.push(newValor);
    }

    const MostrarValores = (mostrar) =>{
        console.log(`Índice: ${i}, valor: ${mostrar[i]}`);
    }

    RellenarValores(valor);
    MostrarValores(array);
}




