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

				<TextInput label="Correo electrónico" type="email" />
				<PasswordInput label="Contraseña" />
				<Button>Registrarme</Button>

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
