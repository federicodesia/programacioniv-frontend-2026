import { useDisclosure } from '@mantine/hooks';
import { Modal, Button, TextInput, NumberInput, Select, Flex } from '@mantine/core';

export function NewEditReceiptModal({ action, button, opened, onClose }) {
    const [internalOpened, { open, close }] = useDisclosure(false);
    const isOpened = opened ?? internalOpened;
    const handleClose = onClose ?? close;

    return (
        <>
            <Modal
                opened={isOpened}
                onClose={handleClose}
                title={action === "create" ? "Nuevo recibo" : "Editar recibo"}
                centered
            >
                <form>
                    <TextInput
                        label="Descripción"
                    />

                    <NumberInput
                        label="Monto"
                        min={0}
                        prefix="$"
                    />

                    <Select
                        label="Categoría"
                        data={['Impuestos', 'Servicios', 'Alquiler', 'Comida']}
                    />

                    <Flex justify="end" mt="16px">
                        <Button
                            variant="filled"
                        >
                            {action === "create" ? "Crear" : "Guardar"}
                        </Button>
                    </Flex>
                </form>
            </Modal>

           {button?.(open)}
        </>
    );
}