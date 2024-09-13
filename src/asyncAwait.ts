import { IPlato,IPaciente,IRegistro,platos,registros,pacientes } from "./data";


function buscarPlatoAsync(id: number): Promise<IPlato> {
    return new Promise((resolve, reject) => {
      const plato = platos.find(e => e.id === id);
      if (plato) {
        resolve(plato);
      } else {
        reject(new Error('Plato no encontrado'));
      }
    });
  }
  
  function buscarPacienteAsync(id: number): Promise<IPaciente> {
    return new Promise((resolve, reject) => {
      const paciente = pacientes.find(e => e.id === id);
      if (paciente) {
        resolve(paciente);
      } else {
        reject(new Error('Paciente no encontrado'));
      }
    });
  }
  
  function buscarRegistroAsync(id: number): Promise<IRegistro> {
    return new Promise((resolve, reject) => {
      const registro = registros.find(e => e.id === id);
      if (registro) {
        resolve(registro);
      } else {
        reject(new Error('Registro no encontrado'));
      }
    });
  }
  export {
    IPlato,
    IPaciente,
    IRegistro,
    platos,
    pacientes,
    registros,
    buscarPlatoAsync,
    buscarPacienteAsync,
    buscarRegistroAsync,
  };