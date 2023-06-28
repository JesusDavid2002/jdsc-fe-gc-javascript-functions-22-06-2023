// 1. Crea una aplicación que nos calcule el área de un círculo, cuadrado o triángulo. Pediremos al usuario que figura 
// queremos calcular su área y según lo introducido pedirá los valores necesarios para calcular el área. 
// Para ello has de crear un método por cada figura para calcular cada área, este devolverá un número real. 
// Muestra el resultado por consola. Aquí te mostramos que necesita cada figura:
// • Circulo: (radio^2)*PI
// • Triangulo: (base * altura) / 2
// • Cuadrado: lado * lado

let figura = prompt('Que figura quiere calcular el área: circulo, triangulo o cuadrado');

const Operaciones = (newFigura) =>{
    let resultadoFigura = "";
    switch (newFigura) {
        case "circulo" :
            let radio = prompt('Introduce el radio del circulo: ');
            resultadoFigura = (radio**2) * Math.PI;
            break;
        case "triangulo":
            let base = prompt('Introduce la base del triangulo: ');
            let altura = prompt('Introduce la altura del triangulo: ');
            resultadoFigura = (base * altura) / 2;
            break;
        case "cuadrado":
            let lado = prompt('Introduce el lado del cuadrado: ');
            resultadoFigura = lado * lado;
            break;
        default:
            alert("No es una forma geométrica.");
            break;
    }
    console.log(`El área de ${newFigura} es de ${resultadoFigura}`);
}

Operaciones(figura);