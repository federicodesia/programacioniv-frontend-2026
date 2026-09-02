import { Button, Container, Flex, Menu, Text, Title } from "@mantine/core";
import { IconChevronDown, IconLogout, IconReceiptFilled, IconUserCircle } from "@tabler/icons-react";

export function Header() {
    return (
        <header style={{
            position: "sticky",
            top: 0,
            zIndex: 99,
            backgroundColor: "#F8F8F8",
            boxShadow: "rgba(0, 0, 0, 0.1) 0px 1px 2px"
        }}>
            <Container style={{
                height: "64px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "8px"
            }}>
                <Flex gap="xs" align="center">
                    <IconReceiptFilled size={28} color="#1c7ed6" />
                    <Title size="md" c="dark">Control de gastos</Title>
                </Flex>

                <UserMenu />
            </Container>
        </header>
    )
}

function UserMenu() {
    return (
        <Menu width={200}>
            <Menu.Target>
                <Button
                    variant="transparent"
                    color="dark"
                    px={0}
                >
                    <Flex align="center" gap="xs">
                        <IconUserCircle size={22} stroke={1.5} />
                        <Text size="sm" fw={500}>usuario@gmail.com</Text>
                        <IconChevronDown size={16} />
                    </Flex>
                </Button>
            </Menu.Target>

            <Menu.Dropdown>
                <Menu.Item
                    leftSection={<IconLogout size={16} />}
                    color="red"
                    fw={500}
                >
                    Cerrar sesión
                </Menu.Item>
            </Menu.Dropdown>
        </Menu>
    )
}