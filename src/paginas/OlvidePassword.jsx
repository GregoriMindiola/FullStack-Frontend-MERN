import { Link } from "react-router";

const OlvidePassword = () => {
  return (
    <>
      <div>
        <h1 className="text-indigo-600 font-black text-2xl">
          {" "}
          Recuperar tu Acceso a tus{" "}
          <span className="text-black">Pacientes</span>
        </h1>
      </div>
      <div className="mt-20 md:mt-5 shadow-lg px-5 py-10 rounded-xl bg-white">
        <form action="">
          <div className="my-5">
            <label className="uppercase text-gray-600 block text-xl font-bold">
              Email
            </label>
            <input
              type="text"
              placeholder="Email Registro"
              className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
            />
          </div>
          
          <input
            type="subtit"
            value="Enviar Email"
            className="bg-indigo-700 w-full py-3 px-10 rounded-xl text-center text-white uppercase font-bold mt-5 hover:cursor-pointer md:w-auto hover:bg-indigo-800"
          />
        </form>
        <nav className="mt-10 lg:flex lg:justify-between">
          <Link
            to="/"
            className="block text-center my-5 text-gray-500"
          >
            {" "}
            Ya tienes una cuenta? Inicia sesión
          </Link>
          <Link
            to="/registrar"
            className="block text-center my-5 text-gray-500"
          >
            {" "}
            No tienes una cuenta? Registrate
          </Link>
        </nav>
      </div>
    </>
  )
}

export default OlvidePassword