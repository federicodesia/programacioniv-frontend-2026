import z from "zod";

const AuthSchema = z.object({
    email: z.email("Ingresa el email")
        .min(10, "Debe tener mínimo 10 caracteres")
        .max(30, "Debe tener máximo 30 caracteres"),
    
    password: z.string("Ingresa la contraseña")
        .min(8, "Debe tener mínimo 8 caracteres")
        .max(25, "Debe tener máximo 25 caracteres")
})

export const LoginSchema = AuthSchema

export const RegisterSchema = AuthSchema