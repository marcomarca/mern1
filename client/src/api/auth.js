// Aqui se hacen las peticiones al servidor para el login y el registro
// Importamos axios para hacer las peticiones fetch al servidor (Fetch es una API de JS para hacer peticiones HTTP)
import axios from 'axios';

const API = 'http://localhost:4000/api';

export const registerRequest = user => axios.post(`${API}/register`, user); // indica la ruta a donde se enviara la peticion y el objeto que se enviara
