// snippet es 7 rfce
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

function App() {
  return (
    <BrowserRouter>
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
  );
}

export default App;
