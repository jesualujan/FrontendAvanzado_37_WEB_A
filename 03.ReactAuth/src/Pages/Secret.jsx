// Definir el perfil de un usuario
// tipo: Admin 
// tipo: Customer
import { useAuthContext } from "@/Hook/useAuthContext"


const Secret = () => {
  const { userPayload } = useAuthContext() // consumimos el contexto
  return (
    <>
    <h1> Tipo de usuario 🧑‍🦰</h1>
    {
      userPayload?.role === 'ADMIN'
      ? <h2> Hola Admin! bienvenido a tu perfil 🫲</h2> // lo pueden reemplazar por una card
      : <h2> Hola Customer! bienvenido a tu perfil 🫲</h2> // lo pueden reemplazar por una card
    }
    { userPayload?.role === 'ADMIN' && <h3> Saludos Admin 🫲</h3> }
    { userPayload?.role === 'CUSTOMER' && <h3> Saludos Customer 🫲</h3> }
    </>
  )
}

export default Secret