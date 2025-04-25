import { useEffect } from 'react';
import { Link, useParams } from 'react-router'

import axios from 'axios'
import Alerta from '../components/Alerta';
import { useState } from 'react';

const ConfirmarCuenta = () => {

  const [CuentaConfirmada, setCuentaConfirmada] = useState(false)
  const [cargando, setCargando] = useState(true)
  const [alerta, setAlerta] = useState({})

  const params = useParams()

  const { id } = params;

useEffect(() => {
  const confirmarCuenta =  async () => {
    try {
      const url = `${import.meta.env.VITE_BACKEND_URL}/api/veterinarios/confirmar/${id}`
      const { data } = await axios(url)
      setCuentaConfirmada(true)
      setAlerta({
        msg: data.msg
      })
     
    } catch (error) {
      setAlerta({
       msg: error.response.data.msg,
       error: true

      })
    }
    setCargando(false)
  }
  confirmarCuenta();
}, [])


  return (
    <>
      <div className='text-indigo-600 font-black text-6xl'>
        Confirma tu Cuenta Y Comienza a Administrar 
        <span className='text-black'> Tus Pacientes</span>
      </div>
      <div className='mt-20 md:mt-5 shadow-lg px-5 py-10 rounded-xl bg-white'>
        {!cargando && <Alerta 
        alerta={alerta}
        />}

        { CuentaConfirmada && (
         <Link to="/" className="block text-center my-5 text-gray-500">
         {" "}
         Iniciar sesión
       </Link>
        )}
      </div>
    </>
  )
}

export default ConfirmarCuenta