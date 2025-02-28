import { Routes, Route} from 'react-router-dom'
import { Home, Dashboard, Login, Secret, Signup} from '@/Pages'
import { useAuthContext } from '@/Hook/useAuthContext'

const RoutesIndex = () => {
    const {isAuth} = useAuthContext()
    return (
    <> 
        {/* COMPONENTE PRINCIPAL QUE ANIDA MIS RUTAS */}
        <Routes>
            {/* Defino una ruta especifica con Route */}
            <Route path='/' element={<Home />} />
            <Route 
            path='/dashboard' 
            element={
            isAuth
            ? <Dashboard />
            : <Login />
            } 
            />
            <Route path='/login' element={<Login />} />
            <Route 
            path='/secret'
            element={
            isAuth
                ? <Secret />
                : <Login />
            } />
            <Route path='/signup' element={<Signup />} />
        </Routes>
    </>
    )
}

export default RoutesIndex