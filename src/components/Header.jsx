import { Anchor, Button, Container, Flex, Menu, Text, Title } from "@mantine/core";
import { IconChevronDown, IconLogout, IconReceiptFilled, IconUserCircle } from "@tabler/icons-react";
import { Link, useLocation } from "react-router";

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
                gap: "12px"
            }}>
                <Flex gap="xl" align="center">
                    <Flex gap="xs" align="center">
                        <IconReceiptFilled size={28} color="#1c7ed6" />
                        <Title size="md" c="dark" visibleFrom="sm">Control de gastos</Title>
                    </Flex>

                    <NavLinks links={[
                        { to: "/", label: "Recibos" },
                        { to: "/categories", label: "Categorías" },
                        { to: "/tags", label: "Etiquetas" },
                    ]} />
                </Flex>

                <UserMenu />
            </Container>
        </header>
    )
}

function NavLinks({ links }) {
    const location = useLocation();

    return (
        <Flex align="center">
            {links.map((link) => {
                const isActive = location.pathname === link.to;
                return (
                    <Anchor
                        key={link.to}
                        component={Link}
                        to={link.to}
                        c={isActive ? "#1c7ed6" : "#495057"}
                        underline="never"
                        size="sm"
                        fw={600}
                        p="12px"
                    >
                        {link.label}
                    </Anchor>
                );
            })}
        </Flex>
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
                        <Text size="sm" fw={500} visibleFrom="sm">usuario@gmail.com</Text>
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
