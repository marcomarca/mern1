import User from '../models/user.model.js' // User es el esquema de la base de datos

export const register = async (req, res) => {
  const { username, email, password } = req.body;
  // console.log(username, email, password)

  // User.create({ // no es bueno, pues necesito guardarlo en un objeto 
  //   username: req.body.username,
  //   email: req.body.email,
  //   password: req.body.password
  // })
  
  try {
    const newUser = new User( // Hasta aqui esta solo guardado el user en este componente
    {
      username,
      email,
      password
    }
    )
    const userSaved = await newUser.save(); // Guarda el usuario en la base de datos
    res.json(userSaved); // Muestra el usuario guardado en la base de datos
  } catch (err) {
    console.log(err)
  }
}

export const login = async (req, res) => { await res.send("login") }
