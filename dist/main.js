"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// archivo main.ts
const data_1 = require("./data");
// Uso de forEach para recorrer platos
data_1.platos.forEach((plato) => {
    console.log(`Plato: ${plato.nombre}`);
});
// Uso de for...in para recorrer pacientes
for (const index in data_1.pacientes) {
    const paciente = data_1.pacientes[index];
    console.log(`Paciente: ${paciente.nombre}`);
}
// Uso de for...of para recorrer registros
for (const registro of data_1.registros) {
    console.log(`Registro: Plato ID ${registro.platoId}, Paciente ID ${registro.pacienteId}`);
}
