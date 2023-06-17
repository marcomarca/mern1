import {z} from 'zod';

export const registerSchema = z.object({
  username: z.string({
    required_error: 'Username is required',
  }),
  email: z.string({
    required_error: 'Email is required',
  }).email({ // aunque se llame email, necesitas agregar este metodo .email para validar el formato del email sino no lo valida
    message: 'Email is not valid',
  }),
  password: z.string({
    required_error: 'Password is required',
  }).min(6,{
    message: 'Password must be at least 6 characters long',
  })

});

export const loginSchema = z.object({
  email: z.string({
    required_error: 'Email is required',// el primer metodo valida la existencia del email. segunda cadena .email es para validar el formato del email
  }).email({
    message: 'Email is not valid',
  }),
  password: z.string({
    required_error: 'Password is required',
  }).min(6,{
    message: 'Password must be at least 6 characters long',
  })
});

