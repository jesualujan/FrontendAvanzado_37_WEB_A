//productos

// AQUÍ HACEMOS LA LLAMADA A LA API Y PARA ESTO USAMOS AXIOS
// LE PASAMOS UN ENDPOINT PARA QUE TRAIGA LA DATA DE LA API

//* 1) import axios
import axios from 'axios'

//* 2) establecemos nuestro endpoint 
//* -> SNAKE_CASE para entornos o variables globales
// -> localhost:3000 es el puerto que nos da el backend
const BASE_URL = 'http://localhost:3000' // esta opción la pueden cambiar si subimos el repo de github a render

const getAllItemsService = () => axios.get(`${BASE_URL}/items`)
const getOneItemService = (id) => axios.get(`${BASE_URL}/items/${id}`)
const createItemService = (data, jwtToken) => axios.post(`${BASE_URL}/items`, data,{headers: {Authorization: `Bearer ${jwtToken}`}})

export {
  getAllItemsService,
  getOneItemService,
  createItemService
}