import { zodResolver } from "@hookform/resolvers/zod";
import { Anchor, Text, TextInput, Title, PasswordInput, Button, Flex } from "@mantine/core";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router";
import { RegisterSchema } from "../../schemas/AuthSchemas";
import { authService } from "../../services/authService";
import { useMutation } from "@tanstack/react-query";

export function RegisterPage() {
	const navigate = useNavigate();

	const form = useForm({
		resolver: zodResolver(RegisterSchema)
	});

	const registerMutation = useMutation({
		mutationFn: authService.register,
		onSuccess: () => {
			navigate("/auth/login")
		}
	})

	// Se ejecuta si todo está correcto
	function onSubmit(data) {
		console.log("Formulario validado! Datos:", data)
		registerMutation.mutate(data)
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

				{
					registerMutation.isError
						? <Text c="red">Algo salió mal!</Text>
						: null
				}	

				<Button type="submit" loading={registerMutation.isPending}>
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
