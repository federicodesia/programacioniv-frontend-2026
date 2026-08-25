import { Button, Container, Flex, Image, SimpleGrid, Text, Title } from "@mantine/core";
import { Link } from "react-router";

export function NotFoundPage() {
    return (
        <Container
            mih="100vh"
            p="xl"
            style={{
                display: "flex",
                alignItems: "center"
            }}
        >
            <SimpleGrid
                cols={{ base: 1, sm: 2 }}
                spacing="64px"
            >
                <Flex
                    direction="column"
                    gap="md"
                >
                    <Title>Oops! Algo salió mal</Title>
                    <Text
                        c="gray"
                        size="lg"
                    >
                        La página que intentas abrir no existe.
                        Es posible que hayas escrito mal la dirección o que la página haya sido trasladada a otra URL.
                        Si crees que esto es un error, contacta con soporte.
                    </Text>

                    <Button
                        variant="outline"
                        size="md"
                        component={Link}
                        to="/"
                    >
                        Volver a la página principal
                    </Button>
                </Flex>

                <Image
                    src="/page-not-found.svg"
                    alt="Página no encontrada"
                    maw="350px"
                />
            </SimpleGrid>
        </Container>
    );
}