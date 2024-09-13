

// Definición de tipos para Plato, Paciente y Registro
// export interface Plato {
//     id: number;
//     nombre: string;
//   }

import { Interface } from "readline";

  
interface IPlato {
    id: number,
    nombre: string,
    precio: number,
    categoria: string,
    descripcion: string
}

interface IPaciente {
    id: number,
    nombre: string,
    identificacion: number,
    periodoDeTiempoActual: string,
    gustos: string

}

interface IRegistro {
    id: number,
    idPlato: number,
    idPaciente: number,
    fecha: string,
    hora: string,
    numeroCaloriasConsumidas: number,
    numeroPorciones: number

}

const platos=[
  { id: 1, nombre: "Ensalada César", precio: 10, categoria: "Entrada", descripcion: "Ensalada con lechuga y aderezo César" },
  { id: 2, nombre: "Pizza Margarita", precio: 20, categoria: "Principal", descripcion: "Pizza clásica con tomate y queso" },
  { id: 3, nombre: "Sopa de Tomate", precio: 8, categoria: "Entrada", descripcion: "Sopa cremosa de tomate" },
  { id: 4, nombre: "Hamburguesa", precio: 15, categoria: "Principal", descripcion: "Hamburguesa con carne, queso y lechuga" },
  { id: 5, nombre: "Helado de Vainilla", precio: 5, categoria: "Postre", descripcion: "Helado de vainilla clásico" }
]

  
  const pacientes=[
    { id: 1, nombre: "Juan Pérez", identificacion: 12345678, periodoDeTiempoActual: "Mañana", gustos: "Salado" },
    { id: 2, nombre: "María García", identificacion: 87654321, periodoDeTiempoActual: "Tarde", gustos: "Dulce" },
    { id: 3, nombre: "Carlos López", identificacion: 11223344, periodoDeTiempoActual: "Noche", gustos: "Picante" },
    { id: 4, nombre: "Ana Sánchez", identificacion: 44332211, periodoDeTiempoActual: "Mañana", gustos: "Amargo" },
    { id: 5, nombre: "Luis Fernández", identificacion: 99887766, periodoDeTiempoActual: "Tarde", gustos: "Ácido" }
  ];
  
  const registros = [
    { id: 1, idPlato: 1, idPaciente: 1, fecha: "2024-09-01", hora: "08:00", numeroCaloriasConsumidas: 250, numeroPorciones: 1 },
    { id: 2, idPlato: 2, idPaciente: 2, fecha: "2024-09-01", hora: "12:00", numeroCaloriasConsumidas: 600, numeroPorciones: 2 },
    { id: 3, idPlato: 3, idPaciente: 3, fecha: "2024-09-01", hora: "19:00", numeroCaloriasConsumidas: 300, numeroPorciones: 1 },
    { id: 4, idPlato: 4, idPaciente: 4, fecha: "2024-09-01", hora: "08:00", numeroCaloriasConsumidas: 500, numeroPorciones: 1 },
    { id: 5, idPlato: 5, idPaciente: 5, fecha: "2024-09-01", hora: "15:00", numeroCaloriasConsumidas: 200, numeroPorciones: 1 }
  ];
  export {
    IPaciente,
    IPlato,
    IRegistro,
    pacientes,
    platos,
    registros
  }
  