//Reto

//Hacer un piedra papel o tijera
//generar variables, piedra, papel, tijera
//funcion en la cual se mande a llamar
//generar validacion
//variable le gana a la variable de la maquina
//resultado gane o perdi

//pasos

//generar variables, generar funcion con validacion
//empezar por la validacion

var piedra = "piedra";
var papel = "papel";
var tijera = "tijera";

function Duelo(Usuario, Computadora) {
  if (Usuario === piedra && Computadora === piedra) {
    console.log("Empate");
  } else if (Usuario === piedra && Computadora === papel) {
    console.log("Perdio");
  } else if (Usuario === piedra && Computadora === tijera) {
    console.log("Gano");
  } else if (Usuario === papel && Computadora === piedra) {
    console.log("Gano");
  } else if (Usuario === papel && Computadora === papel) {
    console.log("Enpate");
  } else if (Usuario === papel && Computadora === tijera) {
    console.log("Perdio");
  } else if (Usuario === tijera && Computadora === piedra) {
    console.log("Perdio");
  } else if (Usuario === tijera && Computadora === papel) {
    console.log("Gano");
  } else if (Usuario === tijera && Computadora === tijera) {
    console.log("Empate");
  }
}
