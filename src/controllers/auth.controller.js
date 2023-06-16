import User from "../models/user.model.js"; // User es el esquema de la base de datos
import bcrypt from "bcryptjs";
import { createAccessToken } from "../libs/jwt.js";

export const register = async (req, res) => {
  const { username, email, password } = req.body;
  // console.log(username, email, password)

  // User.create({ // no es bueno, pues necesito guardarlo en un objeto
  //   username: req.body.username,
  //   email: req.body.email,
  //   password: req.body.password
  // })

  try {
    const passwordHash = await bcrypt.hash(password, 10);
    const newUser = new User({
      // Hasta aqui esta solo guardado el user en este componente
      username,
      email,
      password: passwordHash,
    });

    const userSaved = await newUser.save(); // Guarda el usuario en la base de datos
    // res.json(userSaved); // Muestra el usuario guardado en la base de datos

    // Luego de generado el usuario, se genera el token
    const token = await createAccessToken({ id: userSaved._id });
    res.cookie("token", token); // Se guarda el token en una cookie

    res.json({
      _id: userSaved._id,
      username: userSaved.username,
      email: userSaved.email,
      createdAt: userSaved.createdAt,
      updatedAt: userSaved.updatedAt,
    });
  } catch (err) {
    res.status(500).json({ message: err.message }); // Si hay un error, se muestra el mensaje la crear usuario, al generar el token, o al guardar el token en la cookie, o al mostrar el usuario guardado en la base de datos
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Comparar en la base de datos, si el email existe
    const userFound = await User.findOne({ email });
    if (!userFound) return res.status(400).json({ message: "User not found" });
    const isMatch = await bcrypt.compare(password, userFound.password);
    if (!isMatch)
      return res.status(400).json({ message: "Incorrect password" });

    // Luego de generado el usuario, se genera el token
    const token = await createAccessToken({ id: userFound._id });
    res.cookie("token", token); // Se guarda el token en una cookie

    res.json({
      _id: userFound._id,
      username: userFound.username,
      email: userFound.email,
      createdAt: userFound.createdAt,
      updatedAt: userFound.updatedAt,
    });
  } catch (err) {
    res.status(500).json({ message: err.message }); // Si hay un error, se muestra el mensaje la crear usuario, al generar el token, o al guardar el token en la cookie, o al mostrar el usuario guardado en la base de datos
  }
};

export const logout = async (req, res) => {
  // res.clearCookie("token");
  // res.json({ message: "Logout" });
  // return res.sendStatus(200)
  res.cookie("token", "", {
    // Se guarda el token en una cookie
    expires: new Date(0),
  });
  return res.sendStatus(200);
};

export const profile = async (req, res) => {
  //consulta a la DB si el usuario existe
  const userFound = await User.findById(req.user.id);
  // console.log(req.user.id)

  // console.log(userFound);
  if (!userFound) return res.status(400).json({ message: "User not found" });
  return res.json({
    _id: userFound._id,
    username: userFound.username,
    email: userFound.email,
    createdAt: userFound.createdAt,
    updatedAt: userFound.updatedAt,
  });

  // return res.json('profile')
};
