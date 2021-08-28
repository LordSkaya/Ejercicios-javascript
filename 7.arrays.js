var frutas = ["Manzana", "Pera", "Banano", "Cereza"];

console.log(frutas);
//me muestra el contenido del arreglo
console.log(frutas.length);
//me mostraria el tamaño del arreglo
console.log(frutas[2]);
//me mostraria Banano

var agregaralfinal = frutas.push("Uvas");
//añadir elementos al final del arreglo

var quitarultimo = frutas.pop("Uvas");
//elimina el ultimo elemento del arreglo

var agregaralinicio = frutas.unshift("Mango");
//agrega un elemento al inicio del arreglo

var eliminarprimero = frutas.shift("Uvas");
//elimina el primer elemento del arreglo

var posicion = frutas.indexOf("Banano");
//me devuelva la posicion del elemento que solicite
