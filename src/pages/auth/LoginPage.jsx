import { Anchor, Text, TextInput, Title, PasswordInput, Button, Flex } from "@mantine/core";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router";
import { LoginSchema } from "../../schemas/AuthSchemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { authService } from "../../services/authService";
import { useMutation } from "@tanstack/react-query";

export function LoginPage() {
	const navigate = useNavigate();

	const form = useForm({
		resolver: zodResolver(LoginSchema)
	});

	const loginMutation = useMutation({
		mutationFn: authService.login,
		onSuccess: (response) => {
			const token = response.data.token;
			localStorage.setItem("token", token);
			navigate("/")
		}
	})

	// Se ejecuta si todo está correcto
	function onSubmit(data) {
		console.log("Formulario validado! Datos:", data)
		loginMutation.mutate(data)
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

				{
					loginMutation.isError
						? <Text c="red">Algo salió mal!</Text>
						: null
				}

				<Button type="submit" loading={loginMutation.isPending} >
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
