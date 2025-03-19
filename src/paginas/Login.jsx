import React from "react";

const Login = () => {
  return (
    <>
      <div>
        <h1 className="text-indigo-600 font-black text-2xl">
          {" "}
          Inicia Sesion y Administra tus{" "}
          <span className="text-black">Pacientes</span>
        </h1>
      </div>
      <div>
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
          <div className="my-5">
            <label className="uppercase text-gray-600 block text-xl font-bold">
              Password
            </label>
            <input
              type="text"
              placeholder="Password"
              className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
            />
          </div>
          <input type="subtit"
            value="Iniciar Sesion"
            className="bg-indigo-700 w-full py-3 px-10 rounded-xl text-center text-white uppercase font-bold mt-5 hover:cursor-pointer md:w-auto hover:bg-indigo-800"
          />
        </form>
      </div>
    </>
  );
};

export default Login;
