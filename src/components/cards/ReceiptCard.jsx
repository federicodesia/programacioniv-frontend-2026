import { Card, Image, Text, Badge, Button, Flex, Menu } from '@mantine/core';
import { IconDotsVertical, IconPencilMinus, IconReceipt, IconTrash } from '@tabler/icons-react';
import { CreateEditReceiptModal } from '../modals/CreateEditReceiptModal';
import { DeleteReceiptModal } from '../modals/DeleteReceiptModal';
import { useModalDisclosure } from '../../hooks/useModalDisclosure'

export function ReceiptCard() {
    return (
        <Card shadow="sm" p={0} withBorder orientation="horizontal">
            <Image
                src="https://img.elnueve.com.ar/sites/default/files/styles/1_91_1_max_1200px/public/2024-02/snap-3bd24087-bdac-43a2-a46b-111c2f01a1e6.jpg?h=c673cd1c&itok=bB7zmdRi"
                style={{
                    width: "165px",
                    height: "100%",
                    aspectRatio: 1 / 1
                }}
                alt="Recibo"
            />

            <Flex w="100%" justify="space-between" align="center" p="24px">
                <Flex direction="column" gap="10px">
                    <Text size="sm" c="#888">27 ago 2026</Text>
                    <Text size="md">Electricidad</Text>

                    <Flex gap="6px">
                        <IconReceipt size="20px" color="#333" />
                        <Text size="sm">Servicios</Text>
                    </Flex>

                    <Flex gap="6px">
                        <Badge>Servicios</Badge>
                        <Badge>Servicios</Badge>
                    </Flex>
                </Flex>

                <Text size="xl" fw={500}>$100.000</Text>
            </Flex>

            <ActionsMenu />
        </Card>
    );
}

function ActionsMenu() {
    const editDisclosure = useModalDisclosure();
    const deleteDisclosure = useModalDisclosure();

    return (
        <>
            <Menu shadow="md" width={200}>
                {/* Boton que abre el menu */}
                <Menu.Target style={{
                    position: "absolute",
                    top: "12px",
                    right: "0px"
                }} >
                    <Button variant="transparent">
                        <IconDotsVertical size={18} />
                    </Button>
                </Menu.Target>

                {/* Opciones del menu */}
                <Menu.Dropdown>
                    <Menu.Item
                        leftSection={<IconPencilMinus size={16} />}
                        onClick={editDisclosure.open}
                    >
                        Editar
                    </Menu.Item>

                    <Menu.Item
                        color="red"
                        leftSection={<IconTrash size={16} />}
                        onClick={deleteDisclosure.open}
                    >
                        Eliminar
                    </Menu.Item>
                </Menu.Dropdown>
            </Menu>

            {/* Modales */}
            <CreateEditReceiptModal disclosure={editDisclosure} action="edit" />
            <DeleteReceiptModal disclosure={deleteDisclosure} />
        </>
    );
}