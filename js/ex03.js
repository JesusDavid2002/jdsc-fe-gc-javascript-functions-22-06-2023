// 3. Crea una aplicación que nos pida un número por prompt y con un método se lo pasamos por parámetro para que 
// nos indique si es o no un número primo, debe devolver true si es primo sino false. 
// Un número primo es aquel que solo puede dividirse entre 1 y sí mismo. Por ejemplo: 
// 25 no es primo, ya que 25 es divisible entre 5, sin embargo, 17 si es primo.

let numero = prompt('Introduce un número: ');

const Comprobador = (newNumero) => {
    for (let i = 2; i < newNumero; i++) {
        if (newNumero % i === 0) {
            return false;
        }
    }
    return newNumero !==1;
}

if (Comprobador(numero)){
    console.log(`${numero} es un número primo.`);
} else{
    console.log(`${numero} no es un número primo.`);
}
