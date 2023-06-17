export const validateSchema = (schema) => async (req, res, next) => { // En schema esta el objeto de zod para validarlo en el middleware
    try {
        await schema.parse(req.body); // parse sirve para convertir el objeto en un objeto de zod
        next();
    }
    catch (error) {
      // console.log(error.errors.map((err) => err.message));
        res.status(400).json({ error: error.errors.map((err) => err.message) }); // map barre el objeto error, que tiene dentro otro objeto llamado errors, y dentro de este, un array de objetos con el mensaje de error. Se usa map para extraer solo el mensaje de error
    }
}