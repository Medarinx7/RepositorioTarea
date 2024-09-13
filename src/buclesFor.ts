import { IPlato,IPaciente,IRegistro,platos,registros,pacientes } from "./data";

console.log("Platos:");
platos.forEach((plato) => {
  console.log(plato);
});


console.log("\nPacientes:");
for (const paciente of pacientes) {
  console.log(paciente);
}


console.log("\nRegistros:");
for (const index in registros) {
  console.log(registros[index]);
}

