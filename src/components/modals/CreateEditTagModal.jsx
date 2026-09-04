import { zodResolver } from '@hookform/resolvers/zod';
import { Modal, Button, TextInput, Flex } from '@mantine/core';
import { useForm } from 'react-hook-form';
import { TagSchema } from '../../schemas/TagSchema';

export function CreateEditTagModal({ disclosure, action }) {
    const form = useForm({
        resolver: zodResolver(TagSchema)
    })

    // Se ejecuta si todo está correcto
    function onSubmit(data) {
        console.log("Formulario validado! Datos:", data)
    }

    return (
        <Modal
            opened={disclosure.isOpen}
            onClose={disclosure.close}
            title={action === "create" ? "Nueva etiqueta" : "Editar etiqueta"}
            centered
        >
            <form onSubmit={form.handleSubmit(onSubmit)}>
                <Flex direction="column" gap="12px">
                    <TextInput
                        label="Nombre"
                        error={form.formState.errors.name?.message}
                        {...form.register("name")}
                    />

                    <Flex justify="end" mt="8px">
                        <Button
                            type="submit"
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
