import express from "express";
import morgan from "morgan";
import cookieParser from 'cookie-parser'
import cors from 'cors'

import authRouters from "./routes/auth.routes.js";
import taskRouters from "./routes/task.routes.js";



const app = new express(); // crea una nueva instancia de express

app.use(cors({
    origin: 'http://localhost:5173', // Ahora solo este dominio puede hacer peticiones al servidor. Los demas dominios seran bloqueados
}
))
app.use(morgan("dev")); // logging middleware
app.use(express.json()); // para que express pueda entender los json que le enviamos desde el cliente
app.use(cookieParser()) // para que express pueda entender las cookies que le enviamos desde el cliente

app.use('/api', authRouters); // routes middleware | /api es el prefijo de todas las rutas de authRouters
app.use('/api', taskRouters); // routes middleware | /api es el prefijo de todas las rutas de taskRouters

export default app;
