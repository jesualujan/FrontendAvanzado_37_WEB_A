import reactLogo from '../../src/assets/react.svg'

const SimpleForm = () => {
    return (
      <div>
    SimpleForm
      {/* VA TODO NUESTRO DISEÑO HTML */}
      {/* Paso #1: Crear el formulario base en JSX */}
      <div className='login'>
        <div className='login-container'>
        <img src={reactLogo} className="logo react" alt="React logo" />
          
          <form >
              {/* Paso #3: Guardo la información en el estado de */}
            <label htmlFor='email'>Email</label>
            <input
              type='text'
              name='email'
              placeholder='correo@mail.com'
              id='simple-email'
             
              
              />
            <label htmlFor='password'>Password</label>
            <input
              type='password'
              name='password'
              id='simple-password'
              
              
              />
            
            <button type='submit'>
              Iniciar Sesion
            </button>
            
          </form>
        </div>
      </div>
      </div>
    )
  }

  export default SimpleForm