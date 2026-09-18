import { Card, Text, Badge, Button, Flex, Menu } from '@mantine/core';
import { IconDotsVertical, IconPencilMinus, IconPhoto, IconReceipt, IconTag, IconTrash } from '@tabler/icons-react';
import { CreateEditReceiptModal } from '../modals/CreateEditReceiptModal';
import { DeleteReceiptModal } from '../modals/DeleteReceiptModal';
import { useModalDisclosure } from '../../hooks/useModalDisclosure'
import { ReceiptImageModal } from '../modals/ReceiptImageModal';

export function ReceiptCard({ receipt }) {
    return (
        <Card shadow="sm" p={0} withBorder orientation="horizontal">
            <Flex w="100%" justify="space-between" align="center" p="24px">
                <Flex direction="column" gap="10px">
                    <Text size="sm" c="#888">{receipt.date}</Text>
                    <Text size="md">{receipt.description}</Text>

                    <Flex gap="8px" align="center">
                        <IconReceipt size="20px" color="#333" />
                        <Text size="sm">{receipt.categoryName}</Text>
                    </Flex>

                    {
                        receipt.tagNames.length > 0
                            ? <Flex gap="8px" align="center">
                                <IconTag size="20px" color="#333" />
                                {
                                    receipt.tagNames.map((tagName) => (
                                        <Badge>{tagName}</Badge>
                                    ))
                                }
                            </Flex>
                            : null
                    }
                </Flex>

                <Text size="xl" fw={500}>${receipt.amount}</Text>
            </Flex>

            <ActionsMenu receipt={receipt} />
        </Card>
    );
}

function ActionsMenu({ receipt }) {
    const editDisclosure = useModalDisclosure();
    const deleteDisclosure = useModalDisclosure();
    const photoDisclosure = useModalDisclosure();

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
                        leftSection={<IconPhoto size={16} />}
                        onClick={photoDisclosure.open}
                    >
                        Ver recibo
                    </Menu.Item>

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
            <ReceiptImageModal disclosure={photoDisclosure} receipt={receipt} />
            <CreateEditReceiptModal disclosure={editDisclosure} />
            <DeleteReceiptModal disclosure={deleteDisclosure} />
        </>
    );
}