import { Text, Card, Menu, Flex, Button } from "@mantine/core";
import { IconDotsVertical, IconPencilMinus, IconTrash } from "@tabler/icons-react";
import { TablerIcon } from "../TablerIcon";
import { CreateEditCategoryModal } from "../modals/CreateEditCategoryModal";
import { DeleteCategoryModal } from "../modals/DeleteCategoryModal";
import { useModalDisclosure } from "../../hooks/useModalDisclosure";

export function CategoryCard({ category }) {
    return (
        <Card shadow="sm" withBorder p="sm" pr={0}>
            <Flex align="center" justify="space-between">
                <Flex align="center" gap="12px">
                    <TablerIcon name={category.icon} size={22} color="#228be6" />
                    <Text size="md" fw={500}>
                        {category.name}
                    </Text>
                </Flex>
                <ActionsMenu category={category} />
            </Flex>
        </Card>
    );
}

function ActionsMenu() {
    const editDisclosure = useModalDisclosure();
    const deleteDisclosure = useModalDisclosure();

    return (
        <>
            <Menu shadow="md" width={200} position="bottom-end">
                {/* Boton que abre el menu */}
                <Menu.Target>
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
            <CreateEditCategoryModal disclosure={editDisclosure} action="edit"/>
            <DeleteCategoryModal disclosure={deleteDisclosure} />
        </>
    );
}
