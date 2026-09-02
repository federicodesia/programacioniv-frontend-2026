import { Modal, Button, Flex, Text } from '@mantine/core';

export function DeleteCategoryModal({ disclosure }) {
    return (
        <Modal
            opened={disclosure.isOpen}
            onClose={disclosure.close}
            title="Eliminar categoría"
            centered
        >
            <Text size="sm" textWrap="balance">
                ¿Estás seguro que querés eliminar esta categoría?
                Después no podrás deshacer esta acción.
            </Text>

            <Flex justify="end" mt="16px">
                <Button
                    variant="filled"
                    color="red"
                    onClick={disclosure.close}
                >
                    Eliminar
                </Button>
            </Flex>
        </Modal>
    );
}
