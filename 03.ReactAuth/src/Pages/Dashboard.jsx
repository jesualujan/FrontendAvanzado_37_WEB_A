import { useState, useEffect } from 'react'
import { getMeUserService } from '@/Service/userService'

const Dashboard = () => {
  const [userData, setUserData] = useState({}) // vacío
  const token = localStorage.getItem('token')

  // hago la llamada
  useEffect( () => {
    const fetchUserData = async () =>{
      try{
        const response = await getMeUserService(token)
        if(response.status === 200){
          setUserData(response.data)
        }
      }catch(error){
        console.log('Ocurrio un error en Dashboard', error)
      }
    } 
    fetchUserData()
  }, [token])


  return (
    <>
     {/* Creamos una especie de Card */}
     <h4> Bienvenido al Dashboard 😀 </h4>
     <h4> Bienvenido a tu perfil {userData.first_name} {userData.last_name}</h4>
     <p>Aca ustedes pueden agregar estilos de Bootstrap, scss para crearle una card al usuario</p>
      {/* DATOS QUE QUEREMOS MOSTRAR */}
      {userData?.first_name && <p>Nombre: {userData.first_name}</p>}
      {userData?.last_name && <p>Apellido: {userData.last_name}</p>}
      {userData?.email && <p>Email: {userData.email}</p>}
      {userData?.gender && <p>Genero: {userData.gender}</p>}
      {userData?.role && <p>Rol: {userData.role}</p>}
    </>
  )
}

export default Dashboard