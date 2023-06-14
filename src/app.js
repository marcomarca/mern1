import express from "express";
import morgan from "morgan";
import authRouters from "./routes/auth.routes.js";


const app = new express(); // crea una nueva instancia de express

app.use(morgan("dev")); // logging middleware
app.use(express.json()); // para que express pueda entender los json que le enviamos desde el cliente

app.use('/api', authRouters); // routes middleware | /api es el prefijo de todas las rutas de authRouters

export default app;
