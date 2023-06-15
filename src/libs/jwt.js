import jwt from "jsonwebtoken";
import { TOKEN_KEY } from "../config.js";

export const createAccessToken = (payload) => { // Mi error fue el no colocar el return en la funcion flecha, pues pense erroneamente que era innecesario
  return new Promise((resolve, reject) => {
    jwt.sign(
      {
        payload, // Primer parametro es el payload a encriptar
      },
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
