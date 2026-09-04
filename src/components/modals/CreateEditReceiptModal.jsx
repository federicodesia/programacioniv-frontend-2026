import { zodResolver } from '@hookform/resolvers/zod';
import { Modal, Button, TextInput, NumberInput, Select, Flex, MultiSelect } from '@mantine/core';
import { DateInput } from '@mantine/dates';
import { Controller, useForm } from 'react-hook-form';
import { ReceiptSchema } from '../../schemas/ReceiptSchema'

export function CreateEditReceiptModal({ disclosure, action }) {
    const form = useForm({
        resolver: zodResolver(ReceiptSchema),
        defaultValues: {
            tagIds: []
        }
    })

    function onSubmit(data) {
        console.log("Formulario validado! Datos:", data)
    }

    return (
        <Modal
            opened={disclosure.isOpen}
            onClose={disclosure.close}
            title={action === "create" ? "Nuevo recibo" : "Editar recibo"}
            centered
        >
            <form onSubmit={form.handleSubmit(onSubmit)}>
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
                                data={[
                                    { value: "1", label: "Impuestos" },
                                    { value: "2", label: "Servicios" },
                                    { value: "3", label: "Alquiler" },
                                    { value: "4", label: "Comida" },
                                ]}
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
                                data={[
                                    { value: "1", label: "Casa" },
                                    { value: "2", label: "Auto" },
                                    { value: "3", label: "Moto" },
                                ]}
                                value={field.value ?? []}
                                onChange={field.onChange}
                                error={fieldState.error?.message}
                            />
                        )}
                    />

                    <Flex justify="end" mt="16px">
                        <Button type="submit" variant="filled">
                            {action === "create" ? "Crear" : "Guardar"}
                        </Button>
                    </Flex>
                </Flex>
            </form>
        </Modal>
    );
}