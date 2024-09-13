
export interface IPlato {
  id: number;
  nombre: string;
  precio: number;
  categoria: string;
  descripcion: string;
}


export interface IRegistro {
  id: number;
  idPlato: number; 
  fecha: string;
  comentarios?: string;
}

const registroDePlatos: IRegistro[] = [];

let registroIdCounter = 1;

async function fetchData<Type>(url: string): Promise<Type> {
  try {
      const response = await fetch(url);
      if (!response.ok) {
          throw new Error(`Error HTTP! Estado: ${response.status}`);
      }
      return await response.json();
  } catch (error) {
      console.error('Error al obtener los datos:', error);
      throw error;
  }
}


async function fetchPlato() {
  const url = 'https://jsonplaceholder.typicode.com/posts/1'; 
  try {
      const platoData = await fetchData<IPlato>(url); 
      console.log('Plato encontrado:', platoData.nombre);
      console.log('Precio:', platoData.precio);
      registrarPlato(platoData); 
  } catch (error: any) {
      console.error('Error:', error.message);
  }
}


function registrarPlato(plato: IPlato) {

  const nuevoRegistro: IRegistro = {
      id: registroIdCounter++,
      idPlato: plato.id, 
      fecha: new Date().toISOString(),
      comentarios: `Registro del plato "${plato.nombre}"`,
  };


  registroDePlatos.push(nuevoRegistro);
  console.log(`Plato "${plato.nombre}" registrado correctamente.`);
  console.log('Total de registros:', registroDePlatos.length);
  console.log('Registros actuales:', registroDePlatos);
}

async function ejecutarBusquedas() {
  await fetchPlato();
  await fetchPlato(); 
  await fetchPlato();
}

ejecutarBusquedas();
