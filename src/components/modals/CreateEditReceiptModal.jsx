import { Modal, Button, TextInput, NumberInput, Select, Flex, MultiSelect } from '@mantine/core';

export function CreateEditReceiptModal({ disclosure, action }) {
    return (
        <Modal
            opened={disclosure.isOpen}
            onClose={disclosure.close}
            title={action === "create" ? "Nuevo recibo" : "Editar recibo"}
            centered
        >
            <form>
                <Flex direction="column" gap="6px">
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

                    <MultiSelect
                        label="Etiquetas"
                        data={['Casa', 'Auto', 'Moto']}
                    />

                    <Flex justify="end" mt="16px">
                        <Button
                            variant="filled"
                        >
                            {action === "create" ? "Crear" : "Guardar"}
                        </Button>
                    </Flex>
                </Flex>
            </form>
        </Modal>
    );
}