import { Router } from "express";
import {
  register,
  login,
  logout,
  profile
} from "../controllers/auth.controller.js";

import { authRequired } from "../middleware/validateToken.js";
import { validateSchema } from "../middleware/validator.middleware.js"; // middleware validador que compara el objeto de zod con el objeto que se le pasa en el body
import { registerSchema, loginSchema } from "../schemas/auth.schema.js"; // schemas de zod para validar el body de la peticion

const router = Router(); // Define la genracion de un enrutador para express, y de esa manera trabajar de manera modular y ordenada

// Aqui se definen las rutas que el frontend puede acceder
router.post("/register", validateSchema(registerSchema), register); // validateSchema compara cuerpos de zod y body de la peticion
router.post("/login", validateSchema(loginSchema), login);
router.post("/logout", logout);
router.get("/profile", authRequired, profile);

export default router; // al exportar como default, puedes cambiarle el nombre a este modulo, como por ejemplo authRouters en app.js
