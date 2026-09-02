import { Modal, Button, TextInput, Flex } from '@mantine/core';

export function CreateEditTagModal({ disclosure, action }) {
    return (
        <Modal
            opened={disclosure.isOpen}
            onClose={disclosure.close}
            title={action === "create" ? "Nueva etiqueta" : "Editar etiqueta"}
            centered
        >
            <form>
                <Flex direction="column" gap="12px">
                    <TextInput label="Nombre"/>

                    <Flex justify="end" mt="8px">
                        <Button variant="filled">
                            {action === "create" ? "Crear" : "Guardar"}
                        </Button>
                    </Flex>
                </Flex>
            </form>
        </Modal>
    );
}
