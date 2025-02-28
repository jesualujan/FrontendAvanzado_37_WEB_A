// AQUÍ HACEMOS LA LLAMADA A LA API Y PARA ESTO USAMOS AXIOS
// LE PASAMOS UN ENDPOINT PARA QUE TRAIGA LA DATA DE LA API

//* 1) import axios
import axios from 'axios'

//* 2) establecemos nuestro endpoint 
//* -> SNAKE_CASE para entornos o variables globales
// -> localhost:3000 es el puerto que nos da el backend
const BASE_URL = 'http://localhost:3000' // esta opción la pueden cambiar si subimos el repo de github a render

//* 3) ocuppo mandar información
// registrar un usuario (signup)
const registerUserService = (data) => axios.post(`${BASE_URL}/register`, data) // http://localhost:300/register{json}

// autenticar un usuario (login)
const loginUserService = (data) => axios.post(`${BASE_URL}/login`,data)      // http://localhost:300/login{json}

// información de un solo usuario
const getMeUserService = (jwtToken) => axios.get(`${BASE_URL}/users/me`,{headers: {Authorization: `Bearer ${jwtToken}`}}) // http://localhost:300/users/me{json}

export {
    registerUserService,
    loginUserService,
    getMeUserService
}