// 4. Crea una aplicación que nos calcule el factorial de un número pedido por prompt, lo realizará mediante un método al que le pasamos 
// el número como parámetro. Para calcular el factorial, se multiplica los números anteriores hasta llegar a uno. 
// Por ejemplo, si introducimos un 5, realizará esta operación 5*4*3*2*1=120.

let numero = prompt('Introduce un número para factorizarlo: ');

const Factorización = (factor) => {
    let acumulador = 1;
    
    for (let i = 1; i <= factor; i++) {
        acumulador *= i;  
    }
    return acumulador
}

console.log(Factorización(numero));