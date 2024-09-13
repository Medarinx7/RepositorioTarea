import { IPlato,IPaciente,IRegistro,platos,registros,pacientes } from "./data";

function buscarPlatoById(id:number, callback:(err: Error|null, plato?:IPlato )=>void){
  const resultadoBusquedaPlato = platos.find(e => e.id === id);

  if (!resultadoBusquedaPlato){
    const error = new Error('Plato no encontrado');
    callback(error);
    return;
  }
  callback(null, resultadoBusquedaPlato)
}

function buscarPacienteById(id: number, callback:(error: Error|null, paciente?:IPaciente)=>void){
  const resultadoBusquedaPaciente = pacientes.find(e=>e.id===id);
  if (!resultadoBusquedaPaciente){
    const error = new Error('Paciente no encontrado');
    callback(error);
    return;
  }
  callback(null, resultadoBusquedaPaciente)
}

function buscarRegistroById(id:number, callback:(error: Error|null, registro?:IRegistro)=>void){
  const resultadoBusquedaRegistro = registros.find(e=>e.id===id);
  if(!resultadoBusquedaRegistro){
    const error = new Error('Registro no encontrado');
    callback(error);
    return;
  }
  callback(null, resultadoBusquedaRegistro)
}

export{
  buscarPlatoById, 
  buscarPacienteById,
  buscarRegistroById
}