var estudiantes = ["Andres", "Pancho", "lizo", "qcho"];

function saludar(estudiante) {
  console.log(`Hola, ${estudiante}`);
}

//while funciona si mientras la condicion sea verdad se ejecuta
//el ciclo
while (estudiantes.length > 0) {
  //usar console.log para verificar el proceso
  console.log(estudiantes);
  var estudiante = estudiantes.shift();
  saludar(estudiante);
}
