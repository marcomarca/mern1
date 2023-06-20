import { z } from "zod";

export const registerSchema = z.object({
  username: z.string({
    required_error: "Username is required",
  }),
  email: z
    .string({
      required_error: "Email is required",
    })
    .email({
      message: "Email is not valid",
    }),
  password: z
    .string({
      required_error: "Password is required",
    })
    .min(6, {
      message: "Password must be at least 4 characters long",
    })
    // .refine(
    //   (value) => {
    //     const regex = /^(?=.*[A-Z])(?=.*\d).*$/; // Expresión regular para validar una mayúscula y un número
    //     return regex.test(value);
    //   },
    //   {
    //     message:
    //       "Password must contain at least one uppercase letter and one number", 
    //   }
    // ),
});

export const loginSchema = z.object({
  email: z
    .string({
      required_error: "Email is required", // el primer metodo valida la existencia del email. segunda cadena .email es para validar el formato del email
    })
    .email({
      message: "Email is not valid",
    }),
  password: z
    .string({
      required_error: "Password is required",
    })
    .min(6, {
      message: "Password must be at least 6 characters long",
    }),
});
