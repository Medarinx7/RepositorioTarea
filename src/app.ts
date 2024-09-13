
import { buscarPacienteById, buscarPlatoById, buscarRegistroById } from "./callback";

buscarPacienteById(1, (err, paciente) => {
    if (err) {
        console.error('Error:', err.message);
    } else {
        console.log('Paciente encontrado:', paciente);
    }
});

buscarPlatoById(20, (err, plato) => {
    if (err) {
        console.error('Error:', err.message);
    } else {
        console.log('Médico encontrado:', plato);
    }
});

buscarRegistroById(3, (err, registro) => {
    if (err) {
        console.error('Error:', err.message);
    } else {
        console.log('Registro encontrada:', registro);
    }
});