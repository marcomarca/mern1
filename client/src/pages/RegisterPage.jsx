//React Hook Form: Maneja el estado y la validación de los formularios en React con el uso de Hooks. "npm install react-hook-form"
import { useForm } from "react-hook-form";
import { registerRequest } from "../api/auth";

export default function RegisterPage() {
  const { register, handleSubmit } = useForm(); // register es una función que se encarga de almacenar al usuario en un ESTADO

  return (
    <div className="flex justify-center items-center h-screen">
      <form
        className="flex flex-col bg-white shadow-md rounded px-8 pt-6 pb-8"
        onSubmit={handleSubmit(async (values) => {
          console.log(values);
          const res = await registerRequest(values); // values es un objeto que contiene los valores que introdujo el usuario | registerRequest es una función que se encarga de enviar los datos del usuario al servidor
          console.log(res)
        })}
      >
        <input
          className="mb-4 py-2 px-3 border border-gray-400 rounded"
          type="text"
          placeholder="Usuario"
          {...register("username", { required: true })}
        />
        <input
          className="mb-4 py-2 px-3 border border-gray-400 rounded"
          name="email"
          placeholder="Correo electrónico"
          {...register("email", { required: true })}
        />
        <input
          className="mb-4 py-2 px-3 border border-gray-400 rounded"
          type="password"
          placeholder="Contraseña"
          {...register("password", { required: true })}
        />
        <button
          className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
          type="submit"
        >
          Registrar
        </button>
      </form>
    </div>
  );
}
