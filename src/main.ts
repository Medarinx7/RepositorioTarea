
import { buscarPlatoAsync, buscarPacienteAsync, buscarRegistroAsync } from './asyncAwait';

async function ejecutarBusquedas() {
  try {
    const plato = await buscarPlatoAsync(1);
    console.log(`Plato encontrado: ${plato.nombre}`);
  } catch (error: any) {
    console.error(`Error: ${error.message}`);
  }

  try {
    const paciente = await buscarPacienteAsync(1);
    console.log(`Paciente encontrado: ${paciente.nombre}`);
  } catch (error: any) {
    console.error(`Error: ${error.message}`);
  }

  try {
    const registro = await buscarRegistroAsync(1);
    console.log(`Registro encontrado: Plato ID ${registro.idPlato}, Paciente ID ${registro.idPaciente}`);
  } catch (error: any) {
    console.error(`Error: ${error.message}`);
  }
}

ejecutarBusquedas();
