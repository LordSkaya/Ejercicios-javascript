var estudiantes = ["Andres", "Pancho", "Qcho", "Lizo"];

function saludar(estudiante) {
  console.log(`Hola, ${estudiante}`);
}

// una opcion

//for contiene una variable, una pregunta y una accion con la variable
//si la pregunta se cumple se genera la tarea assignada dentro del for
//mientras se cumpla la pregunta eta se seguira ejecutando
//hasta que la pregunta no se cumpla
for (var i = 0; i < estudiantes.length; i++) {
  saludar(estudiantes[i]);
}

//otra opcion

for (var estudiante of estudiantes) {
  saludar(estudiante);
}
