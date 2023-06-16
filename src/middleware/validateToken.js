import jwt from "jsonwebtoken";
import { TOKEN_KEY } from "../config.js";

export const authRequired = (req, res, next) => {
  // console.log("validate token")
  // console.log(req.headers.cookie)
  const { token } = req.cookies; // No servira, ya que no podemos leer las cookies directamente, necesitamos un modulo -> cookie-parser (instalado)
  // console.log(`el token es ${token}`)
  //console.log(cookies)

  if (!token)
    return res.status(401).json({ message: "No token, Access denied" });

  jwt.verify(token, TOKEN_KEY, (err, user) => {
    if (err) return res.status(401).json({ message: "Invalid token" });
    // console.log(user);
    req.user = user; // decoded es el payload del token y se almacena en la misma peticion del usuario

    // decoded es el payload del token
    // {
    //   payload: { id: '648b6035ab7c4bcbe8b29518' },
    //   iat: 1686873592,
    //   exp: 1686959992
    // }

    next();
  });
};
