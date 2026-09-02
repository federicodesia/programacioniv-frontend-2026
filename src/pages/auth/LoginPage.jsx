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

				<TextInput label="Correo electrónico" type="email"/>
				<PasswordInput label="Contraseña"/>
				<Button>Iniciar sesión</Button>

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
