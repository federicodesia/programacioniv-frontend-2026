import z from "zod";

const AuthSchema = z.object({
    email: z
        .email("Ingresa el email")
        .min(12, "Debe tener mínimo 12 caracteres")
        .max(64, "Debe tener máximo 64 caracteres"),
    
    password: z
        .string("Ingresa la contraseña")
        .min(4, "Debe tener mínimo 4 caracteres")
        .max(32, "Debe tener máximo 32 caracteres")
})

export const LoginSchema = AuthSchema

export const RegisterSchema = AuthSchema