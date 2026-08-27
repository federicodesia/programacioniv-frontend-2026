import { useDisclosure } from '@mantine/hooks';
import { Modal, Button, TextInput, NumberInput, Select, Flex } from '@mantine/core';
import { IconPlus } from '@tabler/icons-react';

export function NewEditReceiptModal({ action, button }) {
    const [opened, { open, close }] = useDisclosure(false);

    return (
        <>
            <Modal
                opened={opened}
                onClose={close}
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

           {button(open)}
        </>
    );
}