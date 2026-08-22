import { Anchor, Text, TextInput, Title, PasswordInput, Button, Flex } from "@mantine/core";
import { Link } from "react-router";

export function LoginPage() {
	return (
		<form>
			<Flex
				direction="column"
				gap="md"
			>
				<Title order={2}>Ingresá a tu cuenta</Title>

				<TextInput
					size="md"
					radius="lg"
					label="Correo electrónico"
					type="email"
				/>

				<PasswordInput
					size="md"
					radius="lg"
					label="Contraseña"
				/>

				<Button
					size="md"
					radius="lg"
					variant="filled"
				>
					Iniciar sesión
				</Button>

				<Text style={{ textAlign: "center" }}>
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
