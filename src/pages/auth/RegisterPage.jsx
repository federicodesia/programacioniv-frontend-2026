import { Anchor, Text, TextInput, Title, PasswordInput, Button, Flex } from "@mantine/core";
import { Link } from "react-router";

export function RegisterPage() {
	return (
		<form>
			<Flex
				direction="column"
				gap="md"
			>
				<Title order={2}>Crear una cuenta</Title>

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
					Registrarme
				</Button>

				<Text style={{ textAlign: "center" }}>
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
