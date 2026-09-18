import { zodResolver } from '@hookform/resolvers/zod';
import { Modal, Button, TextInput, NumberInput, Select, Flex, MultiSelect, FileInput } from '@mantine/core';
import { DateInput } from '@mantine/dates';
import { Controller, useForm } from 'react-hook-form';
import { ReceiptSchema } from '../../schemas/ReceiptSchema'
import { IconPhoto } from '@tabler/icons-react';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { receiptsService } from '../../services/receiptsService';
import { categoriesService } from '../../services/categoriesService';
import { tagsService } from '../../services/tagsService';
import { useEffect } from 'react';

export function CreateEditReceiptModal({ disclosure, editReceipt }) {
    const form = useForm({
        resolver: zodResolver(ReceiptSchema),
        defaultValues: {
            tagIds: []
        }
    })

    const categoriesQuery = useQuery({
        queryFn: categoriesService.getAll,
        queryKey: ["categories"]
    })

    const tagsQuery = useQuery({
        queryFn: tagsService.getAll,
        queryKey: ["tags"]
    })

    const queryClient = useQueryClient()

    const mutation = useMutation({
        mutationFn: receiptsService.create,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["receipts"] }); // Hace refetch de recibos
            disclosure.close(); // Cierra el modal
        }
    })

    useEffect(() => {
        form.reset(); // Vaciar el formulario
    }, [disclosure.isOpen])

    return (
        <Modal
            opened={disclosure.isOpen}
            onClose={disclosure.close}
            title={editReceipt ? "Editar recibo" : "Nuevo recibo"}
            centered
        >
            <form onSubmit={form.handleSubmit(mutation.mutate)}>
                <Flex direction="column" gap="6px">
                    <Controller
                        name="amount"
                        control={form.control}
                        render={({ field, fieldState }) => (
                            <NumberInput
                                label="Monto"
                                min={0}
                                prefix="$"
                                value={field.value ?? ""}
                                onChange={field.onChange}
                                error={fieldState.error?.message}
                            />
                        )}
                    />

                    <Controller
                        name="date"
                        control={form.control}
                        render={({ field, fieldState }) => (
                            <DateInput
                                label="Fecha"
                                value={field.value}
                                onChange={field.onChange}
                                error={fieldState.error?.message}
                            />
                        )}
                    />

                    <TextInput
                        label="Descripción"
                        error={form.formState.errors.description?.message}
                        {...form.register("description")}
                    />

                    <Controller
                        name="categoryId"
                        control={form.control}
                        render={({ field, fieldState }) => (
                            <Select
                                label="Categoría"
                                data={categoriesQuery.data?.map((category) => ({
                                    value: category.id,
                                    label: category.name
                                }))}
                                loading={categoriesQuery.isLoading}
                                value={field.value ?? null}
                                onChange={field.onChange}
                                error={fieldState.error?.message}
                            />
                        )}
                    />

                    <Controller
                        name="tagIds"
                        control={form.control}
                        render={({ field, fieldState }) => (
                            <MultiSelect
                                label="Etiquetas"
                                data={tagsQuery.data?.map((tag) => ({
                                    value: tag.id,
                                    label: tag.name
                                }))}
                                loading={tagsQuery.isLoading}
                                value={field.value ?? []}
                                onChange={field.onChange}
                                error={fieldState.error?.message}
                            />
                        )}
                    />

                    <Controller
                        name="file"
                        control={form.control}
                        render={({ field, fieldState }) => (
                            <FileInput
                                leftSection={<IconPhoto size={16} />}
                                leftSectionPointerEvents="none"
                                label="Subir imagen"
                                placeholder="Seleccionar archivo"
                                accept="image/png, image/jpeg"
                                error={form.formState.errors.file?.message}
                                onChange={field.onChange}
                                value={field.value}
                            />
                        )}
                    />

                    <Flex justify="end" mt="16px">
                        <Button type="submit" variant="filled">
                            {editReceipt ? "Guardar" : "Crear"}
                        </Button>
                    </Flex>
                </Flex>
            </form>
        </Modal>
    );
}