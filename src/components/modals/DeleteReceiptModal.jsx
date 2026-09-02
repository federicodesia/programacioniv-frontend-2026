import { Modal, Button, Flex, Text } from '@mantine/core';

export function DeleteReceiptModal({ disclosure }) {
    return (
        <Modal
            opened={disclosure.isOpen}
            onClose={disclosure.close}
            title="Eliminar recibo"
            centered
        >
            <Text size="sm" textWrap="balance">
                ¿Estás seguro que querés eliminar este recibo?
                Después no podrás deshacer esta acción.
            </Text>

            <Flex justify="end" mt="16px">
                <Button
                    variant="filled"
                    color="red"
                >
                    Eliminar
                </Button>
            </Flex>
        </Modal>
    );
}