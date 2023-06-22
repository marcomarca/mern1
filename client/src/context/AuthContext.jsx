// Usaremos useState para qué se almacene el usuario en un estado y así poder usarlo en toda la aplicación
import { createContext, useState, useContext } from "react"; // createContext: Crea un contexto de datos, useState: Hook que nos permite crear un estado
import { registerRequest } from "../api/auth"; // registerRequest => Funcion que registra OBJETO los datos que escribio el usuario y los envia al backend por axios

export const AuthContext = createContext(); // Se instancia el contexto, aqui guardaremos el usuario

/*********************************** Hook useAuth **********************************************/
// useAuth => Funcion que permite acceder al contexto AuthContext | Es como encender el contexto `ON`
// useAuth => En lugar de estar importando el AuthContext AND useContext, ahora solo sea necesario importar useAuth
export const useAuth = () => {
  // Cargar el contexto del usuario en "context" y lo devuelve
  const context = useContext(AuthContext); // useContext => ON: AuthContext (activa el uso de AuthContext en el componente que se lo llama) | Ahora en la funcion useAuth se puede acceder al contexto
  if (!context) {
    throw new Error("useAuth debe estar dentro del proveedor AuthContext");
  }
  return context;
};
/***********************************************************************************************/

/*********************************** Context Provider ******************************************/
// AuthProvider => Encargado de proveer el contexto (Context Provider) a toda la aplicación | children: Es el componente que se va a renderizar dentro del AuthProvider (No importa lo que vale)
export const AuthProvider = ({ children }) => {
  // children: Es el componente que se va a renderizar dentro del AuthProvider (No importa lo que vale)
  const [user, setUser] = useState(null); // Se crea el estado del usuario, se inicializa en null
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Se crea el estado de autenticación, se inicializa en false

  // envia datos user al backend por axios | Esta peticion de signup se almacen en el contexto AuthContext porque es una funcion que se va a usar en toda la aplicacion
  const signup = async (user) => {
    try {
      const res = await registerRequest(user); // Se envia el usuario al backend | res contiene la respuesta del servidor
      console.log(res.data);
      setUser(res.data); // Se almacena el usuario en el estado del actual contexto
      setIsAuthenticated(true); // Se cambia el estado de autenticación a true, en este contexto
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <AuthContext.Provider // Viene del Modulo createContext de react |
      value={{
        signup, // se podra ver el valor de signup desde cualquier componente
        user, // Ahora se puede acceder al usuario desde cualquier componente
        isAuthenticated,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
/***********************************************************************************************/
