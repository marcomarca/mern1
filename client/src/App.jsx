// snippet es 7 rfce
import { BrowserRouter, Routes, Route } from "react-router-dom"; // BrowserRouter: Es un modulo de react, que organiza las rutas de la aplicación | Routes: Es un modulo de react, que organiza las rutas de la aplicación | Route: Es un modulo de react, que organiza las rutas de la aplicación
import { AuthProvider } from "./context/AuthContext"; // AuthProvider: Es un modulo de react, que organiza las rutas de la aplicación

import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

function App() {
  return (
    <AuthProvider>
      {/* AuthProvider es el encargado de almacenar el usuario en un estado y
      verlo dentro de todas la siguientes rutas...*/}
      <BrowserRouter>
        {/* BrowserRouter Es un modulo de react, que organiza las rutas de la aplicación */}
        <Routes>
          <Route
            path="/"
            element={<h1 className="text-4xl font-bold">Hola mundo</h1>}
          />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route
            path="/tasks"
            element={<h1 className="text-4xl font-bold">tasks</h1>}
          />
          <Route
            path="/add-task"
            element={<h1 className="text-4xl font-bold">add-task</h1>}
          />
          <Route
            path="/tasks/:id"
            element={<h1 className="text-4xl font-bold">task by id</h1>}
          />
          <Route
            path="/profile"
            element={<h1 className="text-4xl font-bold">profile</h1>}
          />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
