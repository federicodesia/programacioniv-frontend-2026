import { Card, Image, Text, Badge, Button, Flex, Menu } from '@mantine/core';
import { IconDotsVertical, IconPencilMinus, IconTrash } from '@tabler/icons-react';
import { NewEditReceiptModal } from '../modals/NewEditReceiptModal';

export function ReceiptCard() {
    return (
        <Card shadow="sm" padding="lg" withBorder orientation="horizontal" style={{
            position: "relative"
        }}>
            <Card.Section>
                <Image
                    src="https://img.elnueve.com.ar/sites/default/files/styles/1_91_1_max_1200px/public/2024-02/snap-3bd24087-bdac-43a2-a46b-111c2f01a1e6.jpg?h=c673cd1c&itok=bB7zmdRi"
                    style={{
                        width: "200px",
                        height: "100%"
                    }}
                    alt="Norway"
                />
            </Card.Section>

            <Flex direction="column" p="24px" gap="4px" >
                <Text size="sm" c="dimmed">27 ago 2026</Text>
                <Text size="xl" fw={500}>$100.000</Text>
                <Text size="sm" c="dimmed">Electricidad</Text>
                <Badge>Servicios</Badge>

                <ActionsMenu />
            </Flex>
        </Card>
    );
}

function ActionsMenu() {
    return (
        <Menu shadow="md" width={200}>
            <Menu.Target style={{
                position: "absolute",
                top: "12px",
                right: "12px"
            }} >
                <Button variant="transparent">
                    <IconDotsVertical size={18} />
                </Button>
            </Menu.Target>

            <Menu.Dropdown>
                <NewEditReceiptModal
                    action="edit"
                    button={(open) =>
                        <Menu.Item
                            leftSection={<IconPencilMinus size={14} />}
                            onClick={open}
                        >
                            Editar
                        </Menu.Item>
                    }
                />

                <Menu.Item
                    color="red"
                    leftSection={<IconTrash size={14} />}
                >
                    Eliminar
                </Menu.Item>
            </Menu.Dropdown>
        </Menu>
    );
}