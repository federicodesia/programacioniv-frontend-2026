import { zodResolver } from "@hookform/resolvers/zod";
import { Anchor, Text, TextInput, Title, PasswordInput, Button, Flex } from "@mantine/core";
import { useForm } from "react-hook-form";
import { Link } from "react-router";
import { RegisterSchema } from "../../schemas/AuthSchemas";

export function RegisterPage() {
	const form = useForm({
		resolver: zodResolver(RegisterSchema)
	});

	// Se ejecuta si todo está correcto
	function onSubmit(data) {
		console.log("Formulario validado! Datos:", data)
	}

	return (
		<form onSubmit={form.handleSubmit(onSubmit)}>
			<Flex
				direction="column"
				gap="md"
			>
				<Title order={2}>Crear una cuenta</Title>

				<TextInput
					label="Correo electrónico"
					type="email"
					error={form.formState.errors.email?.message}
					{...form.register("email")}
				/>

				<PasswordInput
					label="Contraseña"
					error={form.formState.errors.password?.message}
					{...form.register("password")}
				/>

				<Button type="submit">
					Registrarme
				</Button>

				<Text size="sm" ta="center">
					¿Ya tenés cuenta?{" "}
					<Anchor
						to="/auth/login"
						underline="hover"
						component={Link}
					>
						Ingresar
					</Anchor>
				</Text>
			</Flex>
		</form>
	);
}
