import { z } from "zod";

export const ReceiptSchema = z.object({
	amount: z.coerce
        .number("Ingresa el monto")
        .positive("Debe ser un número positivo"),

	description: z
		.string("Ingresa la descripción")
		.min(4, "Debe tener mínimo 4 caracteres")
		.max(64, "Debe tener máximo 64 caracteres"),

	date: z
		.string("Selecciona la fecha")	
		.date("Ingresa una fecha válida"),

	categoryId: z.coerce	
		.number("Selecciona una categoría")
		.int("Selecciona una categoría")
		.positive("Selecciona una categoría"),

	tagIds: z.coerce
		.number("Selecciona las etiquetas")
		.int("Selecciona las etiquetas")
		.positive("Selecciona las etiquetas")
        .array()
		.max(3, "Debe tener como máximo 3 etiquetas")
});
