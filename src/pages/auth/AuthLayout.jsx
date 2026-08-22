import { BackgroundImage, Flex, Paper, SimpleGrid, Text, Title } from "@mantine/core";
import { IconReceiptFilled } from "@tabler/icons-react";
import { Outlet } from "react-router";

export function AuthLayout() {
    return (
        <SimpleGrid
            spacing="none"
            cols={{ base: 1, md: 2 }}
            h="100vh"
        >
            {/* Lado izquierdo */}
            <Paper
                shadow="xl"
                w="100%"
                maw="400px"
                m="auto"
                p="xl"
            >
                {/* Contenido de la ruta */}
                <Outlet />
            </Paper>

            {/* Lado derecho */}
            <BackgroundImage
                src="/auth-background.jpg"
                visibleFrom="md"
            >
                <Flex
                    h="100vh"
                    direction="column"
                    justify="center"
                    c="white"
                    p="64px"
                    gap="xs"
                >
                    <Flex
                        direction="row"
                        align="center"
                        gap="sm"
                    >
                        <IconReceiptFilled
                            size={48}
                            style={{
                                color: "#1c7ed6",
                                backgroundColor: "white",
                                borderRadius: "12px",
                                padding: "8px"
                            }}
                        />

                        <Title size="xl">Control de gastos</Title>
                    </Flex>

                    <Title size="48px">Bienvenido</Title>
                    <Text size="20px">Organizá tus recibos de manera rápida y sencilla</Text>
                </Flex>
            </BackgroundImage>
        </SimpleGrid>
    )
}
