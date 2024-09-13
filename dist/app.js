"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registros = exports.pacientes = exports.platos = void 0;
exports.platos = [
    { id: 1, nombre: 'Ensalada César' },
    { id: 2, nombre: 'Sopa de Tomate' },
    { id: 3, nombre: 'Pizza Margarita' },
    { id: 4, nombre: 'Pasta Alfredo' },
    { id: 5, nombre: 'Tacos de Pollo' }
];
exports.pacientes = [
    { id: 1, nombre: 'Juan Pérez', identificacion: '12345' },
    { id: 2, nombre: 'María Gómez', identificacion: '67890' },
    { id: 3, nombre: 'Carlos López', identificacion: '54321' },
    { id: 4, nombre: 'Ana Martínez', identificacion: '09876' },
    { id: 5, nombre: 'José Ramírez', identificacion: '11223' }
];
exports.registros = [
    { id: 1, platoId: 1, pacienteId: 1, fecha: '2024-09-11', hora: '12:00', calorias: 300, porciones: 1 },
    { id: 2, platoId: 2, pacienteId: 2, fecha: '2024-09-11', hora: '13:00', calorias: 200, porciones: 2 },
    { id: 3, platoId: 3, pacienteId: 3, fecha: '2024-09-11', hora: '14:00', calorias: 500, porciones: 1 },
    { id: 4, platoId: 4, pacienteId: 4, fecha: '2024-09-11', hora: '15:00', calorias: 600, porciones: 1 },
    { id: 5, platoId: 5, pacienteId: 5, fecha: '2024-09-11', hora: '16:00', calorias: 250, porciones: 3 }
];
