"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.buscarPorId = buscarPorId;
// Tipos de parámetros para la función buscarPorId
function buscarPorId(array, id, callback) {
    return new Promise((resolve, reject) => {
        const result = array.find(callback(id));
        if (result) {
            resolve(result);
        }
        else {
            reject(`No se encontró el elemento con ID ${id}`);
        }
    });
}
// Tipo de parámetro para buscarPorIdCallback
const buscarPorIdCallback = (id) => (item) => item.id === id;
// Uso de async/await para llamar la función de búsqueda
function buscarRegistro() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const registros = [ /* Asegúrate de definir 'registros' aquí o importarlo desde './data' */];
            const registroEncontrado = yield buscarPorId(registros, 3, buscarPorIdCallback);
            console.log('Registro encontrado:', registroEncontrado);
        }
        catch (error) {
            console.error(error);
        }
    });
}
buscarRegistro();
