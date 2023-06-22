//React Hook Form: Maneja el estado y la validación de los formularios en React con el uso de Hooks. "npm install react-hook-form"
import { useForm } from "react-hook-form";
//
import { useAuth } from "../context/AuthContext"; // useAuth => Funcion que permite acceder al contexto AuthContext

import { useEffect } from "react"; // useEffect => Funcion que permite ejecutar codigo cuando se renderiza el componente
import { useNavigate } from "react-router-dom"; // useNavigate => Funcion que permite navegar entre paginas

/*********************************** Principal componente ***********************************/
export default function RegisterPage() {
  const { register, handleSubmit } = useForm(); // 'register' almacenar al usuario en un ESTADO | 'handleSubmit' enviar los datos del usuario al servidor
  const { signup, user } = useAuth(); // Se obtiene el usuario y la funcion signup del contexto AuthContext
  console.log(user);

  const onSubmit = handleSubmit(async (values) => {
    // Cuando se llama a `onSubmit` corre: | (Aqui cuando el cliente hace click en el boton de registrar...)
    signup(values); // Se envia el usuario al backend
  });

  return (
    <div className="flex items-center justify-center h-screen">
      <form
        className="flex flex-col px-8 pt-6 pb-8 bg-white rounded shadow-md"
        onSubmit={onSubmit}
      >
        <input
          className="px-3 py-2 mb-4 border border-gray-400 rounded" // ctrl + alt + T : Para formatear los estilos de tailwind
          type="text"
          placeholder="Usuario"
          {...register("username", { required: true })}
        />
        <input
          className="px-3 py-2 mb-4 border border-gray-400 rounded"
          name="email"
          placeholder="Correo electrónico"
          {...register("email", { required: true })}
        />
        <input
          className="px-3 py-2 mb-4 border border-gray-400 rounded"
          type="password"
          placeholder="Contraseña"
          {...register("password", { required: true })}
        />
        <button
          className="px-4 py-2 font-bold text-white bg-red-500 rounded hover:bg-red-600"
          type="submit"
        >
          Registrar
        </button>
      </form>
    </div>
  );
}
/***********************************************************************************************/
