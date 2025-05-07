import { useState, useEffect } from "react";
import { Link, useParams } from "react-router";
import Alerta from "../components/Alerta";
import clienteAxios from "../config/axios";

const NuevoPassword = () => {
  const [password, setPassword] = useState("");
  const [alerta, setAlerta] = useState({});
  const [tokenValido, setTokenValido] = useState(false);
  const [passwordModificado, setPasswordModificado] = useState(false);

  const params = useParams();
  const { token } = params;

  useEffect(() => {
    const comporbarToken = async () => {
      try {
        await clienteAxios(`/veterinarios/olvide-password/${token}`);
        setAlerta({
          msg: "Coloca tu Nuevo Password",
        });
        setTokenValido(true);
      } catch (error) {
        console.log(error);
        setAlerta({
          msg: "Hubo un error con el enlace",
          error: true,
        });
      }
    };
    comporbarToken();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password < 6) {
      setAlerta({
        msg: "El Password debe ser minimo de 6 caracteres",
        error: true,
      });
      return;
    }

    try {
      const url = `/veterinarios/olvide-password/${token}`;
      const { data } = await clienteAxios.post(url, { password });
      setAlerta({
        msg: data.msg,
      });
      setPasswordModificado(true);
    } catch (error) {
      setAlerta({
        msg: error.response.data.msg,
        error: true,
      });
    }
  };

  const { msg } = alerta;

  return (
    <>
      <div>
        <h1 className="text-indigo-600 font-black text-2xl">
          {" "}
          Reestablece tu Password y no pierdas Acceso a tus{" "}
          <span className="text-black">Pacientes</span>
        </h1>
      </div>

      <div className="mt-20 md:mt-5 shadow-lg px-5 py-10 rounded-xl bg-white">
        {msg && <Alerta alerta={alerta} />}

        {tokenValido && (
          <>
            <form onSubmit={handleSubmit}>
              <div className="my-5">
                <label className="uppercase text-gray-600 block text-xl font-bold">
                  Nuevo Password
                </label>
                <input
                  type="password"
                  placeholder="Tu Password"
                  className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <input
                type="submit"
                value="Guardar Nuevo password"
                className="bg-indigo-700 w-full py-3 px-10 rounded-xl text-center text-white uppercase font-bold mt-5 hover:cursor-pointer md:w-auto hover:bg-indigo-800"
              />
            </form>
          </>
        )}

        {passwordModificado && (
          <Link to="/" className="block text-center my-5 text-gray-500">
            {" "}
            Iniciar sesión
          </Link>
        )}
      </div>
    </>
  );
};

export default NuevoPassword;
