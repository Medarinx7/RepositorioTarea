import { IRegistro } from './data'; 

// Tipos de parámetros para la función buscarPorId
export function buscarPorId<T>(array: T[], id: number, callback: (id: number) => (item: T) => boolean): Promise<T> {
    return new Promise((resolve, reject) => {
        const result = array.find(callback(id));
        if (result) {
            resolve(result);
        } else {
            reject(`No se encontró el elemento con ID ${id}`);
        }
    });
}


const buscarPorIdCallback = (id: number) => (item: { id: number }) => item.id === id;

async function buscarRegistro() {
    try {
        const registros: IRegistro[] = [/* Asegúrate de definir 'registros' aquí o importarlo desde './data' */];
        const registroEncontrado = await buscarPorId(registros, 3, buscarPorIdCallback);
        console.log('Registro encontrado:', registroEncontrado);
    } catch (error) {
        console.error(error);
    }
}

buscarRegistro();
