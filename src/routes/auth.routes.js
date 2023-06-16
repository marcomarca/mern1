import { Router } from "express";
import {
  register,
  login,
  logout,
  profile
} from "../controllers/auth.controller.js";

import { authRequired } from "../middleware/validateToken.js";

const router = Router(); // Define la genracion de un enrutador para express, y de esa manera trabajar de manera modular y ordenada

// Aqui se definen las rutas que el frontend puede acceder
router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout);
router.get("/profile", authRequired, profile);

export default router; // al exportar como default, puedes cambiarle el nombre a este modulo, como por ejemplo authRouters en app.js
