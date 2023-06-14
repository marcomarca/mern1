import app from "./app.js" // Importarlo significa correr este codigo primero
import {connectDB} from "./db.js"

connectDB()

app.listen(4000)
console.log(`Server running on port 4000`)