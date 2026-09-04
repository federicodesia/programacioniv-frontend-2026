import { z } from "zod";

export const CategorySchema = z.object({
    name: z
        .string("Ingresa el nombre")
        .min(4, "Debe tener mínimo 4 caracteres")
        .max(16, "Debe tener máximo 16 caracteres"),
    
    iconName: z
        .string("Selecciona un icono")
        .min(4, "Debe tener mínimo 4 caracteres")
        .max(32, "Debe tener máximo 32 caracteres"),
})