// 2. Crea una aplicación que nos genere una cantidad de números enteros aleatorios pasados por el usuario (prompt). 
// Crea un método donde pasamos como parámetros entre qué números queremos que los genere, 
// podemos pedirlas al usuario antes de generar los números. Este método devolverá un número entero aleatorio. 
// Muestra estos números por consola.

let numeroMínimo = parseInt(prompt('Introduce el número mínimo del generador: '));
let numeroMáximo = parseInt(prompt('Introduce el número máximo del generador: '));
let cantidadNúmeros = parseInt(prompt('Introduce la cantidad de números que quieres mostrar: '));

const Randomizer = (newNumeroMini, newNumeroMax) =>{
    let numeroAleatorios = Math.floor(Math.random() * (newNumeroMax - newNumeroMini + 1)) + newNumeroMini;
    return numeroAleatorios;
}

for (let i = 0; i < cantidadNúmeros; i++) {
        let numero = Randomizer(numeroMínimo, numeroMáximo);
        console.log(numero);
}
