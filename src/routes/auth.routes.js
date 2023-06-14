import { Router } from "express";
import { register, login } from "../controllers/auth.controller.js";

const router = Router(); // Define la genracion de un enrutador para express, y de esa manera trabajar de manera modular y ordenada

// Aqui se definen las rutas que el frontend puede acceder
router.post('/register', register)
router.post('/login', login)

export default router; // al exportar como default, puedes cambiarle el nombre a este modulo, como por ejemplo authRouters en app.js
