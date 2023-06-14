export const register = (req, res) => {
  console.log(req.body);
  res.send("register");
}
export const login = async (req, res) => { await res.send("login") }
