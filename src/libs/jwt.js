import jwt from "jsonwebtoken";
import { TOKEN_KEY } from "../config.js";

export const createAccessToken = (payload) => { // Mi error fue el no colocar el return en la funcion flecha, pues pense erroneamente que era innecesario
  return new Promise((resolve, reject) => {
    jwt.sign(
       payload, // Primer parametro es el payload a encriptar // Mi error fue colocarlo entre {} lo cual hizo que la forma de extraer este ID cambie, pues para acceder al contenido de este token se debe hacer de la siguiente manera: req.user.payload.id. Pero si se coloca sin {}, se puede acceder de la siguiente manera: req.user.id
      TOKEN_KEY, // Segundo parametro es la clave para desencriptar
      {
        expiresIn: "1d", // Tercer parametro es el tiempo hasta expiracion de token
      },
      (err, token) => {
        if (err) reject(err);
        resolve(token);
      }
    );
  });
};
