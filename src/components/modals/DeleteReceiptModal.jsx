import { useDisclosure } from '@mantine/hooks';
import { Modal, Button, Flex, Text } from '@mantine/core';

export function DeleteReceiptModal({ button, opened, onClose }) {
    const [internalOpened, { open, close }] = useDisclosure(false);
    const isOpened = opened ?? internalOpened;
    const handleClose = onClose ?? close;

    return (
        <>
            <Modal
                opened={isOpened}
                onClose={handleClose}
                title="Eliminar recibo"
                centered
            >
                <Text>
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

            {button?.(open)}
        </>
    );
}