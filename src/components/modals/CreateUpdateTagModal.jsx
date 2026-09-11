import { zodResolver } from '@hookform/resolvers/zod';
import { Modal, Button, TextInput, Flex } from '@mantine/core';
import { useForm } from 'react-hook-form';
import { TagSchema } from '../../schemas/TagSchema';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { tagsService } from '../../services/tagsService';
import { useEffect } from 'react';

export function CreateUpdateTagModal({ disclosure, editTag }) {
    const form = useForm({
        resolver: zodResolver(TagSchema)
    })

    const queryClient = useQueryClient()

    const mutation = useMutation({
        mutationFn: editTag
            ? tagsService.update
            : tagsService.create,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["tags"] }); // Hace refetch de tags
            disclosure.close(); // Cierra el modal
        }
    })

    function onSubmit(data) {
        if (editTag) mutation.mutate({ id: editTag.id, data });
        else mutation.mutate(data)
    }

    // Reinicia el formulario al abrir/cerrar el modal
    useEffect(() => {
        if (editTag) form.reset(editTag);
        else form.reset();
    }, [disclosure.isOpen, editTag])

    return (
        <Modal
            opened={disclosure.isOpen}
            onClose={disclosure.close}
            title={editTag ? "Editar etiqueta" : "Nueva etiqueta"}
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
                            loading={mutation.isPending}
                        >
                            {editTag ? "Guardar" : "Crear"}
                        </Button>
                    </Flex>
                </Flex>
            </form>
        </Modal>
    );
}
