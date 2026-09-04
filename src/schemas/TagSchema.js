import { z } from "zod";

export const TagSchema = z.object({
    name: z
        .string("Ingresa el nombre")
        .min(4, "Debe tener mínimo 4 caracteres")
        .max(16, "Debe tener máximo 16 caracteres")
})