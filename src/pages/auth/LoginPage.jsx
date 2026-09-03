import { Anchor, Text, TextInput, Title, PasswordInput, Button, Flex } from "@mantine/core";
import { useForm } from "react-hook-form";
import { Link } from "react-router";
import { LoginSchema } from "../../schemas/AuthSchemas";
import { zodResolver } from "@hookform/resolvers/zod";

export function LoginPage() {
	const form = useForm({
		resolver: zodResolver(LoginSchema)
	});

	// Se ejecuta si todo está correcto
	function onSubmit (data) {
		console.log("Formulario validado! Datos:", data)
	}

	return (
		<form onSubmit={form.handleSubmit(onSubmit)}>
			<Flex
				direction="column"
				gap="md"
			>
				<Title order={2}>Ingresá a tu cuenta</Title>

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
					Iniciar sesión
				</Button>

				<Text size="sm" ta="center">
					¿No tenés cuenta?{" "}
					<Anchor
						to="/auth/register"
						underline="hover"
						component={Link}
					>
						Registrarse
					</Anchor>
				</Text>
			</Flex>
		</form>
	);
}
